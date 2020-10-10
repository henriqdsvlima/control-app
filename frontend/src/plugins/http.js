import axios from 'axios'


const instance = axios.create({
    baseURL:  'http://localhost:9000',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 2000,
})


export default instance