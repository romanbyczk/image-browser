import config from "../../config";

const PromptsService = {
    getPrompts: (query = "") => {
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": config.RAPID_API_KEY,
                "x-rapidapi-host": config.RAPID_API_HOST,
                useQueryString: true,
            },
        };

        return fetch(`https://wordsapiv1.p.rapidapi.com/words/?letterPattern=^${query}&limit=1000`, options)
            .then((res) => {
                return res.json();
            })
            .catch((err) => {
                console.log(err);
            });
    },
};

export default PromptsService;
