import { Component,OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail} from '../shared/payment-detail.model'

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']

})
export class PaymentDetailsComponent implements OnInit {
  constructor(public service:PaymentDetailService){
    
  }
  ngOnInit(): void {
this.service.refreshList();  
this.service.refreshList1(); 
}
ondelete(id:number){
  if(confirm('Are you sure to delete this record?'))
  this.service.deletepaymentdetail(id)
  .subscribe({
    next:res=>{
      this.service.list1 = this.service.list1.filter(pd => pd.paymentdetailid !== id);
      console.log(res);
    },
    error:err=>{console.log(err)}
  })
}
onedit(selectedrecord:PaymentDetail){
  this.service.formdata=Object.assign({},selectedrecord);
}

}
