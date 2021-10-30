import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() actual: number = 1;
  @Input() colSize: number = 0;
  @Input() pageSize: number = 0;

  @Output() page: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updatePage(newPage:number):void{
    this.page.emit(newPage);
  }

}

