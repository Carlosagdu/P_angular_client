import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css'],
})
export class DashboardHeaderComponent implements OnInit {
  constructor() {}

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  ngOnInit(): void {}
}
