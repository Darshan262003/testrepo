pipeline {
    agent any

    environment {
        IMAGE_NAME = "darshu262003/mini"
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
                    dockerImage = docker.build("${IMAGE_NAME}:2.0")
                }
            }
        }

        stage('push') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerid') {
                        dockerImage.push("latest")
                    }
                }
            }
        }
    }
}
