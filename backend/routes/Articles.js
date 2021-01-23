const router = require("express").Router();

let Article = require("../models/article.model");

router.route("/").get(async (req, res) => {
	try {
		const articles = await Article.find().limit(6); //8
		res.json(articles);
	} catch (err) {
		res.status(400).json(`getArticle: ${err}`);
	}
});

router.route("/article").post(async (req, res) => {
	const heading = req.body.pathname.split("-").join(" ");
	try {
		const article = await Article.find({
			Heading: { $eq: heading },
		});
		res.json(article);
	} catch (err) {
		res.status(400).json("getArticle:", err);
	}
});

module.exports = router;
