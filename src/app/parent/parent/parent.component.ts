import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { Subject, BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
  //props para recibir
  _message: string = '';
  subject$: Subject<string> = new Subject();

  //props para enviar
  messageThroughOutput: string = '';
  messageThroughService: string = ''; 
  messageThroughObservable: string ='';

  constructor(private service: MessageService) {}

  ngOnInit(): void {
    this.service._messageFromChild$
    .subscribe(message=> this.messageThroughService = message);
  }

  get message(){
    return this._message;
  }

  set message(value:string){
    this._message = value;
  }

  //métodos para enviar
  useInput(){  
    this.service.setMessageFromParent('');
    this.subject$.next('');
    this.message = 'PARENT USING INPUT PROPERTY';
  }

  useService(){
    this.message = ''
    this.subject$.next('');
    this.service.setMessageFromParent('PARENT USING SERVICE');
  }

  useObservable(){
    this.message = '';
    this.service.setMessageFromParent('');
    this.subject$.next('PARENT USING SUBJECT');
  }

  //métodos para recibir
  getThroughOutput(message:string){
   this.messageThroughOutput= message;
  }

  getThroughObservable(subject:Observable<string>){
    this.messageThroughOutput='';
    this.messageThroughService='';
    subject
    .subscribe(message => this.messageThroughObservable=message);
  }

  
}
