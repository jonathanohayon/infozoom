import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataService} from './services/data-service';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent} from './components/main/main.component';
import { GameManagerComponent} from './components/game-manager/game-manager.component';
import { QuestionScreenComponent } from './components/question-screen/question-screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountdownModule, Config } from 'ngx-countdown';
import { PointComponent } from './components/point/point.component';
import { LifeComponent } from './components/life/life.component';
import { HeaderGameComponent } from './components/header-game/header-game.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { GameoverComponent } from './components/gameover/gameover.component';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';



const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'start-game', component: GameManagerComponent },
  { path: 'leader-board', component: LeaderBoardComponent }
];

function countdownConfigFactory(): Config {
  return { template: `$!h!:$!m!:$!s!` };
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GameManagerComponent,
    QuestionScreenComponent,
    PointComponent,
    LifeComponent,
    HeaderGameComponent,
    GameoverComponent,
    LeaderBoardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    CountdownModule,
    StoreModule.forRoot({user: reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
