function restrictLogin() {
	return async (req, res, next) => {
		try {
			if (!req.session || !req.session.user) {
				return res.status(401).json({
					message: "Invalid credentials",
				});
			}
			next();
		} catch (err) {
			next(err);
		}
	};
}

function restrictGlobal() {
	return async (req, res, next) => {
		try {
			if (!req.session || !req.session.user) {
				return res.status(401).json({
					message: "You do not have access to this page",
				});
			}
			next();
		} catch (err) {
			next(err);
		}
	};
}

module.exports = {
	restrictLogin,
	restrictGlobal,
};
