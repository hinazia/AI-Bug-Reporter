const bugService = require("../services/bugService");
const ollamaService = require("../services/ollamaService");

exports.chat = async (req, res) => {

    try {

        const { question } = req.body;

        const bugs = await bugService.getAllBugs();

        const answer = await ollamaService.askOllama(question, bugs);

        res.json({
            question,
            answer
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};