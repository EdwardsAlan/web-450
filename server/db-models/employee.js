/*
============================================
; Title: NodeQuiz
<<<<<<< HEAD
; Author: Alan Edwards
; Date: Oct 6 2019
; Description: NodeQuiz
;===========================================
*/

const mongoose = require("mongoose");
=======
; Author: Professor Krasso
; Modified by: Alan Edwards
; Date: Oct 6 2019
; Description: NodeQuiz
;===========================================
*/const mongoose = require("mongoose");
>>>>>>> bedef0bdb6bc831b02b6c00ad8d2e8e5bcfb07f5
const Schema = mongoose.Schema;

let employeeResultsSchema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: "Employee" },
  quizName: { type: Schema.Types.ObjectId, ref: "EmployeeHistory" },
  date: { type: String },
  score: { type: Number }
});

let employeeHistorySchema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: "Employee" },
  quiz_Name: { type: String },
  employeeQuizResults: [employeeResultsSchema]
});

let employeeSchema = new Schema({
  employeeId: { type: String, required: true },
  userName: { type: String },
  employeeQuizHistory: [employeeHistorySchema]
});

module.exports = mongoose.model("Employee", employeeSchema);
