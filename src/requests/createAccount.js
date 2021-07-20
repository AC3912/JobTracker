import axios from "axios";

const createAccount = async (username, password) => {
  try {
    return await axios.post(
      "/api/createAccount",
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export default createAccount;
