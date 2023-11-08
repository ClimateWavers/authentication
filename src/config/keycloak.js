// Redhat SSO server config
const keycloakConf ={
	'realm': 'climatewavers',
	'clientId': 'wavers-sso',
	'serverUrl': 'https://sso-olagoldhackxx-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/auth/',
	'sslRequired': 'all requests',
	'resource': 'wavers-sso',
	'redirectUri': 'https://oauth-olagoldhackxx-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/api/v1/auth/redhat-sso',
	'credentials': {
	  'secret': '5affe59f-18e7-41e0-ab62-dca4f7567169'
	},
	'confidentialPort': 0,
	'policyEnforcer': {},
  }


module.exports = keycloakConf;
