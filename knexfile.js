module.exports = {

  development: {
      client: 'pg',
      connection: 'postgres://localhost/packr'
  },

  production: {
      client: 'postgresql',
      connection: process.env.DATABASE_URL + '?ssl=true'
  }

};