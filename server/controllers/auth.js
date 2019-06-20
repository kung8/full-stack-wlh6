const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    // user inputs data: name, email, password
    // check if email in db // send 409 status
    // create a salt
    // hash password & salt
    // store name, email, hash into table
    try {
      const db = req.app.get('db')
      const { name, email, password } = req.body
  
      let users = await db.findUserByEmail(email)
      let user = users[0]
  
      if (user) {
        return res.status(409).send('email already in db')
      }
  
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)
  
      let response = await db.createUser({name, email, hash})
      let newUser = response[0]
  
      delete newUser.password
  
      req.session.user = newUser
      res.send(req.session.user)
    } catch (error) {
      console.log('there was an error', error)
      res.status(500).send(error)
    }
  },

  login: async (req, res) => {
    // user input: email, password
    // get user by email from db
    // if no user send 401 status
    // compare password with hash using bcrypt
    // if they don't match send 401 status
    // if they match, add user to session
    try {
      const db = req.app.get('db')
      const { email, password } = req.body
  
      let users = await db.findUserByEmail(email)
      let user = users[0]
  
      if (!user) {
        return res.status(401).send('email or password incorrect')
      }

      let isAuthenticated = bcrypt.compareSync(password, user.password)

      if (!isAuthenticated) {
        return res.status(401).send('email or password incorrect')
      }

      delete user.password 
      req.session.user = user
      res.send(req.session.user)

    } catch (error) {
      console.log('there was an error', error)
      res.status(500).send(error)
    }
  },

  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  },

  currentUser: (req, res) => {
    res.send(req.session.user)
  }
}
