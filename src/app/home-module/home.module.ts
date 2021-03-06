import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRootComponent } from './home-root/home-root.component';
import { SharedModule } from '../shared-module/shared.module';
import { SharedService } from '../services/shared-service/shared-service.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeRootComponent
  ],
  providers : [
  ],
  bootstrap: [HomeRootComponent]
})
export class HomeModule { }
