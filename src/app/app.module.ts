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
    ])
  ],
  providers: [JobService],
  bootstrap: [MainComponent]
})
export class AppModule { }
