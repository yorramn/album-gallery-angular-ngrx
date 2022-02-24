import { createReducer, on } from "@ngrx/store";
import { Gallery } from "../models/gallery.model";
import { retrievedGallery } from "./gallery.actions";

export const initialState : Gallery[] = [];

const _galleryReducer = createReducer(initialState,
    on(retrievedGallery, (state, {allGallery})=> {
        return [{...allGallery}];
    })
);
export function galleryReducer(state: any, actions : any){
    return _galleryReducer(state, actions);
}