import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ract-burger-app.firebaseio.com/'
});

export default instance;