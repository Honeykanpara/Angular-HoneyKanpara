import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ConvertNumberFilterPipe } from "./convertNumberFilter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ConvertNumberFilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ConvertNumberFilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
