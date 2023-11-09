import postModel from "@/model/post"

class PostController{
    model: any
    constructor()
    {
        this.model = postModel
    }
    async getComment(postId: number):Promise<typeof postModel | null>{
        return this.model.findByPk(postId)
    }
    async saveComment(post:typeof postModel):Promise<typeof postModel>
    {
        return post.save()
    }
}