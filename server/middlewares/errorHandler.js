function errorHandler(err, req, res, next) {
    switch (err.name) {
        case "Unauthorized":
            return res.status(401).json({ message: err.message });

        default:
            return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = errorHandler