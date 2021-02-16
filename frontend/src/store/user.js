const axios = require('axios').default;

const createUser = (name, age) =>{
    axios.post('https://smuuc5l7ug.execute-api.us-east-1.amazonaws.com/dev/customer', {
      name: name,
      age: age
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default createUser;