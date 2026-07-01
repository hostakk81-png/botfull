import axios from 'axios';

const sharedInstance = axios.create({
    baseURL: 'https://sajt-bd-production.up.railway.app/api'
});

export { sharedInstance };
