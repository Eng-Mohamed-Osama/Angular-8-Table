import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { TableconstructionComponent } from './componenets/tableconstruction/tableconstruction.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TableconstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
