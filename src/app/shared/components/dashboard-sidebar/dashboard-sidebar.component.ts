import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css'],
})
export class DashboardSidebarComponent implements OnInit {
  @Output() whenItemIsClicked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  itemIsClicked() {
    this.whenItemIsClicked.emit();
  }

  ngOnInit(): void {}
}
