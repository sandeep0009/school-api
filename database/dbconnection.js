import mysql2 from "mysql2"


export const connection=mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'Admin@123',
    database:'assignment'

})
