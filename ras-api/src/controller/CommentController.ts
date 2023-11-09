import getCommentModel from '../model/comment.ts'
import getPostModel from '../model/post.ts'
import getUserModel from '../model/user.ts'

export default class CommentController{
    model: any
    postModel: any
    userModel: any
    constructor()
    {
        this.model = getCommentModel()
        this.postModel = getPostModel()
        this.userModel = getUserModel()
    }
    async getComment(CommentId: number):Promise<typeof this.model | null>{
        return this.model.findByPk(CommentId)
    }
    async getPostComments(post: typeof this.postModel):Promise<[typeof this.model]>{
        return post.getComments()
    }
    async getUserComments(user: typeof this.userModel):Promise<[typeof this.model]>{
        return user.getComments()
    }
    private saveComment(comment:typeof this.model):Promise<typeof this.model>
    {
        return comment.save()
    }
    async createCommentTest(content_:string)
    {
        this.saveComment(await this.model.create({content:content_}))
    }
}