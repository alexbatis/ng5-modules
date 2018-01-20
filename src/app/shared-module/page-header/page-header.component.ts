import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input('heading') heading : string;
  @Input('subHeading') subHeading : string;

  constructor() { }

  ngOnInit() {
  }

}
