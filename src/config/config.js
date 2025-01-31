require("dotenv").config();

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: "postgres",
        port: process.env.DB_PORT,
        // Check if the DATABASE_URL exists, else fallback to default configuration
        url: process.env.DATABASE_URL || null,
        dialectOptions: {
            ssl: {
                require: true, // Ensures SSL connection
                rejectUnauthorized: false // Allows self-signed certs
            }
        }
    },
};
