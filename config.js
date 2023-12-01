const {
  PORT = process.env.PORT || 5500,
  NODE_ENV = "development",
  // MONGO_URI = "mongodb://localhost/jambu-space",
  MONGO_URI = "mongodb+srv://usman:usman@cluster0.b2y9ffy.mongodb.net/?retryWrites=true&w=majority",
  SESS_NAME = "sid",
  SESS_SECRET = "secret!session",
  SESS_LIFETIME = 1000 * 60 * 60 * 24 * 7,
  SENDGRID_API_KEY = "SG.",
  CREATE_USER_SECRET = "abcd",
} = process.env;

module.exports = {
  PORT,
  NODE_ENV,
  MONGO_URI,
  SESS_NAME,
  SESS_SECRET,
  SESS_LIFETIME,
  SENDGRID_API_KEY,
  CREATE_USER_SECRET,
};
