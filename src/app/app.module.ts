import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared-module/shared.module';
import { ROUTES } from './app.routing';
import { HomeModule } from './home-module/home.module';
import { ContentModule } from './content-module/content.module';
import { AboutModule } from './about-module/about.module';
import { SharedService } from './services/shared-service/shared-service.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(ROUTES), 
    HomeModule,
    ContentModule,
    AboutModule   
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
