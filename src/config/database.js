const databaseConfig = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'user',
    password: 'senha123',
    database: 'estacao',
    define: {
        timestamps: true,
        underscored: false,
        underscoredAll: false,
        freezeTableName: true,
    }
};

export default databaseConfig;