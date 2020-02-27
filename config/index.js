module.exports = {
  development: {
    apiURL: process.env.API_URL || '',
    WIP: true
  },
  production: {
    apiURL: '',
    WIP: false
  }
}
