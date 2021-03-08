import axios from "axios";

// Export an object containing methods we'll use for accessing the person.Ceo API

export default {
    getRandomPerson: function () {
        return axios.get("https://randomuser.me/api/1.3");
    },
    getRandomGender: function (breed) {
        return axios.get("https://randomuser.me/api/1.3/?inc=gender,name");
    },
    getRandomPictures: function () {
        return axios.get("https://randomuser.me/api/1.3/?inc=picture,name");
    }
};
