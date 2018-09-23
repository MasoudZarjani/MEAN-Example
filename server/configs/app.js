require('dotenv').config()
const config = {
    app: {
        port: process.env.PORT || 4000
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 27017,
        name: process.env.DB_DATABASE || 'blog',
        connection: process.env.DB_CONNECTION || 'mongodb',
    }
};
export default config;