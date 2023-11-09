import { DataTypes, Model } from 'sequelize'
import db from './db.ts'
import { CommentModel } from './comment.ts'

export class UserModel extends Model
{
    static modelDefinition = {
        username: {
            type: DataTypes.STRING
        },
        passwordHash: {
            type: DataTypes.STRING
        },
        passwordSalt: {
            type: DataTypes.STRING
        },
        pfppath: {
            type: DataTypes.STRING
        }
    }
}

class ModelFactory{
    connection:any
    model:any
    constructor()
    {
        this.connection = db
        this.model = UserModel
        this.model.init(this.model.modelDefinition, { sequelize: this.connection })
        this.model.hasMany(CommentModel.init(CommentModel.modelDefinition, {sequelize:this.connection}))
        this.connection.sync()
    }
}

var userModel

function getUserModel(){
    if(userModel == undefined)
    {
        userModel = new ModelFactory().model
    }
    return userModel
}

export default getUserModel