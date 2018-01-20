import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared-service/shared-service.service';

@Component({
  selector: 'app-home-root',
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.css']
})
export class HomeRootComponent implements OnInit {
  title: string = "Home";
  subTitle: string = "Component in HomeRootComponent";

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    var meaningOfLife = this.sharedService.getMeaningOfLife();
    console.log(`HomeRootComponent - shared service -> ${meaningOfLife}`);
  }

}
