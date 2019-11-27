const router = require("express").Router();
const {
  checkAuth,
  profile,
  updateUser,
  deliteUser,
  history,
  addHistory,
  addressBook,
  updateAddress,
} = require("../controllers/checkAuth");

router.get("/profile", checkAuth, profile);
router.put("/updateuser", checkAuth, updateUser);
router.get("/deliteuser", checkAuth, deliteUser);
router.get("/history", checkAuth, history);
router.post("/history", checkAuth, addHistory);
router.put("/updateaddress", checkAuth, updateAddress);
router.get("/addressbook", checkAuth, addressBook);

module.exports = router;
