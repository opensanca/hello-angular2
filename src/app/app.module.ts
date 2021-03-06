import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { JobComponent } from './job.component';
import { JobDetailComponent } from './job-detail.component';
import { MainComponent } from './main.component';
import { JobService } from './job.service';

import { AlertModule } from 'ng2-bootstrap';
import { CollapseModule } from 'ng2-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    JobDetailComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'lista',
        component: AppComponent
      },
      {
        path: 'detail/:id',
        component: JobDetailComponent
      }
    ]),
    AlertModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [JobService],
  bootstrap: [MainComponent]
})
export class AppModule { }
