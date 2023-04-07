const mysql = require('mysql');
const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '172.17.0.2',
  user            : 'root',
  password        : 'my-secret-pw',
  database        : 'user_preferences'
});

exports.handler = async (event) => {
    const preferences = JSON.parse(event.body);
    const { superUser, colorTheme } = preferences;
    const query = 'INSERT INTO preferences (superUser, colorTheme) VALUES (?, ?)';
    const inserts = [superUser, colorTheme];
    const sql = mysql.format(query, inserts);
    
    return new Promise((resolve, reject) => {
        pool.query(sql, (error, results, fields) => {
            if (error) {
                console.error(error);
                return reject(error);
            }
            console.log(results);
            return resolve({
                statusCode: 200,
                body: JSON.stringify({
                    success: true,
                    data: {},
                }),
            });
        });
    });
};
