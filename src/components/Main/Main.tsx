import React, { useContext} from "react";
import { Route, Switch } from "react-router";
import AlbumList from "../Album/AlbumList";
import { PhotoList } from "../Photo";
import { AlbumsContext } from "../../contexts/AlbumContext";
import { PhotoContext } from "../../contexts/PhotoContext";

const Main = () => {
    
    const {photos, editPhoto, createPhoto, deletePhoto} = useContext(PhotoContext)
    const {albums, editAlbum, createAlbum, deleteAlbum} = useContext(AlbumsContext)
    

    const albumList = () => <AlbumList
                            albums = {albums}
                            photos = {photos}
                            createAlbum = {createAlbum}
                            editAlbum = {editAlbum}
                            deleteAlbum = {deleteAlbum}
                            />;

    

    const photoList = () => <PhotoList
                            photos = {photos}
                            createPhoto = {createPhoto}
                            editPhoto = {editPhoto}
                            deletePhoto = {deletePhoto}
                            />;


    return (
        <Switch>
            <Route exact path='/' component={albumList} />
            <Route path='/albums' render={albumList} />
            <Route path='/photos' render={photoList} />
        </Switch>
    )
}



export default Main