import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  name: string = '';

  onUpdateName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
}
