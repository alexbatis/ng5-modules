import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared-service/shared-service.service';

@Component({
  selector: 'app-about-root',
  templateUrl: './about-root.component.html',
  styleUrls: ['./about-root.component.css']
})
export class AboutRootComponent implements OnInit {
  title: string = "About";
  subTitle: string = "Component in AboutRootComponent";

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    var meaningOfLife = this.sharedService.getMeaningOfLife();
    console.log(`AboutRootComponent - shared service -> ${meaningOfLife}`);
  }

}
