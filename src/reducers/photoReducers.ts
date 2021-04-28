import { PhotoActionTypes } from "../actions/photoActionTypes";
import { PhotoModel } from "../models/PhotoModel";


export const PhotoReducer = (prevState: any, action: any) => {
    switch (action.type) {
        case PhotoActionTypes.CREATE_PHOTO: {
            const timestamp = Date.now();
            const photo = action.photo;
            photo.id = `photo-${timestamp}`
            return [
                ...prevState,
                photo
            ];
        }
        case PhotoActionTypes.EDIT_PHOTO: {
            const updatePhotos = prevState.filter((photo: PhotoModel) => photo.id === action.key ? action.updatePhotos : photo)
            return [
                ...updatePhotos
            ];
        }
        case PhotoActionTypes.DELETE_PHOTO: {
            const updatePhotos = prevState.filter((photo: PhotoModel) => photo.id !== action.key)
            return [
                ...updatePhotos
            ];
        }
    }
} 