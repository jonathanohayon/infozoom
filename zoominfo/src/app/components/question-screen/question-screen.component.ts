import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.scss']
})
export class QuestionScreenComponent implements OnInit {
  constructor() {
   }
  @Input() model;
  @Input() answerSelected;
  @Output() answered = new EventEmitter();

  resetSelectedItems(){
    this.model.choiceListArray.forEach(element => {
      element.isSelected = false;
      element.isGoodChoice = '';
    });
  }
  updateStatus(item) {
    this.resetSelectedItems();
    item.isSelected = true;
    item.isGoodChoice = this.model.correct_answer === item.title ? true : false;
    this.answered.emit('' + item.isGoodChoice);
  }

ngOnInit() {
    const temp = this.model.incorrect_answers;
    temp.push(this.model.correct_answer);
    this.model.choiceListArray = temp.map(item => {
      return {title: item};
      });
  }

}
