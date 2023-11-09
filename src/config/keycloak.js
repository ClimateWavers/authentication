// Redhat SSO server config
const keycloakConf = {
	'realm': 'climatewavers',
	'clientId': 'wavers-sso',
	'serverUrl': 'https://sso-olagoldhackxx-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/auth/',
	'sslRequired': 'external',
	'resource': 'wavers-sso',
	'credentials': {
	  'secret': '77871b8f-8f2a-4120-9406-d8ebe44455d6'
	},
	'confidentialPort': 0,
	'policyEnforcer': {},
  }


module.exports = keycloakConf;
