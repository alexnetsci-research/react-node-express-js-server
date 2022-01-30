import { Sequelize } from "sequelize";
 
const db = new Sequelize('restful_api', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db; 
