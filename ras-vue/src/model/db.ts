const { Sequelize } = require('sequelize')

const dburl = process.env.RAS_DBURL
const dbname = process.env.RAS_DBNAME
const dbport = process.env.RAS_DBPORT
const dbuser = process.env.RAS_DBUSER
const dbpass = process.env.RAS_DBPASS

const db = new Sequelize(dbname, dbuser, dbpass, {
    host:dburl,
    port:dbport,
    dialect:"mariadb"
})