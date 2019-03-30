const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy

const {
  Users
} = require('./db')

passport.use(new LocalStrategy(
  (username, password, done) => {
    Users.findOne({
      where: {
        username
      }
    }).then((user) => {
      if (!user) {
        return done(null, false)
      }
      if (user.password !== password) {
        return done(null, false)
      }
      done(null, user)
    }).catch(done)
  }
))

passport.use(new FacebookStrategy({
  clientID: '510074252855921',
  clientSecret: '5c8cc5db4f4b311324c3843373c81ad1',
  callbackURL: 'http://localhost:9988/login/facebook/callback'
}, async (token, rt, profile, done) => {
  let username = profile.displayName.split(' ').join('-')
  username += '-' + profile.id
  try {
    let user = await Users.findOne({
      where: {
        fbProfileId: profile.id
      }
    })
    if (!user) {
      user = await Users.create({
        username: username,
        fbToken: token,
        fbProfileId: profile.id
      })
    }
    done(null, user)
  } catch (err) {
    done(err)
  }
}))

passport.serializeUser(
  (user, done) => {
    done(null, user.id)
  }
)

passport.deserializeUser(
  (userId, done) => {
    Users.findByPk(userId)
      .then((user) => done(null, user))
      .catch(done)
  }
)

module.exports = passport
