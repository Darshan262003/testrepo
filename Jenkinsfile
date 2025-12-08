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
                    echo "i am changing this"
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
                          
                        
  
