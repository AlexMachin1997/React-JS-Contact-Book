import axios from "axios"

//Creating An Axios Instance And Configuring The Base URL
const instance = axios.create({
    baseURL: "https://address-book-database.firebaseio.com/"
});

export default instance;