import { Component } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent {
  constructor(public service:PaymentDetailService){
  }
  onsubmit(form:NgForm){
    this.service.postpaymentdetail()
    .subscribe({
      next:res=>{
        console.log(res);
        this.service.refreshList1();
      },
      error:err=>{console.log(err)}
    })
  }
  
}
