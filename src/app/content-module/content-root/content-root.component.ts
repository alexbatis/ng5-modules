import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared-service/shared-service.service';

@Component({
  selector: 'app-content-root',
  templateUrl: './content-root.component.html',
  styleUrls: ['./content-root.component.css']
})
export class ContentRootComponent implements OnInit {
  title : string = "Content";
  subTitle : string = "Component in ContentRootModule";


  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    var meaningOfLife = this.sharedService.getMeaningOfLife();
    console.log(`ContentRootComponent - shared service -> ${meaningOfLife}`);
  }

}
