import { Component, Input } from '@angular/core';
import { Job } from './job';

@Component({
  selector: 'job',
  templateUrl: './job.component.html'
})
export class JobComponent {

  @Input() job: Job;
  @Input() index: number;

}
