function getSignup(req, res) {
    res.render('customer/auth/signup', {
        pageTitle: 'Signup'
    });
}
function getLogin(req, res) {}

module.exports = {
    getSignup: getSignup,
    getLogin: getLogin
};