import { Component } from '@angular/core';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe((status: string) =>
      alert('New Status' + ' ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}
