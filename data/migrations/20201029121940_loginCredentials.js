exports.up =  async function (knex) {
	return knex.schema.createTable("credentials", (tbl) => {
		tbl.increments();
		tbl.text("name", 128).notNullable();
		tbl.text("password").notNullable();
	});
};

exports.down = async function (knex) {
	return knex.schema.dropTableIfExists("accounts");
};
