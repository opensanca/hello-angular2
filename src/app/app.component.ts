import { Component, OnInit } from '@angular/core';
import { Job } from './job';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { JobService } from './job.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  jobs: Job[] = [];
  job: Job = new Job();
  headers = new Headers();
  title = 'OpenSanca - Angular 2';

  constructor(private http: Http, private jobService: JobService) {
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  ngOnInit(): void {
    this.jobService.getJobs()
      .then(jobs => {
        this.jobs = jobs
      })
  }

  inserir() {
    this.jobService.addJob(this.job).then(job => {
      this.jobs.push(job);
      this.job = new Job();
    })
  }

}
