import { Component, OnInit } from '@angular/core';
import { SidebarService, SidebarState } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.less']
})
export class BasicLayoutComponent implements OnInit {

  sidebarState: SidebarState;

  constructor(private sidebarService: SidebarService) {
    this.sidebarState = this.sidebarService.getState();

    this.sidebarService.onStateChanged()
      .subscribe((sidebarState: SidebarState) => {
        this.sidebarState = sidebarState;
      });
  }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.sidebarService.toggle();
  }

}
