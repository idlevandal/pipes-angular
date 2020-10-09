import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EnumPipe } from './pipes/enumAsString.pipe';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { OrdinalSuffixPipe } from './ordinal-suffix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EnumPipe,
    EllipsisPipe,
    OrdinalSuffixPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
