import React, { useState, useEffect} from "react";
import { Route, Switch } from "react-router";
import { AlbumModel } from "../../models/AlbumModel"
import { PhotoModel } from "../../models/PhotoModel";
import AlbumList from "../Album/AlbumList";
import * as api from "../../api"
import { PhotoList } from "../Photo";

const Main = () => {
    const [albums, setAlbums] = useState<AlbumModel[]>([]);
    const [photos, setPhotos] = useState<PhotoModel[]>([]);

    useEffect(() =>{
        const localAlbums = localStorage.getItem('albums')
        const localPhotos = localStorage.getItem('photos')

        if(localAlbums && localPhotos){
            setAlbums(JSON.parse(localAlbums));
            setPhotos(JSON.parse(localPhotos));
        }
        else{
            const albumsResponse = api.getAlbums();
            const photosResponse = api.getPhotos();
            setAlbums(albumsResponse);
            setPhotos(photosResponse);
           
        }
    },[])

    useEffect(() =>{
        localStorage.setItem('albums', JSON.stringify(albums))
    },[albums])

    useEffect(() =>{
        localStorage.setItem('photos', JSON.stringify(photos))
    },[photos])


    const createPhoto = () => {

    }

    const editPhoto = () => {

    }

    const deletePhoto = () => {

    }

    const createAlbum = () => {

    }

    const editAlbum = () => {

    }

    const deleteAlbum = () => {

    }


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