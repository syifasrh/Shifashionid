const midtransClient = require('midtrans-client');

class PaymentController {
    static async getMidtransToken(req, res, next) {
        try {
            const snap = new midtransClient.Snap({
                // Set to true if you want Production Environment (accept real transaction).
                isProduction: false,
                serverKey: process.env.MIDTRANS_SERVER_KEY
            });

            const idDate = new Date().getTime();

            const parameter = {
                "transaction_details": {
                    "order_id": "TRX-SO" + idDate,
                    "gross_amount": req.body.totalPayment
                },
                "credit_card": {
                    "secure": true
                },
                "customer_details": {
                    "username": req.user.username,
                    "email": req.user.email
                }
            };

            snap.createTransaction(parameter)
                .then((transaction) => {
                    // transaction token
                    let transactionToken = transaction.token;
                    console.log('transactionToken:', transactionToken);
                    res.status(200).json({ transaction_token: transactionToken });
                });
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = PaymentController;