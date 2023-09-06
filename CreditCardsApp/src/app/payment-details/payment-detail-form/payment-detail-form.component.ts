import { Component } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent {
  constructor(public service:PaymentDetailService,private toastr: ToastrService){
  }
  
  onsubmit(form:NgForm){
      if(this.service.formdata.paymentdetailid==0){
        this.insertrecord(form)
      }
      else{
        this.updaterecord(form)
      }
  }
  insertrecord(form:NgForm){
    this.service.postpaymentdetail()
    .subscribe({
      next:res=>{
        console.log(res);
        this.service.resetformdetail(form);
        this.service.refreshList1();
        this.toastr.success('Payment Details!', 'inserted successfully');
      },
      error:err=>{console.log(err)}
    })
  }
  updaterecord(form:NgForm){
    this.service.putpaymentdetail()
    .subscribe({
      next:res=>{
        console.log(res);
        this.service.resetformdetail(form);
        this.service.refreshList1();//lam moi list data
        this.toastr.info('Payment Details!', 'update successfully')
      },
      error:err=>{console.log(err)}
    })
  }
  
}
