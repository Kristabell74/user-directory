import axios from "axios";

// Export an object containing methods we'll use for accessing the person.Ceo API

export default {
    getRandomPerson: function () {
        return axios.get("https://randomuser.me/api/");
    },
    getRandomLocal: function (gender) {
        return axios.get("https://randomuser.me/api/?inc= ");
    },
    getRandomGender: function () {
        return axios.get("https://randomuser.me/api//?gender");
    }
};
