const TAG_SEARCH_TYPE = "search";

const TagsService = {
    getTags: (query, results) => {
        if (!results || results.length === 0) {
            return [];
        }

        return results
            .map((image) => TagsService.getTagsTitles(image))
            .reduce((previousValue, currentValue) => [...new Set([...previousValue, ...currentValue])]);
    },

    getTagsTitles: (image) => {
        if (!image || !image.tags || image.tags.length === 0) {
            return [];
        }

        return image.tags.filter((tag) => tag.type === TAG_SEARCH_TYPE).map((tag) => tag.title);
    },
};

export default TagsService;
