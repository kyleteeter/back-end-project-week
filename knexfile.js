// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/notes.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: __dirname + 'data/migrations',
    },
    seeds: {
      directory: __dirname + '/data/seeds',
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: __dirname + '/data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory:__dirname + '/data/migrations',
    },
    seeds: {
      directory: __dirname + '/data/seeds',
    },
  },

};
