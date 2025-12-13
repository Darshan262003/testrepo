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
                      dockerimage=docker.build("webapp:latest")
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
                          
                        
  
