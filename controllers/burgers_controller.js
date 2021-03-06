let express = require("express");

let router = express.Router();

// Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  //burger is the model and it does somethings like get things from db and sends it back to controller
  burger.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log("this is hbsObject", hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burger/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
