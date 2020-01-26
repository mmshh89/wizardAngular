import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { WizardData } from './wizardData.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DataCallService {

  private baseUrl = environment.restApi;
  private projectsUrl = `${this.baseUrl}projects`;

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    console.log(this.projectsUrl);
    return this.http.get<WizardData[]>(this.projectsUrl).pipe(
      tap(_ => console.log('fetched projects', 'GET')),
      catchError(this.handleError('getProjects', 'GET'))
    );
  }

  addProject(project: WizardData): Observable<any> {
    return this.http.post<WizardData>(this.projectsUrl, project, httpOptions).pipe(
      tap((project: WizardData) => console.log(`added hero w/ id=${project.id}`, 'POST')),
      catchError(this.handleError('addProject', 'POST'))
    );
  }



  protected handleError(operation: string, method: string) {
    return function errorHandler(res: HttpErrorResponse) {
      console.log('http error response res: ' + res);
      const eMsg = res.message || '';
      const error = `${this.entityNamePlural} ${operation} Error${eMsg ? ':' + eMsg : ''}`;
      console.log('taken error: ' + error, 'method: ' + method);      
    }.bind(this);
  }
}
