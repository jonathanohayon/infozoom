import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service';
import * as _ from 'lodash';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {
  dataService;
  results;
  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.dataService.getResults().subscribe(
      value => this.results = _.orderBy(value.data, ['score'], ['desc']));
  }
  ngOnInit() {
  }

}
