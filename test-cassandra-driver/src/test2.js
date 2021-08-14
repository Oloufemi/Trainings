const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
});

function insertQuery(tableName, rows, values) {
  // const queryInsert = `INSERT INTO shango_two.player(firstname, lastname, email) VALUES('femi', 'adeks', 'adeks@yahoo.fr');`;
  return `INSERT INTO ${tableName}(${rows[0]}, ${rows[1]}, ${rows[2]}) VALUES(${values[0]}, ${values[1]}, ${values[2]});`;
}

function createTable(tableName, columns, primaryKey, clusterKey = 0) {
  return clusterKey
    ? `CREATE TABLE ${tableName}(${columns[0].name} ${columns[0].type},${columns[1].name} ${columns[1].type},${columns[0].name} ${columns[0].type},PRIMARY KEY(${primaryKey},${clusterKey}));`
    : `CREATE TABLE ${tableName}(${columns[0].name} ${columns[0].type},${columns[1].name} ${columns[1].type},${columns[0].name} ${columns[0].type},PRIMARY KEY(${primaryKey}));`;
}

function select(tableName) {
  const query = `SELECT * FROM ${tableName}`;
}
function createKeySpace(tableName) {
  return `CREATE KEYSPACE ${tableName} WITH REPLICATION = {'class': 'SimpleStrategy','replication_factor':1} AND DURABLE_WRITES = true;`;
}

async function instructions() {
  //   const createkeyspace = await client.execute(
  //     createKeySpace('shango_two'),
  //     function (err, result) {
  //       //   if (result) {
  //       //     var user = result.first();
  //       //     //The row is an Object with column names as property keys.
  //       //     // console.log('My name is %s and my email is %s', user?.name, user?.email);
  //       //     console.log(result);
  //       //   }
  //       //   if (err) {
  //       //     console.log(err);
  //       //   }
  //     }
  //   );
  const createtable = await client.execute(
    createTable(
      'shango_two.player',
      [
        { name: 'firstname', type: 'text' },
        { name: 'lastname', type: 'text' },
        { name: 'email', type: 'text' },
      ],
      'lastname'
    )
  );
  console.log(createtable);
  //   const insertion = await client.execute(
  //     insertQuery(
  //       'shango_two.player',
  //       ['firstname', 'lastname', 'email'],
  //       ['rui', 'hachimura', 'rui@yahoo.fr']
  //     )
  //   );
  //   console.log('createTable:' + createTable);
  //   const selection = await client.execute(select('shango_two.player'));
  //   console.log(selection);
}

instructions();
