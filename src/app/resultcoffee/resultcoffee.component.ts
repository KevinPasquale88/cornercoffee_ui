import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IntegrationapiService } from '../services/integrationapi.service';

@Component({
  selector: 'app-resultcoffee',
  templateUrl: './resultcoffee.component.html',
  styleUrls: ['./resultcoffee.component.css']
})
export class ResultcoffeeComponent implements OnInit {

  coffeename : string;
  description: string;

  constructor(private apiService: IntegrationapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.coffeename = params['coffeename'];
    });
  }

  getDescription(){
    this.apiService.getDescription(this.coffeename).subscribe(response =>{
        console.log(response);
        this.description = response.result;
    },errors =>{
      console.log(errors);
    });
  }

}
