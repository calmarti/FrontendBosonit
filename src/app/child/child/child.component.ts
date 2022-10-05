import { Component, EventEmitter, Input , OnInit, Output } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
import { Subject, BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  //props para recibir
  @Input() messageThroughInput: string = '';
  messageThroughService: string='';
  @Input() subjectFromParent$!: Subject<string>
  messageThroughObservable:string = '';
  

  //props para enviar
  @Output() throughOutputEvent: EventEmitter<string> = new EventEmitter();
  behaviorSubject$: BehaviorSubject<string> = new BehaviorSubject('');
  @Output() throughObservableEvent: EventEmitter<Subject<string>> = new EventEmitter();


  constructor(private service: MessageService) {}

  ngOnInit():void{

    this.service._messageFromParent$
    .subscribe(message=>this.messageThroughService=message);

    this.subjectFromParent$
    .subscribe((message) => 
    this.messageThroughObservable = message)

  }
  
  //métodos para enviar
  useOutput(){
    this.behaviorSubject$.next('');
    this.service.setMessageFromChild('');
    this.throughOutputEvent.emit('CHILD USING OUTPUT EVENT')
  }

  useService(){
    this.behaviorSubject$.next('');
    this.throughOutputEvent.emit('');
    this.service.setMessageFromChild('CHILD USING SERVICE');
  }

  useObservable(){
    this.behaviorSubject$.next('CHILD USING SUBJECT');
    this.throughObservableEvent.emit(this.behaviorSubject$);
  }

}
  





