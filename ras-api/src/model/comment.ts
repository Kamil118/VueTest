import { DataTypes, Model } from 'sequelize'
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

export class ModelFactory{
    connection:any
    model:any
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


/*class CommentController{
    connection: any
    model: any
    constructor()
    {
        this.connection = db.getConnection()
        this.model = CommentModel
        this.model.init(this.model.modelDefinition,this.connection)
        this.connection.sync()
    }
    async getComment(CommentId: number):Promise<CommentModel | null>{
        return this.model.findByPk(CommentId)
    }
    async getPostComments(PostId: number):Promise<[CommentModel]>{
        return this.model.findAll({
            where: {
                postId: PostId
            }
        })
    }
    async getUserComments(UserId: number):Promise<[CommentModel]>{
        return this.model.findAll({
            where: {
                userId: UserId
            }
        })
    }
    async saveComment(comment:CommentModel):Promise<CommentModel>
    {
        return comment.save()
    }
}*/