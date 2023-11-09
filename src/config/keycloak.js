// Redhat SSO server config
const keycloakConf = {
	"realm": "climatewavers",
	"auth-server-url": "https://sso-olagoldhackxx-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/auth/",
	"ssl-required": "external",
	"resource": "wavers-sso",
	"verify-token-audience": true,
	"credentials": {
	  "secret": "77871b8f-8f2a-4120-9406-d8ebe44455d6"
	},
	"confidential-port": 0,
	"policy-enforcer": {}
  }
module.exports = keycloakConf;
