import { DataTypes, Model } from 'sequelize'
import db from './db.ts'
import { CommentModel } from './comment.ts'

export class PostModel extends Model
{
    static modelDefinition = {
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.TEXT
        },
        contentversion:{
            type:DataTypes.TINYINT,
            defaultValue: 1
        },
        postDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }
}

export class ModelFactory{
    connection:any
    model:any
    constructor()
    {
        this.connection = db
        this.model = PostModel
        this.model.init(this.model.modelDefinition,this.connection)
        this.model.hasMany(CommentModel)
        this.connection.sync()
    }
}