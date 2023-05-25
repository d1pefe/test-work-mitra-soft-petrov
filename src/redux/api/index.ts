import {create} from "apisauce";

const API = create({
    baseURL: "https://646e5bb49c677e23218b9273.mockapi.io/",
});

const getPosts = () => {
    return API.get("/cards");
};

const getComm = () => {
    return API.get("/comments")
}

export default {
    getPosts,
    getComm,
};