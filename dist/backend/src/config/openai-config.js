"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureOpenAI = void 0;
const openai_1 = require("openai");
const configureOpenAI = () => {
    const config = new openai_1.Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORAGANIZATION_ID,
    });
    return config;
};
exports.configureOpenAI = configureOpenAI;
