import axios from 'axios'
export const axiosClient=axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    headers:{
        common:{
            Authorization: `Bearer ${process.env.REACT_APP_SERVER_API_TOKEN}`
        }
    }
})