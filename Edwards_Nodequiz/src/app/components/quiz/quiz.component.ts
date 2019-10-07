import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizId:any;
  quiz:any;
  currentQuestion :any;
  currentChoices:any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.quizId= parseInt(this.route.snapshot.paramMap.get("id"))
    this.http.get('/api/test/'+ this.quizId).subscribe(res=>{
      if(res){
        console.log(res)
      this.quiz=res;
      this.currentQuestion=this.quiz.questions[0].question
      this.currentChoices=this.quiz.questions[0].choices
        
      }else{
      }

    })
   }
 
   ngOnInit() {
     
   }
 
 }
 