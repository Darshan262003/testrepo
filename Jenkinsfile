pipeline
{
  agent any
    triggers
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
                          
                        
  
