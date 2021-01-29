import axios from "axios";

const API = {
    Test: {
        helloWorld: () => {
            return axios.get("/hello-py");
        }
    }
}

export default API;