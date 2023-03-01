import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { StyleDirective } from './style.directive'
@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
