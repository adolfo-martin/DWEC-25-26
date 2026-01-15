import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { AppStatusService } from '../../services/app-status-service';

@Component({
  selector: 'button-login',
  imports: [],
  templateUrl: './button-login.html',
  styleUrl: './button-login.css',
})
export class ButtonLogin {
  private readonly authService = inject(AuthService);
  readonly statusService = inject(AppStatusService);

  protected loginHandler($event: PointerEvent) {
    this.authService.validateUser$('emilys', 'emilyspass').subscribe((token) => {
      // console.log(token);
      this.statusService.openSession(token);
    }) 
  }
}
