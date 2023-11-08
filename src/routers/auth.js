const express = require("express");
const Keycloak = require("keycloak-connect");
const { oauthSignIn, redhatSS0, linkedInOauth } = require("../controllers/auth");
const google = require("../config/google");
const linkedin = require("../config/linkedin");
const facebook = require("../config/facebook");
const github = require("../config/github");
const keycloakConf = require("../config/keycloak");
const authRouter = express.Router();
const session = require("express-session");
const memoryStore = new session.MemoryStore();

const currentSession = session({
  secret: "secret",
  resave: true,
  saveUninitialized: true,
  store: memoryStore,
});
// Keycloak initiation
var kc = new Keycloak(
  {
    store: memoryStore,
  },
  keycloakConf
);
//Login user with google
authRouter.get(
  "/google",
  google.authenticate("google", {
    scope: ["profile", "email"],
    failureRedirect: "/error",
    failureFlash: true,
  })
);

//Login user with google
authRouter.get(
  "/new-google",
  google.authenticate("google", {
    scope: ["profile", "email"],
    failureRedirect: "/error",
    failureFlash: true,
    accessType: "offline",
    prompt: "consent",
  })
);
authRouter.get(
  "/google/callback",
  google.authenticate("google", {
    failureRedirect: "/error",
    failureFlash: true,
    session: false,
  }),
  oauthSignIn
);

//Login user with redhat sso
authRouter.get("/redhat-sso", kc.protect(), redhatSS0);

// Login with facebook
authRouter.get(
  "/facebook",
  facebook.authenticate("facebook", { scope: ["email"] })
);

authRouter.get(
  "/facebook/callback",
  facebook.authenticate("facebook", {
    failureRedirect: "/error",
    failureFlash: true,
  }),
  oauthSignIn
);

// Login with LinkedIn
authRouter.get(
  "/linkedin",
  linkedin.authenticate("linkedin", { scope: ["email", "profile", "openid"] })
);

authRouter.get(
  "/linkedin/callback",
  linkedInOauth,
  oauthSignIn
);


// Login with github
authRouter.get(
  "/github",
  github.authenticate("github", { failureFlash: true })
);

authRouter.get(
  "/github/callback",
  github.authenticate("github", {
	failureFlash: true,
    failureRedirect: "/error",
  }),
  oauthSignIn
);

module.exports = { authRouter, currentSession, memoryStore, kc };
