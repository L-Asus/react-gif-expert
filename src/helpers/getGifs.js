const API_SEARCH = "https://api.giphy.com/v1/gifs/search?";
const API_KEY_PARAMETER = "api_key=";
const API_Q_PARAMETER = "&q=";
const API_LIMIT_PARAMETER = "&limit=";
const API_KEY = "ywlR7cdOinwKV2KQFjRfueb39sK5hTdt";
const API_LIMIT = "10";

export const searchGifs = async (category) => {
    const URL = API_SEARCH + API_KEY_PARAMETER + API_KEY + API_Q_PARAMETER + category + API_LIMIT_PARAMETER + API_LIMIT;
    const RESPONSE = await fetch(URL);
    const { data } = await RESPONSE.json();
    const gifs = data.map((gif) => (
        {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url,
        }
    ))
    console.log(gifs);
    return gifs;
}