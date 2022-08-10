const categoryModel = require("../../models/category");

exports.postCategory = async (req, res, next) => {
    const name = req.body.name;
    try {
        if (!name) {
            const error = new Error("Enter Valid Name");
            error.statusCode = 401;
            throw error;
        }
        const category = new categoryModel({
            name: name
        })
        const savedCategory = await category.save();
        res.json({
            message: `${savedCategory.name} Category Created`,
            id: savedCategory._id
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}