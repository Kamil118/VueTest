import { Sequelize } from 'sequelize'

function init()
{ 
    const dburl = process.env.RAS_DBURL
    const dbname = process.env.RAS_DBNAME
    const dbport = parseInt(process.env.RAS_DBPORT)
    const dbuser = process.env.RAS_DBUSER
    const dbpass = process.env.RAS_DBPASS

    const db = new Sequelize(dbname, dbuser, dbpass, {
        host:dburl,
        port:dbport,
        dialect:"mariadb"
    })

    try {
        db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    return db
}

let db = init()

export default db