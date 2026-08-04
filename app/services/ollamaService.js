const axios = require("axios");

exports.askOllama = async (question, bugs) => {

    const bugList = bugs.map((bug) => {

        return `
Title: ${bug.title}
Description: ${bug.description}
Priority: ${bug.priority}
Status: ${bug.status}
Assigned To: ${bug.assigned_to}
`;

    }).join("\n");

    const prompt = `
You are an experienced QA engineer.

Current Bugs

${bugList}

Answer the following question.

${question}
`;

    const response = await axios.post(

        `${process.env.OLLAMA_HOST}/api/generate`,

        {
            model: process.env.OLLAMA_MODEL,
            prompt,
            stream: false
        }

    );

    console.log("OLLAMA RESPONSE:", response.data);

    return response.data.response;

};