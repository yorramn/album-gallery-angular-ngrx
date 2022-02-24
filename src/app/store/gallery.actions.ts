import { createAction, props } from "@ngrx/store";
import { Gallery } from "../models/gallery.model";

export const retrievedGallery = createAction(
    '[Gallery API] API Success',
    props<{allGallery : Gallery}>()
);