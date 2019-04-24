import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { TabService } from 'core/layout/retab/service/tab.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
@Component({
  selector: 'app-type3',
  templateUrl: './type3.component.html',
  styleUrls: ['./type3.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Type3Component implements OnInit, AfterViewInit {

  images: any[];
  @ViewChildren('galleria') galleria: QueryList<ElementRef>;
  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) { 
    this.breadcrumbService.setItems([
      { label: 'DASHBOARD UI' },
      { label: 'TYPE3' },
    ]);
    
    //this.tService.setItems('DASHBOARD UI TYPE3');
  }

  ngAfterViewInit() {

  }

  ngOnInit() {

    console.log(this.galleria);
    this.images = [];
    this.images.push({ source: 'assets/demo/images/nature/nature1.jpg', alt: 'Description for Image 1', title: 'Title 1'
    , style : 'width: 700px; height: 500px;' });
    this.images.push({ source: 'assets/demo/images/nature/nature2.jpg', alt: 'Description for Image 3', title: 'Title 3' });
    this.images.push({ source: 'assets/demo/images/nature/nature3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
    this.images.push({ source: 'assets/demo/images/nature/nature4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
    this.images.push({ source: 'assets/demo/images/nature/nature5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
    this.images.push({ source: 'assets/demo/images/nature/nature6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
    this.images.push({ source: 'assets/demo/images/nature/nature7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
    this.images.push({ source: 'assets/demo/images/nature/nature8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
    this.images.push({ source: 'assets/demo/images/nature/nature9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
    this.images.push({ source: 'assets/demo/images/nature/nature10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
    this.images.push({ source: 'assets/demo/images/nature/nature11.jpg', alt: 'Description for Image 11', title: 'Title 11' });
    this.images.push({ source: 'assets/demo/images/nature/nature12.jpg', alt: 'Description for Image 12', title: 'Title 12' });
  }
  click() {
    console.log(this.galleria);
  }

  makeThumnail() {
  }
}
