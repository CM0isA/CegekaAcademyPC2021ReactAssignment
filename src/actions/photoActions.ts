import * as actionTypes from './photoActionTypes'

import { PhotoModel } from '../models/PhotoModel';

export const createPhoto = (photo: PhotoModel) => {
    const key  = `photo-$(Date.mow())`;
    return {
        type: actionTypes.PhotoActionTypes.CREATE_PHOTO,
        photo,
        key
    }
}

export const editPhoto = (key: string, updatedPhoto: PhotoModel) => {
        type: actionTypes.PhotoActionTypes.EDIT_PHOTO,
        key,
        updatedPhoto
}

export const deletePhoto = (key: string) => {
    type: actionTypes.PhotoActionTypes.DELETE_PHOTO,
    key
}