module.exports = {
  server: require('../server/src/index.js'),
  
  paths: {
    client: require.resolve('../client'),
    server: require.resolve('../server')
  },
  
  setup: function() {
    console.log('Copy the .env.example file and configure your environment variables');
    console.log('Client code is in node_modules/authx/client/');
    console.log('Server code is in node_modules/authx/server/');
  }
};