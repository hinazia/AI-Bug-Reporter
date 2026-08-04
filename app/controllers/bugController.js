const bugService = require("../services/bugService");

exports.getAllBugs = async (req, res) => {
    const bugs = await bugService.getAllBugs();
    res.json(bugs);
};

exports.getBugById = async (req, res) => {
    const bug = await bugService.getBugById(req.params.id);

    if (!bug) {
        return res.status(404).json({
            message: "Bug not found"
        });
    }

    res.json(bug);
};

exports.createBug = async (req, res) => {

    const bug = await bugService.createBug(req.body);

    res.status(201).json(bug);

};

exports.updateBug = async (req, res) => {

    const bug = await bugService.updateBug(
        req.params.id,
        req.body
    );

    res.json(bug);

};

exports.deleteBug = async (req, res) => {

    await bugService.deleteBug(req.params.id);

    res.json({
        message: "Bug deleted successfully."
    });

};