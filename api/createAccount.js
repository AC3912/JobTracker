const SQL = require("sql-template-strings");
const mysql = require("serverless-mysql");
const { v4: uuidv4 } = require("uuid");

// Initialize the database.
const db = mysql({
  config: {
    host: "34.74.53.112",
    user: "root",
    password: "jobtracker",
    database: "test",
  },
});

// Main helper function that forms and ends a connection to the database with
// each query.
const query = async (query) => {
  try {
    const results = await db.query(query);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
};

module.exports = async (req, res) => {
  let newUserId = uuidv4();
  try {
    // Check to see if username is already taken
    let users = await query(
      SQL`SELECT * FROM user WHERE user_name = ${req.body.username};`
    );

    // If it is taken, return 400 status code
    if (users.length) {
      return res.status(409).send();

      // If not, create new account in user table
    } else {
      await query(
        SQL`INSERT INTO user VALUES (${newUserId}, ${req.body.username}, ${req.body.password});`
      );
      return res.status(200).send();
    }
  } catch (err) {
    console.err(err);
    return res.status(503).send();
  }
};
