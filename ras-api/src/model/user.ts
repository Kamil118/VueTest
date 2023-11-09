import { DataTypes, Model } from 'sequelize'
import db from './db.js'
import { CommentModel } from './comment.ts'

export class UserModel extends Model
{
    static modelDefinition = {
        username: {
            type: DataTypes.STRING
        },
        pfppath: {
            type: DataTypes.STRING
        }
    }
}

export class ModelFactory{
    connection:any
    model:any
    constructor()
    {
        this.connection = db
        this.model = UserModel
        this.model.init(this.model.modelDefinition,this.connection)
        this.model.hasMany(CommentModel)
        this.connection.sync()
    }
}