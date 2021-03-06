import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { galleryReducer } from './store/gallery.reducers';

import {HttpClientModule} from '@angular/common/http'
import { GalleryService } from './services/gallery.service';
import { GalleryComponent } from './components/gallery/gallery.component';
import {FormsModule} from '@angular/forms';
import { EffectsModule } from '@ngrx/effects'
@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({gallery : galleryReducer}),
  ],
  providers: [
    GalleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
