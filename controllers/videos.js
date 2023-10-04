import express from 'express';
import { createVideo } from '../service/videos.js';
import { httpStatusMessage } from '../constants/httpStatusMessage.js';

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const postCreateVideo = async (request, response) => {
    const { title, link } = request.body;
    const video = await createVideo(title, link);

    console.log({ body: request.body });
    response.json({
        data: video,
        message: httpStatusMessage[response.status],
    });
};