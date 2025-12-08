pipeline
{
  agent any
    triggers
          {
            cron('* * * * *')
          }
    stages
          {
              stage('compiling')
              {
                 steps
                  {
                    echo "Compiling"
                     sh "javac Demo.java"
                  }  
              }
                stage('running')
                {
                    steps
                    {
                    echo "Executing"
                    sh "java Demo"
                    }
                }
           }   
    }
                          
                        
  
