import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent/parent.component';
import { ChildComponent } from './child/child/child.component';
import { MessageService } from './service/message.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule, 
    MaterialModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
