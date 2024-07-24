import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { MyCardComponent } from './my-card/my-card.component';

bootstrapApplication(AppComponent);

@NgModule({
  imports: [BrowserModule , MyCardComponent],
  providers: [],
  bootstrap: []
})
export class AppModule { }

