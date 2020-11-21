import { Component, OnInit } from '@angular/core';
import { IntegrationapiService } from '../services/integrationapi.service';

@Component({
  selector: 'app-resultcoffee',
  templateUrl: './resultcoffee.component.html',
  styleUrls: ['./resultcoffee.component.css']
})
export class ResultcoffeeComponent implements OnInit {

  coffeename : string;
  description: string;

  constructor(private apiService: IntegrationapiService) { }

  ngOnInit(): void {
  }

  getDescription(){
    this.apiService.getDescription(this.coffeename).subscribe(response =>{
      this.description = response;
    },errors =>{
      console.log(errors);
    });
  }

}
