const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const ctrl = require("../controllers/task.controller");

router.post("/", auth, ctrl.createTask);
router.get("/", auth, ctrl.getTasks);
router.put("/:id", auth, ctrl.updateTask);
router.delete("/:id", auth, ctrl.deleteTask);

module.exports = router;
