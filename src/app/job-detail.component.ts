import { Component, Input, OnInit } from '@angular/core';
import { Job } from './job';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { JobService } from './job.service';

@Component({
  selector: 'job-detail',
  templateUrl: './job-detail.component.html'
})
export class JobDetailComponent implements OnInit {

  job: Job = new Job()
  isCollapsed: boolean = false;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.jobService.getJob(params['id']).then(job => {
        this.job = job;
      });
    });
  }

  goBack(): void {
    this.location.back();
  }

}
