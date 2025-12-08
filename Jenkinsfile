pipeline
{
  agent any
    trigger
          {
            cron('*****')
          }
    stages
          {
            stage('checkout')
            {
              steps
                  {
                      git url:"",branch:"main"
                  }
            }
              stage('compiling')
              {
                 steps
                  {
                     sh "javac Demo.java"
                  }  
              }
                stage('running')
                {
                    steps
                    {
                    sh "java Demo"
                    }
                }
           }   
    }
                          
                        
  
