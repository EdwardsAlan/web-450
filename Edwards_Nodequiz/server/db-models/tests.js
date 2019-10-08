/*
============================================
; Title: NodeQuiz
; Author: Alan Edwards
; Date: Oct 6 2019
; Description: NodeQuiz
;===========================================
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let quizSchema = new Schema({
  quizId:{type:String, require:true},
  quizName:{type:String},
  questions:{type:Array},

});

module.exports=mongoose.model('test',quizSchema,'test')
