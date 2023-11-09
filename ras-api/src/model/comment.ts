import { DataTypes, Model, Sequelize } from 'sequelize'
import db from './db.ts'
import { UserModel } from './user.ts'
import { PostModel } from './post.ts'

export class CommentModel extends Model
{
    static modelName = "User"
    static modelDefinition = {
        content: {
            type: DataTypes.TEXT
        },
        postDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }
}

class ModelFactory{
    connection: Sequelize
    model: typeof CommentModel
    constructor()
    {
        this.connection = db
        this.model = CommentModel
        this.model.init(this.model.modelDefinition, { sequelize:this.connection })
        
        this.model.belongsTo(UserModel.init(UserModel.modelDefinition, { sequelize:this.connection }))
        this.model.belongsTo(PostModel.init(PostModel.modelDefinition, { sequelize:this.connection }))

        this.connection.sync()
    }
}

var commentModel

function getCommentModel(){
    if(commentModel == undefined)
    {
        commentModel = new ModelFactory().model
    }
    return commentModel
}

export default getCommentModel