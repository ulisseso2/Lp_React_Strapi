module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'mysqlbd.crk31dwwt3gp.us-east-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'reactstrapi2'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'Penelope39'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
