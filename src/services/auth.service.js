import axios from "axios";

const API_URL = "http://localhost:8081/api/v1.0/auth";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "/login", {
        username,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  register(firstname,
    lastname,
    contactNumber,
    email,
    password,
    username) {
    return axios.post(API_URL + "/register", {
      firstName : firstname,
      lastName : lastname,
      contactNumber,
      email,
      password,
      username,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();