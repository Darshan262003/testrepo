const express = require('express')
const app = express()
const PORT = 5000

// Home
app.get('/', (req, res) => {
  res.send("I am from GIT to JENKINS to DOCKER to Kubernetes")
})

// Login page (GET)
app.get('/login', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Login</title>
      </head>
      <body>
        <h2>Login Page (GET only)</h2>
        <form method="GET" action="/auth">
          <label>Username:</label><br/>
          <input type="text" name="username" required /><br/><br/>

          <label>Password:</label><br/>
          <input type="password" name="password" required /><br/><br/>

          <button type="submit">Login</button>
        </form>
      </body>
    </html>
  `)
})

// Authenticate using GET
app.get('/auth', (req, res) => {
  const { username, password } = req.query

  // Demo credentials
  if (username === 'admin' && password === 'admin123') {
    res.send(`<h2>Login Successful ✅ Welcome ${username}</h2>`)
  } else {
    res.send('<h2>Invalid Username or Password ❌</h2>')
  }
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
