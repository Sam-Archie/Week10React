import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://restful.training/api/blog",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

        // use your own key
        Authorization: "Bearer 4|GNf0fTDsMZqMLcX2ZxohcgaqyFLR5lUaiS5RHZcJ",
    },
});