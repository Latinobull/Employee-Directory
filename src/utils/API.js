import axios from 'axios';

export default {
  search: function () {
    return axios.gets(
      'https://randomuser.me/api/?results=20&nat=us&exc=gender,location,registered,nat&noinfo'
    );
  },
};
