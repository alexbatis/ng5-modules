import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRootComponent } from './about-root/about-root.component';
import { SharedModule } from '../shared-module/shared.module';
import { SharedService } from '../services/shared-service/shared-service.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AboutRootComponent
  ],
  providers: [

  ]
})
export class AboutModule { }
