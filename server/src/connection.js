import mysql from 'mysql2';

export const useDBConnection = () => {
  const conn = mysql.createConnection({
    host: "localhost",
    user: "client",
    password: "1111",
    database: "lb_pdo_films",
  });

  return conn;
};
