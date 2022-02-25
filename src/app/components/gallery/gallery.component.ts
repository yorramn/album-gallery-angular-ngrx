import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Gallery } from 'src/app/models/gallery.model';
import { GalleryService } from 'src/app/services/gallery.service';
import { uniqueAlbumsId } from 'src/app/store/gallery.selectors';
import {retrievedGallery} from '../../store/gallery.actions'
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public albums_id$ = this.store.pipe(select(uniqueAlbumsId))
  constructor(
    private galleryService: GalleryService,
    private store: Store<{gallery : Gallery[]}>
    ) {}

  ngOnInit(): void {
    this.galleryService.loadGallery()
      .subscribe(
        (data) => {
            this.store.dispatch(retrievedGallery({allGallery : data as Gallery[]}))
        }
      );
  }

}
