import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { SharedService } from './services/shared-service/shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private sharedService : SharedService){}

  ngOnInit(){
    var meaningOfLife = this.sharedService.getMeaningOfLife();
    console.log(`AppComponent - shared service -> ${meaningOfLife}`);
  }

}
