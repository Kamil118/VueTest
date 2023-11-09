import authenitcationModel from "@/model/authenitcation"
import userModel, { UserModel } from "@/model/user"

export default class authenticationController{
    authModel: any
    uModel: any
    constructor()
    {
        this.authModel = authenitcationModel
        this.uModel    = userModel
    }
    async login(login:string, password:string):Promise<typeof authenitcationModel | null>{
        return null
    }
    async validateToken(user_:UserModel, token_:string):Promise<boolean>
    {
        let local_token = await this.authModel.findOne(
            {
                where:{
                    token:token_
                }
            }
        )
        if (local_token == null || await local_token.getUser() != user_ || local_token.expiration < Date.now())
        {
            return false //token not found for that user
                         //or expired
        }
        return true
    }
}