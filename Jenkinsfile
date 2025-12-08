pipeline
{
  agent any
    trigger
          {
            cron('*****')
          }
    stages
          {
              stage('compiling')
              {
                 steps
                  {
                    sh "Compiling"
                     sh "javac Demo.java"
                  }  
              }
                stage('running')
                {
                    steps
                    {
                    sh "Executing"
                    sh "java Demo"
                    }
                }
           }   
    }
                          
                        
  
