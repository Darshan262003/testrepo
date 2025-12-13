pipeline
{
  agent any
   environment{
     
     DOCKERHUB_CREDENTIALS=credentials("dockerid")
     IMAGE_NAME="darshu262003/web"
   }
    stages
          {
              stage('checkout')
              {
                 steps
                  {
                    git url:"https://github.com/Darshan262003/testrepo",
                      branch:"main",
                      credentialsId:"dockerid"
                  }  
              }
                stage('build')
                {
                    steps
                    {
                    script{
                      dockerImage = docker.build("${DOCKER_IMAGE}:latest")
                    }
                    }
                }
            stage('push')
            {
              steps{
                script{
                  docker.withRegistry('https://index.docker.io/v1','dockerid'){
                    dockerimage.push()
                  }
                }
              }
            }
           }   
    }
                          
                        
  
