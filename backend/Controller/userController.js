const userModel = require('../Modal/userModal');

const userController = {
    createUser: (req, res) => {
        const { name, designation, email, phone, address } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "Name and email are required" });
        }
        // Check if email already exists
        userModel.findByEmail(email, (err, result) => {
            if (err) {
                console.error("Database Error:", err);
                return res.status(500).json({ message: "Database error" });
            }
            if (result.length > 0) {
                return res.status(400).json({ message: "User already registered" });
            }
            // Insert user
            userModel.createUser({ name, designation, email, phone, address }, (err) => {
                if (err) {
                    console.error("Insert Error:", err);
                    return res.status(500).json({ message: "Failed to register user" });
                }
                res.status(201).json({ message: "User registered successfully" });
            });
        });
    },

    getAllUsers: (req, res) => {
        userModel.getUser(req, (err, users) => {
            if (err) {
                console.error("Database Error:", err);
                return res.status(500).json({ message: "Database error" });
            }
            res.status(200).json(users);
        });
    }
};

module.exports = userController;
