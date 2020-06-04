import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenStorageService } from './token-storage.service';

const API_URL = 'https://language-lab-server.herokuapp.com/api/user/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username = '';

  constructor
  (private http: HttpClient,
    private tokenStorageService: TokenStorageService,
    ) { }

  joinCourse(courseId: number): Observable<any> {
    this.username = this.tokenStorageService.getUser().username;
    return this.http.post(`${API_URL}join/${courseId}`, {userName: this.username }, httpOptions);
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getSecretContent(): Observable<any> {
    return this.http.get(API_URL + 'secret', { responseType: 'text' });
  }

  getUsersList() : Observable<any> {
    return this.http.get(`${API_URL}users`);
  }

  deleteUser(id: number) {
    return this.http.delete(`${API_URL}${id}`, { responseType: 'text' });
  }
}
