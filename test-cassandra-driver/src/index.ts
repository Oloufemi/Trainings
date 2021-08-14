const cassandra = require('cassandra-driver');
const fs = require('fs');
const auth = new cassandra.auth.PlainTextAuthProvider(
  'ServiceUserName',
  'ServicePassword'
);
const sslOptions1 = {
  ca: [fs.readFileSync('./src/sf-class2-root.crt', 'utf-8')],
  host: 'cassandra.us-west-2.amazonaws.com',
  rejectUnauthorized: true,
};
const client = new cassandra.Client({
  contactPoints: ['cassandra.us-west-2.amazonaws.com'],
  localDataCenter: 'us-west-2',
  authProvider: auth,
  sslOptions: sslOptions1,
  protocolOptions: { port: 9042 },
});
const query = 'SELECT * FROM system_schema.keyspaces';

client
  .execute(query)
  .then((result) => console.log('Row from Keyspaces %s', result.rows[0]))
  .catch((e) => console.log(`${e}`));
