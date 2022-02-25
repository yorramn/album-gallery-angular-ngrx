import { createSelector } from "@ngrx/store";
import { Gallery } from "../models/gallery.model";
import { AppState } from "./app.state";

export const galleryRootSelector = (state: AppState) => state.gallery;
export const uniqueAlbumsId = createSelector(
    galleryRootSelector,
    (gallery : Gallery[]) => {
        return [... new Set(gallery.map(_ => _.albumId))];
    }
)
export const galleryByAlbumId = (id: number) => createSelector(
    galleryRootSelector,
    (gallery : Gallery[]) => {
        if(id === -1){
            return gallery
        }
        return gallery.filter((_) => _.albumId == id)
    }
)