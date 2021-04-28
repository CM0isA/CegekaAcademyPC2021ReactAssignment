import * as actionTypes from './albumActionTypes'
import { AlbumModel } from "../models/AlbumModel";

export const createAlbum = (album: AlbumModel) => {
    const key  = `album $(Date.mow())`;
    return {
        type: actionTypes.AlbumActionTypes.CREATE_ALBUM,
        album,
        key
    }
}

export const editAlbum = (key: string, updatedAlbum: AlbumModel) => {
        type: actionTypes.AlbumActionTypes.EDIT_ALBUM,
        key,
        updatedAlbum
}

export const deleteAlbum = (key: string) => {
    type: actionTypes.AlbumActionTypes.DELETE_ALBUM,
    key
}