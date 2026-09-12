pipeline {
    agent any
    environment {
        APP_NAME = "jenkins-cicd-app"
        APP_PORT = "3000"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${APP_NAME}:latest .'
            }
        }

        stage('Deploy Docker Image') {
            steps {
                sh 'docker stop ${APP_NAME} || true'
                sh 'docker rm ${APP_NAME} || true'
                sh 'docker run -d --name ${APP_NAME} -p ${APP_PORT}:${APP_PORT} ${APP_NAME}:latest'
            }
        }
        stage('Verify Deployment') {
            steps {
                sh 'docker ps | grep ${APP_NAME}'
            }
        }
    }
}