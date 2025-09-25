pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/park-ria/virtaul-waiting-room.git', 
                    branch: 'main', 
                    credentialsId: 'github-token'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t virtual-waiting-room-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop virtual-waiting-room-app || true
                docker rm virtual-waiting-room-app || true
                docker run -d -p 3000:3000 --name virtual-waiting-room-app virtual-waiting-room-app
                '''
            }
        }
    }
}
