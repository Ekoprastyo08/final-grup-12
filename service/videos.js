import videos from "../models/videos.js";

export const createVideo = async (title, link) => {
    return await videos.create({ title, link });
};