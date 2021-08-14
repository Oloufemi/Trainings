const cassandra = require('cassandra-driver');
const fs = require('fs');
const auth = new cassandra.auth.PlainTextAuthProvider(
  'HOUESSSOU-at-587861090043',
  'qgKVUUTG2tPaBp1T4PKOvBZj7Ko1DHO9Oym0z68v3Sc='
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
let myResult;
console.log(myResult);
client
  .execute(query)
  .then((result) => {
    myResult = result.rowLength;
    console.log('Row from Keyspaces %s', result.rows[0]);
  })
  .catch((e) => console.log(`${e}`));
