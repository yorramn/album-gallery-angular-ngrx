import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { galleryReducer } from './store/gallery.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({gallery : galleryReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
