import express from 'express'
//import { db } from './src/model/db.js'
import { ModelFactory as Comment } from './src/model/comment.ts'


let app = express()
const port = 5174


let test = new Comment()

test.model.destroy({
    truncate: true
  })

test.model.create({content:"test comment"})

test.model.findAll().then((result) =>{
    console.log(result)
})
