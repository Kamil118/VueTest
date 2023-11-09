import { DataTypes, Model } from 'sequelize'
import db from './db.ts'
import { UserModel } from './user.ts'

export class AuthenitcationModel extends Model
{
    static modelDefinition = {
        token: {
            type: DataTypes.STRING
        },
        expiration: {
            type: DataTypes.DATE
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
        this.model.init(this.model.modelDefinition,this.connection)
        this.model.belongsTo(UserModel.init(UserModel.modelDefinition, {sequelize:this.connection}))
        this.connection.sync()
    }
}

var authenticationModel

function getAuthModel(){
    if(authenticationModel == undefined)
    {
        authenticationModel = new ModelFactory().model
    }
    return authenticationModel
}

export default getAuthModel