import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://language-lab-server.herokuapp.com/api/group/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getGroupByUser(userId: number): Observable<any> {
    return this.http.get(`${API_URL}user/${userId}`);
  }

  getGroup(id: number): Observable<any> {
    return this.http.get(`${API_URL}groups/${id}`);
  }

  createGroup(group: Object): Observable<Object> {
    return this.http.post(`${API_URL}groups`, group, httpOptions);
  }

  leaveGroup(id: number): Observable<any> {
    return this.http.get(`${API_URL}leave/${id}`);
  }

  getGroupsByTeacher(teacherId: number): Observable<any> {
    return this.http.get(`${API_URL}teacher/${teacherId}`);
  }

  deleteGroup(id: number) {
    return this.http.delete(`${API_URL}${id}`, { responseType: 'text' });
  }
}
