import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-payment';
}
