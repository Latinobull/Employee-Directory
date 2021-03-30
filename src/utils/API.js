import axios from 'axios';

export default {
  searchEmployees: function () {
    return axios.get(
      'https://randomuser.me/api/?results=20&nat=us&exc=gender,location,registered,nat&noinfo'
    );
  },
};
