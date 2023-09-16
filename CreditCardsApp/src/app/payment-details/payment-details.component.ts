import { Component,OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail} from '../shared/payment-detail.model'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']

})

export class PaymentDetailsComponent implements OnInit{
  constructor(public service:PaymentDetailService,private toastr:ToastrService){
  }
  displayedColumns: string[] = ['paymentdetailid', 'cardownername', 'cardnumber', 'expirationdate','securitycode','custom-buton'];
  ngOnInit(): void {
  console.log('PaymentDetailsComponent initialized.');
  this.service.refreshList1();  
  this.service.refreshList(); 
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

