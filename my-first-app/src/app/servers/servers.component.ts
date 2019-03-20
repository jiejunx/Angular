import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverStatus = false;
  checkServer = 'online';
  serverName = '';
  lists = ['server1', 'server2'];
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true; 
      }, 2000)

    
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverStatus = true;
    this.lists.push(this.serverName);
    this.serverCreationStatus = 'Server was created!';
  }
  
  onUpdateServerName(event: Event){
    
    this.serverName = (<HTMLInputElement>event.target).value;


  }
}
