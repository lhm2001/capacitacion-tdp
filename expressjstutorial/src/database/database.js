import mysql from 'mysql'
import { Pool } from 'promise-mysql';
import config from './../config.js';
import {promisify} from 'util';


const pool=mysql.createPool({
    host:config.host,
    database:config.database,
    user:config.user,
    password:config.password
});

/* export const getConnection=()=>{
    return connection;
}; */



pool.getConnection((err,connection)=>{
    if(err){
        if(err.code==='PROTOCOL_CONNECTION_LOST'){
            console.error("DATABASE CONNECTION WAS CLOSED");
        }
        if(err.code==='ER_CON_COUNT_ERROR'){
            console.error("DATABASE HAS TOO MANY CONNECTIONS");
        }
        if(err.code==='ECONNREFUSED'){
            console.error("DATABASE CONNECTION WAS REFUSED");
        }
    }

    if(connection) connection.release();
    console.log("DB IS CONECTED");
    return;
})

pool.query= promisify(pool.query);

export default pool;

/* var sql = "SHOW TABLES LIKE 'customers'";
pool.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
  if(result.length==0)
    console.log("Table not created");
});

var sql = "SHOW TABLES LIKE 'pep'";
pool.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
  if(result.length==0)
    console.log("Table not created");
}); */



