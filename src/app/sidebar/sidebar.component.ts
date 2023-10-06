import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  divVisible: boolean = false;
   toggleDivVisibilityOnClick(): void {
    this.divVisible = !this.divVisible;

  }
  notPortfolioOnClick(): void{
    this.divVisible = false;
  }
}
