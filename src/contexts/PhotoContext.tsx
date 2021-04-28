
import * as api from "../api"
import { createContext, useEffect, useReducer } from "react";
import { PhotoReducer } from "../reducers/photoReducers";
import { PhotoActionTypes } from "../actions/photoActionTypes";
import { PhotoModel } from "../models/PhotoModel";

let dispatcher = {
    createPhoto: (album: PhotoModel) => {},

    editPhoto: (key:string, updatedPhoto: PhotoModel) => {},

    deletePhoto: (key: string) => {},
};

export const loadState = () => {
    const localPhotos = localStorage.getItem('photos');
    if(localPhotos) {
        return JSON.parse(localPhotos);
    }
    return api.getPhotos();
};

export const PhotoContextProvider: React.FC = ({ children}) => {
    const [photos, dispatch] = useReducer(PhotoReducer, loadState());

    useEffect(() => {
        localStorage.setItem( 'albums', JSON.stringify(photos))
        
    }, [photos]);

    
    dispatcher = {
        createPhoto : (photo: PhotoModel) => {
            dispatch({
                type: PhotoActionTypes.CREATE_PHOTO,
                photo: photo,
            });    
            },
    
        editPhoto : (key: string, updatedPhoto: PhotoModel) => {
            dispatch({
                type: PhotoActionTypes.EDIT_PHOTO,
                updatedPhoto: updatedPhoto,
                key: key
            });
        },

        deletePhoto : (key: string) => {
            dispatch({
                type: PhotoActionTypes.DELETE_PHOTO,
                key: key
            });
        },
    };

    const photoContext = {
        photos,
        ...dispatcher,
    };

    return <PhotoContext.Provider value={photoContext}>{children}</PhotoContext.Provider>     

}

export const PhotoContext = createContext({
    photos: loadState(),
    ...dispatcher,
});
