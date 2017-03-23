import 'whatwg-fetch'; // window.fetch() polyfill by GitHub

const host = "http://localhost:3000";

let apiUsers = {
  loginUser(username, password) {
    console.log('username in action loginUser() is ', username);
    console.log('password in action loginUser() is ', password);
    return fetch(host + "/signin",
    {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      }
    )
    .then((response) => response.json());
  },

  signupUser(username, password) {
    console.log('username in action signupUser() is ', username);
    console.log('password in action signupUser() is ', password);
    return fetch(host + "/signup",
    {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      }
    )
    .then((response) => response.json());
  },
    
 logoutUser() {
    return fetch(host + "/signout")
    .then((response) => response.json());
  }
};

export default apiUsers;
