import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @Output() id!: boolean;

  constructor(private router: Router) {}

  viewTasks(status: 'open' | 'closed') {
    this.router.navigateByUrl(`/dashboard?status=${status}`);
  }
}
