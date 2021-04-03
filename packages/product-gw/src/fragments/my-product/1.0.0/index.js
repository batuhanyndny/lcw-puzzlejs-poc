const axios = require("axios");

module.exports = {
  placeholder() {
    return 'Loading products...';
  },
  async data(req) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return {
      data: {
        name: res.data[0].name,
        username: res.data[0].username
      }
    }
  },
  content(data) {
    return {
      main: `<div class="product"><div>Name: ${data.name}</div><small> uname: ${data.username}</small></div>`
    };
  }
};