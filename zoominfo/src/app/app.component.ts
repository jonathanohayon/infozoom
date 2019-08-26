import { Component, OnInit } from '@angular/core';
import { DataService} from './services/data-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private dataService: any;
  title: string;
  constructor(dataService: DataService) {
    this.dataService = dataService;
  }
  ngOnInit(): void {
    this.dataService.getResults().subscribe(
      value => this.title = 'zoominfo' + JSON.stringify(value));
  }
}
