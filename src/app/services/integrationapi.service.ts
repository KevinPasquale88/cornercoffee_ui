import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class QuestionPOJO {

  constructor(public question: string, public answers: string[]) { }

}

@Injectable({
  providedIn: 'root'
})
export class IntegrationapiService {

  server = "localhost";
  port = "8080";

  constructor(private http: HttpClient) { }

  getNextQuestion() {
    return this.http.get<QuestionPOJO>(`http://${this.server}:${this.port}/cornercoffee/Question`);
  }

  submitQuestion(answer: string, question: string) {
    console.log(answer);
    const params = new HttpParams().set('answer', answer).set('question', question);
    return this.http.post<string>(`http://${this.server}:${this.port}/cornercoffee/SubmitAnswer`, null, {params});
  }

  getDescription(coffee: string) {
    const params = new HttpParams().set('coffeeName', coffee);
    return this.http.get<string>(`http://${this.server}:${this.port}/cornercoffee/Description`, {params});
  }
}
