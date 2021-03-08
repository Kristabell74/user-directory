import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
    getRandomUser: function () {
        return axios.get("https://randomuser.me/");
    },
    getRandomMales: function (breed) {
        return axios.get("https://randomuser.me?inc=gender,name,nat");
    },
    getRandomRemales: function () {
        return axios.get("https://dog.ceo/api?inc=picture,name");
    }
};
