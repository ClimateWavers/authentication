// Redhat SSO server config
const keycloakConf = {
	"realm": "climatewavers",
	"auth-server-url": "https://sso-olagoldhackxx-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/auth/",
	"ssl-required": "external",
	"resource": "wavers-sso",
	"credentials": {
	  "secret": "5affe59f-18e7-41e0-ab62-dca4f7567169"
	},
	"confidential-port": 0,
	"policy-enforcer": {}
  }


module.exports = keycloakConf;
