
import api from "../config/axios"

export const generateQuestions = async (payload) => {
    try {
        const response = await api.post('chat/mcq_chat_bot', payload
        );
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};

export const generateReport = async (payload) => {
    try {
        const response = await api.post('chat/mcq_generate_report', payload
        );
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};
