

const User = require('../models/user.model');
// const User = require('../models/user.model');

// console.log('User import:', User);
// console.log('User type:', typeof User);


//!!!

function getSignup(req, res) {
    res.render('customer/auth/signup');
}

async function signup(req, res) {
    const user = new User(
        req.body.email,
        req.body.password,
        req.body.fullname,
        req.body.street,
        req.body.postal,
        req.body.city
    );

    await user.signup();

    res.redirect('/login');
}


// async function signup(req, res) {
//     console.log('Content-Type:', req.headers['content-type']);
//     console.log('Request body:', req.body);

//     if (!req.body) {
//         return res.status(400).send(
//             'Missing request body. Check form encoding and middleware.'
//         );
//     }

//     const user = new User(
//         req.body.email,
//         req.body.password,
//         req.body.fullname,
//         req.body.street,
//         req.body.postal,
//         req.body.city
//     );

//     await user.signup();

//     res.redirect('/login');
// }


//...


function getLogin(req, res) {
    res.render('customer/auth/login');
}

module.exports = {
    getSignup: getSignup,
    signup: signup,
    getLogin: getLogin
    
};