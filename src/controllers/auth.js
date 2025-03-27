const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

const User = require('../models/user');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
}

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        return res.json({ message: 'Complete todos los campos' });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        return res.json({ message: 'Credenciales no válidas' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        email,
        password: hashedPassword
    });

    if (user) {
        const responseData = {
            user: {
                _id: user._id,
                email: user.email
            },
            token: generateToken(user._id)
        };
        res.status(201).json(responseData);
    } else {
        res.status(400);
        return res.json({ message: 'Credenciales no válidas' });
    }
});

module.exports = { registerUser };