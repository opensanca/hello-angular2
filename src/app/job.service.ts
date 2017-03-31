import { Injectable } from '@angular/core';
import { Job } from './job';
import { Http, Headers } from '@angular/http';

@Injectable()
export class JobService {

  headers = new Headers();

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  getJobs(): Promise<Job[]> {
    return this.http.get('http://localhost:9999/jobs').toPromise().then(res => res.json());
  }

  getJob(id: string): Promise<Job> {
    return this.http.get(`http://localhost:9999/jobs/${id}`).toPromise().then(res => res.json());
  }

  addJob(job): Promise<Job> {
    return this.http
    .post('http://localhost:9999/jobs', {titulo: job.titulo, descricao: job.descricao}, {headers: this.headers})
    .toPromise()
    .then(res => {
      return res.json()
    })
  }

}
