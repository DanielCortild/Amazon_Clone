import Axios from 'axios';

const instance = Axios.create({
  baseURL: "https://us-central1-clone-5513a.cloudfunctions.net/api"
    //"http://localhost:5001/clone-5513a/us-central1/api"
});

export default instance;