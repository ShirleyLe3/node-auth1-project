const express = require("express");
const router = express.Router();
const models = require("./router-models.js");
const bcrypt = require("bcryptjs");
const {restrictLogin, restrictGlobal} = require ('./middleware')

router.get("/", (req, res, next) => {
	res.send("We Did it");
});

router.get("/getCredentials", restrictGlobal(), async (req, res, next) => {
	try {
		const credentials = await models.find();
		res.status(200).json(credentials);
	} catch (err) {
		next(err);
	}
});

router.post("/setCredentials", async (req, res, next) => {
	try {
		const { name, password } = req.body;
		const credentials = await models.add({
			name,
			password: await bcrypt.hash(password, 14),
		});
		res.status(201).json(credentials);
	} catch (err) {
		next(err);
	}
});

router.post("/useCredentials", async (req, res, next) => {
	try {
		const { name, password } = req.body;
		const user = await models.findBy({ name }).first();

		req.session.user = user;

		restrictLogin()
		
		res.status(201).json({ message: `Welcome ${user.name}` });
	} catch (err) {
		next(err);
	}
});

module.exports = router;
