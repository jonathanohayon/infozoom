import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data-service';
import { CountdownComponent } from 'ngx-countdown';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as userActions from '../../store/actions/user.actions';

@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.scss']
})
export class GameManagerComponent implements OnInit {
  isSelected;
  infoText = '';
  isGoodChoice;
  lifeNumber;
  currentPoints;
  answerSelected;
  okSelected = false;
  point$: Observable<number>;
  life$: Observable<number>;
  currentQuestionNumber = 1;
  gameover = false;
  dataService: any;
  dataList: [];

  constructor(dataService: DataService, private store: Store<{ user: { point, life } }>) {
    this.dataService = dataService;
    this.point$ = store.pipe(select((state) => state.user.point));
    this.life$ = store.pipe(select((state) => state.user.life));
  }

  @ViewChild('countdown', { static: false }) counter: CountdownComponent;
  @ViewChild('carousel', { static: false }) carousel: NgbCarousel;

  ngOnInit(): void {
    this.point$.subscribe(
      value => {
        this.currentPoints = value;
      }
    );
    this.life$.subscribe(
      value => {
        this.lifeNumber = value;
      }
    );
    this.dataService.getQuestions().subscribe(
      value => {
        this.dataList = value;
        console.log(value);
      }
    );
    this.currentQuestionNumber = 0;
    this.lifeNumber = 3;
  }

  incrementPoint() {
    this.store.dispatch(userActions.incrementPoint());
  }
  resetPoint() {
    this.store.dispatch(userActions.resetPoint);
  }
  decrementLife() {
    this.store.dispatch(userActions.decrementLife());
  }
  resetLife() {
    this.store.dispatch(userActions.resetLife());
  }

  clickOK() {
    this.infoText = this.isGoodChoice ? 'Good Job! Prepare for the next question...' : 'WRONG! Prepare for the next question...';
    this.okSelected = true;
    setTimeout(() => {
      this.carousel.next();
      this.okSelected = false;
    }, 2000);
  }

  answerClicked(isGoodChoice) {
    this.isGoodChoice = isGoodChoice === 'true' ? true : false;
    this.isSelected = true;
  }
  resetAll() {
    this.isSelected = undefined;
    this.isGoodChoice = undefined;
    this.infoText = undefined;
  }

  countDownFinished(e) {
    this.carousel.next();
  }
  onSlide(slideData) {
    console.log('SLIDE:', slideData);
    this.currentQuestionNumber++;
    if (typeof this.isGoodChoice !== 'undefined' && !this.isGoodChoice) {
      this.decrementLife();
    }
    if (typeof this.isGoodChoice !== 'undefined' && this.isGoodChoice) {
      this.incrementPoint();
    }
    this.resetAll();
    setTimeout(() => {
      this.counter.restart();
    }, 100);
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.resetAll();
    this.currentQuestionNumber = 0;
    this.lifeNumber = 3;
  }
}

