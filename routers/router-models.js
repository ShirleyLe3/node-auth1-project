const db = require("../data/config");

function find() {
	return db("credentials");
}

function findBy(filter) {
	return db("credentials").select("id", "name", "password").where(filter);
}

function findById(id) {
	return db("credentials").where("id", id).first();
}

async function add(data) {
	const [id] = await db("credentials").insert(data);
	return findById(id);
}

module.exports = {
	add,
    find,
    findBy,
	findById,
};