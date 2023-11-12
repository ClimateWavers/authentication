# Climate Wavers - Authentication microservices

## Overview

This microservice is a part of Climate Wavers  an AI-driven disaster response application that utilizes multiple authentication providers such as Red Hat SSO, Facebook, LinkedIn, GitHub, and Google. The microservices architecture is implemented in Node.js, with passport and openid connect libraries for authentication. The application securely stores user data in a MariaDB database and uses refresh tokens for extended access.

## Features

- **Authentication Providers:** Integrates Red Hat SSO, Facebook, LinkedIn, GitHub, and Google for user authentication.
- **Microservices Architecture:** Multiple microservices are used to enhance modularity and scalability.
- **Token Management:** Utilizes refresh tokens for prolonged access and sends access tokens to users for accessing other microservices.
- **Database:** Stores user data securely in the application main MariaDB database, to enable synchronise with other microservices in the application using same database
 
## Technologies Used

- Node.js
- Passport
- OpenID Connect
- Red Hat SSO
- Facebook Login API
- LinkedIn API
- GitHub API
- Google API
- MariaDB
- OpenShift (for deploying Red Hat SSO server)

## Setup

### Prerequisites

- Node.js installed
- MariaDB installed
- OpenShift cluster set up

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

   - Set up credentials for authentication providers (Red Hat SSO, Facebook, LinkedIn, GitHub, Google).
   - Configure the database connection details.

4. Start the application:

```bash
npm start
```

## Deployment
We provide three different methods for deploying this microservice to openshift clusters.
### Import Git Repositoy (Recommended)
Use the import git repository feature on openshift console.
- Navigate to Add page in the Developer console on openshift
- Select Dockerfile strategy
- Deployment type should be Deployment Config
- Secure routes
- Supply the environment variables after deployment
  
### Automated Command line Deployment
Using the scripts provided in `automate_development` folder, simplifies deployment. To use the scripts, docker and oc must be installed.

#### Build and push image
You can replace the image repository in the scripts `build.sh` in `automate_deployment` or use the repository we provided.
  ```bash
   automate_deployment/./build.sh
   ```
#### Deploy 
If the image repository was changed when building, update the `development.yaml` file in `k8s` folder with your image repository
  ```bash
   automate_deployment/./deploy.sh
   ```

### Tekton pipeline deployment script
Deploy with tekton with the pipeline deployment script in `automated_deployment` directory. Setup environment variabes after deployment
   ```bash
   automate_deployment/./tekton_pipeline.sh
   ```


### Red Hat SSO Server on OpenShift Cluster

1. Deploy the Red Hat SSO server on your OpenShift cluster.
2. Configure the necessary realms, clients, and users within the Red Hat SSO administration console.

## Usage

Describe how users can use and interact with your application. Include examples or screenshots if applicable.

## Contributing

If you'd like to contribute to the project, please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Mention any libraries or individuals you want to acknowledge.

---

Feel free to add or modify sections based on your specific requirements and the details of your project.
