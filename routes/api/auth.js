const express = require("express");
const controllers = require("../../controllers/auth");
const { authenticate, upload } = require("../../middlewares");

const router = express.Router();

// signup
router.post("/register", controllers.register);

router.get("/verify/:verificationToken", controllers.verifyEmail);

router.post("/verify", controllers.resendVerifyEmail);
// signin
router.post("/login", controllers.login);

router.get("/current", authenticate, controllers.getCurrent);

router.patch("/", authenticate, controllers.updateSubscription);

router.post("/logout", authenticate, controllers.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllers.updateAvatar
);

module.exports = router;
