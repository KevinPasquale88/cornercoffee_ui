import { Component, OnInit } from '@angular/core';
import { IntegrationapiService, QuestionPOJO } from '../services/integrationapi.service';

@Component({
  selector: 'app-handlerquestions',
  templateUrl: './handlerquestions.component.html',
  styleUrls: ['./handlerquestions.component.css']
})
export class HandlerquestionsComponent implements OnInit {
  radio_button_value = null;
  questionpojo: QuestionPOJO;

  constructor(private apiService: IntegrationapiService) { }

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
    });
  }

}
