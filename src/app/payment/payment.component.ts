import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  private route = inject(ActivatedRoute);
  status: any;


  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.status = params['status'] || '';
      const id = params['serviceId'] || '';
      if (this.status === 'approved') {
        window.location.href = `illtip://serviceDetails?serviceId=${id}&status=approved`;
      }
    });
  }
}
