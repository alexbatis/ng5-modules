import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRootComponent } from './content-root/content-root.component';
import { SharedModule } from '../shared-module/shared.module';
import { SharedService } from '../services/shared-service/shared-service.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ContentRootComponent
  ],
  providers: [
  ]
})
export class ContentModule { }
