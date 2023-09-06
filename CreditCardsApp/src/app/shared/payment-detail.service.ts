import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment.development';
import { PaymentDetail} from './payment-detail.model'
import { NgIf } from '@angular/common';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url:string =environment.apiBaseUrl+'/creditcards/1'
  url1:string =environment.apiBaseUrl+'/creditcards'

  list:PaymentDetail = new PaymentDetail();
  list1:PaymentDetail[]=[];
  formdata:PaymentDetail = new PaymentDetail();
  formdatadelte:PaymentDetail = new PaymentDetail();

  constructor(private http: HttpClient) { }
  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next:res=>{this.list=res as PaymentDetail},
      error:err=>{console.log(err)}
    })
  }
  refreshList1(){
    this.http.get(this.url1)
    .subscribe({
      next:res=>{this.list1=res as PaymentDetail[]},
      error:err=>{console.log(err)}
    })
  }
  postpaymentdetail(){
    return this.http.post(this.url1,this.formdata)
  }
  deletepaymentdetail(id:number){
    return this.http.delete(this.url1+'/'+id)
  }
  putpaymentdetail(){
    return this.http.put(this.url1+'/'+this.formdata.paymentdetailid,this.formdata)
  }
  resetformdetail(form:NgForm){
    form.form.reset();
    this.formdata=new PaymentDetail();
  }
}
