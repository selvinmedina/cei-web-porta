module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('POSTGRES_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('POSTGRES_DATABASE'),
      user: env('POSTGRES_USER'),
      password: env('POSTGRES_PASSWORD'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF'),
      },
    },
    debug: false,
  },
});
