function guestMiddleware(req, res, next) {
    if (req.session.userLogged) {
        return res.redirect('Users/profile');
    }
    next();
}

module.exports = guestMiddleware;