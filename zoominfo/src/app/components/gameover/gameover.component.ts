import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.scss']
})
export class GameoverComponent implements OnInit {
  dataService: any;
  constructor(dataService: DataService) {
    this.dataService = dataService;
  }
  @Input() isSuccess: number;
  @Input() score: number;
  @Input() questionsNumber: number;

  ngOnInit() {
  }

  saveResult(yourName) {
    this.dataService.saveResult(yourName);
  }

}
