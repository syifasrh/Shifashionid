const { Order } = require('../models');

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
};

module.exports = OrderController;