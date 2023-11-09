// Redhat SSO server config
const keycloakConf ={
	'realm': 'climatewavers',
	'clientId': 'wavers-sso',
	'serverUrl': 'https://sso-olagoldhackxx-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/auth/',
	'sslRequired': 'all',
	'resource': 'wavers-sso',
	'credentials': {
	  'secret': '5affe59f-18e7-41e0-ab62-dca4f7567169'
	},
	'confidentialPort': 0,
	'policyEnforcer': {},
  }


module.exports = keycloakConf;
