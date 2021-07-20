import axios from "axios";

const login = async (username, password) => {
  try {
    return await axios.post(
      "/api/login",
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

export default login;
