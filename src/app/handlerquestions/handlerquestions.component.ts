import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IntegrationapiService, QuestionPOJO } from '../services/integrationapi.service';

@Component({
  selector: 'app-handlerquestions',
  templateUrl: './handlerquestions.component.html',
  styleUrls: ['./handlerquestions.component.css']
})
export class HandlerquestionsComponent implements OnInit {
  radio_button_value = null;
  questionpojo: QuestionPOJO;
  coffeeChoose: string;
  
  constructor(private apiService: IntegrationapiService, private routed: Router) { }

  ngOnInit(): void {
    this.getQuestion();
  }

  getQuestion() {
    this.apiService.getNextQuestion().subscribe(response => {
      this.questionpojo = response;
    });
  }

  submitAnswer() {
    this.apiService.submitQuestion(this.radio_button_value, this.questionpojo.question).subscribe(response => {
      console.log(response);
      this.coffeeChoose = response.result;
      console.log(this.coffeeChoose);
      if(this.coffeeChoose == 'Nothing.'){
        this.ngOnInit();
      }else{
        //do something
      } 
    });
  }
}
