// initial creation database
const pg = require('pg');

const config = {
    host: 'localhost',
    user: 'postgres',     
    password: '*****',
    database: 'todosdb',
    port: 5432
  };

const client = new pg.Client(config);
client.connect(err => {
    if (err) throw err;
    else {
        queryDatabase();
    }
});

function queryDatabase() {
    const query = `
        DROP TABLE IF EXISTS todos;
        CREATE TABLE todos (id serial PRIMARY KEY, name VARCHAR(50), status VARCHAR);
        INSERT INTO todos (name, status) VALUES ('do something', 'new');
        INSERT INTO todos (name, status) VALUES ('do something else', 'started');
        INSERT INTO todos (name, status) VALUES ('do something like that', 'done');
    `;

    client
        .query(query)
        .then(() => {
            console.log('Table created successfully!');
            client.end(console.log('Closed client connection'));
        })
        .catch(err => console.log(err))
        .then(() => {
            console.log('Finished execution, exiting now');
            process.exit();
        });
}
