import { Component, OnInit } from '@angular/core';
import { SidebarService, SidebarState } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

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
