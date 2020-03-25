import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorWidgetComponent } from './calculator-widget/calculator-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
