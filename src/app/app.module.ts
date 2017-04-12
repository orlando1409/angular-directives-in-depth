import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppDirective } from './app.directive';
import { BasicComponent } from './basic/basic.component';
import { AnotherDirective } from './another.directive';
import { TrackDirective } from './track.directive';
import { TrackingService } from "app/tracking.service";
import { OnlineDirective } from './online.directive';
import { OnlineService } from "app/online.service";
import { CustomComponent } from './custom/custom.component';
import { Custom2Component } from './custom2/custom2.component';
import { StructuralDirective } from './structural.directive';
import { StructuralComponent } from './structural/structural.component';
import { Structural2Directive } from './structural2.directive';
import { Structural2Component } from './structural2/structural2.component';
import { Structural3Directive } from './structural3.directive';
import {Structural3Component} from './structural3/structural3.component';
import {StorageService} from "app/storage.service";
import { StorageComponent } from './storage/storage.component';
import { SurroundDirective } from './surround.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppDirective,
    BasicComponent,
    AnotherDirective,
    TrackDirective,
    OnlineDirective,
    CustomComponent,
    Custom2Component,
    StructuralDirective,
    StructuralComponent,
    Structural2Directive,
    Structural2Component,
    Structural3Directive,
    Structural3Component,
    StorageComponent,
    SurroundDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TrackingService, OnlineService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
