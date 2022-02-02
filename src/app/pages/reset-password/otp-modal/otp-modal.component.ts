import { Component, OnInit } from '@angular/core';
import { NgxOtpInputConfig } from 'ngx-otp-input';

@Component({
  selector: 'app-otp-modal',
  templateUrl: './otp-modal.component.html',
  styleUrls: ['./otp-modal.component.scss']
})
export class OtpModalComponent implements OnInit {
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };
  optCode:any;
  requestStatus:boolean=false
  counter:number=60
  otpInput: boolean = false;
  private interval: any;
  constructor() { }

  ngOnInit(): void {
    this.doRequest()
  }
  doRequest() {
    this.otpInput = true;
    this.requestOtp();

    this.requestStatus = !this.requestStatus;
    this.counter = 60;
    if (this.requestStatus == true) {
      this.interval = setInterval(() => {
        this.counter = this.counter - 1;
        if (this.counter === 0) {
          clearInterval(this.interval);
          this.requestStatus = false;
        }
      }, 1000)
    }

  }
  requestOtp(){

  }
  handeOtpChange(event) {
    this.optCode = event
  }
  handleFillEvent(event) {

  }
}
