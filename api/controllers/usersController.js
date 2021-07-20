const SQL = require("sql-template-strings");
const db = require("../dbcon");
const { v4: uuidv4 } = require("uuid");

exports.createAccount = async (req, res) => {
  let newUserId = uuidv4();
  try {
    // Check to see if username is already taken
    let users = await db.query(
      SQL`SELECT * FROM user WHERE user_name = ${req.body.username};`
    );

    // If it is taken, return 400 status code
    if (users.length) {
      return res.status(409).send();

      // If not, create new account in user table
    } else {
      await db.query(
        SQL`INSERT INTO user VALUES (${newUserId}, ${req.body.username}, ${req.body.password});`
      );
      return res.status(200).send();
    }
  } catch (err) {
    console.err(err);
    return res.status(503).send();
  }
};

exports.login = async (req, res) => {
  try {
    // Check to see if username/password are valid
    let users = await db.query(
      SQL`SELECT * FROM user WHERE user_name = ${req.body.username} and password = ${req.body.password};`
    );

    // If user is found, create access token and return
    if (users.length) {
      let token = uuidv4();
      let userId = users[0].user_id;

      await db.query(
        SQL`INSERT INTO token VALUES (${token}, ${userId}, NULL);`
      );
      return res.status(200).send(token);

      // If not, return not found status code
    } else {
      return res.status(404).send();
    }
  } catch (err) {
    console.err(err);
    return res.status(503).send();
  }
};
