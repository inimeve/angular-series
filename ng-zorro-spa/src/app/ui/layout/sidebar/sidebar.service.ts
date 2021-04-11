import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class SidebarState {
  static readonly STATE_EXPANDED = new SidebarState('expanded', false);
  static readonly STATE_COMPACTED = new SidebarState('compacted', true);

  private constructor(
    public readonly state: string,
    public readonly isCollapsed: boolean
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidebarState$;

  constructor() {
    this.sidebarState$ = new BehaviorSubject<SidebarState>(SidebarState.STATE_COMPACTED);
  }

  getState(): SidebarState {
    return this.sidebarState$.getValue();
  }

  onStateChanged(): Observable<SidebarState> {
    return this.sidebarState$;
  }

  toggle(): void {
    if (this.sidebarState$.getValue() === SidebarState.STATE_COMPACTED) {
      this.sidebarState$.next(SidebarState.STATE_EXPANDED);
      console.log(`SidebarState: ${this.sidebarState$.getValue().state}`);
    } else {
      this.sidebarState$.next(SidebarState.STATE_COMPACTED);
      console.log(`SidebarState: ${this.sidebarState$.getValue().state}`);
    }
  }

}
