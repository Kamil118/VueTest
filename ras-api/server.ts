import express from 'express'
//import { db } from './src/model/db.js'
import CommentController from './src/controller/CommentController.ts'


let app = express()
const port = 5174


let cc = new CommentController()

cc.model.destroy({
    truncate: true
  })

cc.createCommentTest("funny comment").then(() =>{
  cc.getComment(1).then((c) =>{
    console.log(c)
  })
})



