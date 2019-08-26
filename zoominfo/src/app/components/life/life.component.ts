import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit {
  life;
  constructor() { }
  @Input() lifeNumber: number;

  ngOnInit() {

  }

}
