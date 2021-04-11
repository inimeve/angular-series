import { Component, HostBinding, OnInit } from '@angular/core';
import { SidebarService, SidebarState } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  isCollapsed: boolean;

  @HostBinding('class.compacted')
  get compacted(): boolean {
    return this.isCollapsed;
  }

  @HostBinding('class.expanded')
  get expanded(): boolean {
    return !this.isCollapsed;
  }

  constructor(private sidebarService: SidebarService) {
    this.isCollapsed = this.sidebarService.getState().isCollapsed;
  }

  ngOnInit(): void {
    this.sidebarService.onStateChanged()
      .subscribe((sidebarState: SidebarState) => {
        this.isCollapsed = sidebarState.isCollapsed;
      });
  }

}
