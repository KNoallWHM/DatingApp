import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() canceRegister = new EventEmitter();
  model: any = {}

  constructor(private accountService: AccountService, ) { }

  ngOnInit(): void {
  }


  register() {

  this.accountService.register(this.model).subscribe({
    next: () => {
    
      this.cancel();
    },
    // error: error => this.toastr.error(error.error)
  })
  }

  cancel() {
    this.canceRegister.emit(false);
  }

}
