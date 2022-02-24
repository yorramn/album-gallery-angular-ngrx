import { createSelector } from "@ngrx/store";
import { Gallery } from "../models/gallery.model";
import { AppState } from "./app.state";

export const galleryRootSelector = (state: AppState) => state.gallery;
export const uniqueAlbumsId = createSelector(
    galleryRootSelector,
    (gallery : Gallery[]) => {
        return [... new Set(gallery.map(_ => _.album_id))];
    }
)