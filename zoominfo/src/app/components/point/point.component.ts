import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {
   constructor() {
  }
  @Input() currentPoints: number;
  ngOnInit() {
  }

}
