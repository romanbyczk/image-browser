import config from "../../config";

const UnsplashService = {
    search: (query = "") => {
        return fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${config.UNSPLASH_TOKEN}`)
            .then((res) => {
                return res.json();
            })
            .catch((err) => {
                console.log(err);
            });
    },
};

export default UnsplashService;
