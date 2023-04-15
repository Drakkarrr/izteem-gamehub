import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "7ad0dfdcf77b486486dda0abbd45fd3b",
    },
});