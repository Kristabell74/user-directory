import axios from "axios";

// Export an object containing methods we'll use for accessing the person.Ceo API

export default {
    getRandomPerson: function (url) {
        return axios.get(url);
    },
    getRandomLocal: function () {
        return axios.get("https://randomuser.me/api/1.3/?inc= name,location,picture");
    },
    getRandomGender: function (gender) {
        return axios.get("https://randomuser.me/api/1.3/?gender,picture");
    }
};
