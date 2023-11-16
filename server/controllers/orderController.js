const { Order } = require('../models');
const axios = require('axios');

class OrderController {
    static async addOrder(req, res, next) {
        try {
            const { ItemId, city, province, address, quantity, shippingFee, totalPayment, paymentStatus } = req.body;
            const UserId = req.user.id;
            const order = await Order.create({ ItemId, city, province, address, quantity, shippingFee, totalPayment, paymentStatus, UserId });

            // midtrans code

            res.status(201).json(order);
        } catch (error) {
            next(error);
        }
    };

    static async updateOrder(req, res, next) {
        try {
            const { id } = req.params;
            const { quantity } = req.body;

            if (!quantity) {
                throw { name: "InvalidInput" }
            };

            const order = await Order.findByPk(id)
            if (!order) {
                throw { name: "notFound", message: "Order Not Found" }
            };

            await order.update({ quantity }, {
                where: { id }
            });

            res.status(200).json(order);
        } catch (error) {
            next(error);
        }
    };

    static async deleteOrder(req, res, next) {
        try {
            const { id } = req.params;
            const order = await Order.findByPk(id);

            if (!order) {
                throw { name: "notFound", message: `Order with id ${id} not found` }
            };

            await order.destroy({
                where: { id }
            });

            res.status(200).json({
                message: `Order with id ${id} successfuly deleted`
            });
        } catch (error) {
            next(error);
        }
    };

    static async getProvinces(req, res, next) {
        try {
            const { data } = await axios({
                method: 'GET',
                url: 'https://api.rajaongkir.com/starter/province',
                headers: { key: 'f1ee34113fe0a2a851b4e5fa9475b70b' }
            });

            const result = data.rajaongkir.results.map(el => {
                return {
                    ProvinceId: el.province_id,
                    province: el.province
                }
            });

            res.json({ result });
        } catch (error) {
            next(error);
        }
    };

    static async getCities(req, res, next) {
        try {
            const { data } = await axios({
                method: 'GET',
                url: 'https://api.rajaongkir.com/starter/city',
                q: {province: req.body.province},
                headers: { key: 'f1ee34113fe0a2a851b4e5fa9475b70b' }
            });

            const result = data.rajaongkir.results.map(el => {
                return {
                    CityId: el.city_id,
                    ProvinceId: el.province_id,
                    province: el.province,
                    type: el.type,
                    city: el.city_name,
                    postalCode: el.postal_code
                }
            });

            res.json({ result });
        } catch (error) {
            next(error);
        }
    };

    static async getCost(req, res, next) {
        try {
            const { data } = await axios({
                method: 'POST',
                url: 'https://api.rajaongkir.com/starter/cost',
                headers: { key: 'f1ee34113fe0a2a851b4e5fa9475b70b', 'content-type': 'application/x-www-form-urlencoded' },
                data: { origin: 153, destination: req.body.destination, weight: req.body.weight, courier: 'jne' }
            });

            const result = data.rajaongkir.results[0].costs[1].cost[0];

            res.json({ result });
        } catch (error) {
            next(error);
        }
    };
};

module.exports = OrderController;