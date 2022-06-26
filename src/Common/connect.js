const server = "https://the-one-api.dev/v2"
const token = "eDZjADsYHz-Q6-QaSPvh"
const axios = require('axios').default;
class connect {

querySelector(order, race, gender, name){
    let query = server + "/character?sort=name:"+order
if(race !== ""){
    query = query+"&race="+race
}
if(gender !== ""){
    query = query+"&gender="+gender
}
if(name !== ""){
    query = query+"&name="+name
}
return query
}

    getCharacter(order, race, gender, name) {
        return axios.get(this.querySelector(order, race, gender, name), {headers: { Authorization: `Bearer ${token}` }})
            .then((response) => {
                console.log(response.data);
                return response.data
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }
}

export default new connect()