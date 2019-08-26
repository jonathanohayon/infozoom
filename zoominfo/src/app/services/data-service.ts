import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Store, select } from '@ngrx/store';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:3002',
    'Content-type' : 'application/json',
  })
};

@Injectable()
export class DataService {
point$;
  constructor(private http: HttpClient, private store: Store<{ user: {point, life} }>) {
    this.point$ = store.pipe(select((state) => state.user.point));
   }
  url = 'http://localhost:3002';

  getData() {
    return this
      .http
      .get(`${this.url}/`, httpOptions);
  }
  getQuestions() {
    return this
      .http
      .get(`${this.url}/questions`, httpOptions);
  }
  getResults() {
    return this
      .http
      .get(`${this.url}/user`, httpOptions);
  }
  saveResult(userName) {
    this.point$.subscribe(
      value => {
        const body = {
          name: userName,
          score: value
        };
        this.http.post(`${this.url}/user`, body, httpOptions).subscribe(value => console.log(value));
      }
    );
  }
}
