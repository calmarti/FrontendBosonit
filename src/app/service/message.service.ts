import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _messageFromParent: Subject<string> = new Subject();
  private _messageFromChild: Subject<string> = new Subject();

  _messageFromParent$ = this._messageFromParent.asObservable();
  _messageFromChild$ = this._messageFromChild.asObservable();

  setMessageFromParent(message:string){
    this._messageFromParent.next(message);
  }

  setMessageFromChild(message:string){
    this._messageFromChild.next(message);
  }

}
