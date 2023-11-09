// Redhat SSO server config
const keycloakConf = {
	"realm": "climatewavers",
	"auth-server-url": "https://sso-olagoldhackxx-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/auth/",
	"ssl-required": "external",
	"resource": "wavers-sso",
	"public-client": true,
	"verify-token-audience": true,
	"use-resource-role-mappings": true,
	"confidential-port": 0
  }
module.exports = keycloakConf;
