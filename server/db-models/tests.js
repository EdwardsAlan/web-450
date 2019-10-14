/*
============================================
; Title: NodeQuiz
; Author: Alan Edwards
; Date: Oct 6 2019
; Description: NodeQuiz
;===========================================
*/
<<<<<<< HEAD


const mongoose = require("mongoose");
=======
const mongoose = require('mongoose');
>>>>>>> bedef0bdb6bc831b02b6c00ad8d2e8e5bcfb07f5
const Schema = mongoose.Schema;

let choicesSchema = new Schema({
  text: String,
  isCorrect: Boolean
})


let questionsSchema = new Schema({
  text: String,
  choices: [choicesSchema]
  
});

let quizSchema = new Schema({
  quizId: String,
  quizName: String,
  quizQuestions: [questionsSchema]
});

<<<<<<< HEAD
module.exports = mongoose.model("quiz", quizSchema, "test");
=======
module.exports=mongoose.model('test',quizSchema,'test')
>>>>>>> bedef0bdb6bc831b02b6c00ad8d2e8e5bcfb07f5
