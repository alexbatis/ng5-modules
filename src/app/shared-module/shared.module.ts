import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SharedService } from '../services/shared-service/shared-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageHeaderComponent
  ],
  exports: [
    CommonModule,
    PageHeaderComponent
  ]
})
export class SharedModule { }
