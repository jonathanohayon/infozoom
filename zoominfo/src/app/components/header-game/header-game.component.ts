import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-game',
  templateUrl: './header-game.component.html',
  styleUrls: ['./header-game.component.scss']
})
export class HeaderGameComponent implements OnInit {

  constructor() { }
  @Input() lifeNumber: number;
  @Input() currentPoints: number;
  @Input() currentQuestionNumber: number;
  @Input() questionsNumber: number;
  ngOnInit() {
  }

}
