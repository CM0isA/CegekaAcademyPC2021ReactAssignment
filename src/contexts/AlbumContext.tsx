import { AlbumModel } from "../models/AlbumModel";
import * as api from "../api"
import { createContext, useEffect, useReducer } from "react";
import { AlbumReducer} from "../reducers/albumReducers"
import { AlbumActionTypes } from "../actions/albumActionTypes";

let dispatcher = {
    createAlbum: (album: AlbumModel) => {},

    editAlbum: (key:string, updatedAlbum: AlbumModel) => {},

    deleteAlbum: (key: string) => {},
};

export const loadState = () => {
    const localAlbums = localStorage.getItem('albums');
    if(localAlbums) {
        return JSON.parse(localAlbums);
    }
    return api.getAlbums();
};

export const AlbumsContextProvider: React.FC = ({ children}) => {
    const [albums, dispatch] = useReducer(AlbumReducer, loadState());

    useEffect(() => {
        localStorage.setItem( 'albums', JSON.stringify(albums))
        
    }, [albums]);

    
    dispatcher = {
        createAlbum : (album: AlbumModel) => {
            dispatch({
                type: AlbumActionTypes.CREATE_ALBUM,
                album: album,
            });    
            },
    
        editAlbum : (key: string, updatedAlbum: AlbumModel) => {
            dispatch({
                type: AlbumActionTypes.EDIT_ALBUM,
                updatedAlbum: updatedAlbum,
                key: key
            });
        },

        deleteAlbum : (key: string) => {
            dispatch({
                type: AlbumActionTypes.DELETE_ALBUM,
                key: key
            });
        },
    };

    const albumsContext = {
        albums,
        ...dispatcher,
    };

    return <AlbumsContext.Provider value={albumsContext}>{children}</AlbumsContext.Provider>     

}

export const AlbumsContext = createContext({
    albums: loadState(),
    ...dispatcher,
});
