node {
  def app

  stage('Clone repository') {
    // Clone the Git repository
    git url: 'https://github.com/vijayshinde2023/Angular-app.git'
  }

  stage('Build Angular project') {
    // Build the Angular project
    sh 'npm install'
    sh 'npm run build --prod'
  }

  stage('Build Docker image') {
    // Build the Docker image
    app = docker.build('my-angular-app')
  }

  
}
