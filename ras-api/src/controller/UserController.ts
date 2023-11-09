import userModel from "@/model/user"

export default class UserController{
    model: any
    constructor()
    {
        this.model = userModel
    }
    async getComment(userId: number):Promise<typeof userModel | null>{
        return this.model.findByPk(userId)
    }
    async saveComment(user:typeof userModel):Promise<typeof userModel>
    {
        return user.save()
    }
    async createUser(name:string, password:string)
    {

    }
}