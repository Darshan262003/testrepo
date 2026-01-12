pipeline {
    agent any

    environment {
        IMAGE_NAME = "darshu262003/mini1"
    }

    stages {

        stage('checkout') {
            steps {
                git url: "https://github.com/Darshan262003/testrepo",
                    branch: "main",
                    credentialsId: "dockerid"
            }
        }

        stage('build') {
            steps {
                script {
                    dockerImage = docker.build("${IMAGE_NAME}:4.0")
                }
            }
        }

        stage('push') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerid') {
                        dockerImage.push("4.0")
                    }
                }
            }
            
        }
         stage('Deploy to Minikube') {
            steps {
                sh """
                kubectl delete deployment mini --ignore-not-found=true
                kubectl delete service mini --ignore-not-found=true

                kubectl create deployment mini --image=$IMAGE_NAME --port=5000
                kubectl expose deployment mini --type=NodePort --port=5000 --target-port=5000
                """
            }
        }
    }
}
