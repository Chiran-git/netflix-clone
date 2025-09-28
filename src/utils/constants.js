export const USER_PROFILE_IMAGE_PLACEHOLDER = "https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer' + process.env.TMDB_KEY
    }
};

export const OPENAI_KEY= process.env.OPENAI_KEY