const convict = require('convict');

const config = convict({
  env: {
    format: ['test', 'development', 'production'],
    default: 'test',
    env: 'NODE_ENV',
  },
  port: {
    format: 'port',
    default: 5656,
    env: 'PORT',
    arg: 'port',
  },
});
config.set('env', 'development');
const env = config.get('env');
config.loadFile(`./config/${env}.json`);
console.log(config.getProperties());
