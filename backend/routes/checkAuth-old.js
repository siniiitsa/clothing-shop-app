const router = require("express").Router();
const {
  checkAuth,
  profile,
  updateUser,
  deliteUser,
  history,
  addHistory
} = require("../controllers/checkAuth");

router.get("/profile", checkAuth, profile);
router.post("/updateuser", checkAuth, updateUser);
router.get("/deliteuser", checkAuth, deliteUser);
router.get("/history", checkAuth, history);
router.post("/history", checkAuth, addHistory);

module.exports = router;
