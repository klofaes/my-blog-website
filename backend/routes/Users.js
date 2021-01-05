const router = require("express").Router();

const bcrypt = require("bcrypt");

let addUser = require("../models/addUser.model");

router.route("/add").post(async (req, res) => {
   try {
      const userName = req.body.userCredentials.userName;
      const Email = req.body.userCredentials.id;
      const Password = req.body.userCredentials.password;
      const hashedPassword = await bcrypt.hash(Password, 10); //salt rounds default = 10
      const newUser = new addUser({userName, Email, Password: hashedPassword});

      await newUser.save();
      res.json("User Added!");

   } catch (err) {
      res.status(400).json(`Error!!! - ${err}`);
   }
});

module.exports = router;
