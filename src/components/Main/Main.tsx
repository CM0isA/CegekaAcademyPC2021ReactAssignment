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


    const createPhoto = (photo: PhotoModel) => {
        const timestamp = Date.now();
        photo.id = `photo-${timestamp}`
        setPhotos(prevPhotos => [...prevPhotos, photo]);

    }

    const editPhoto = (key: string, updatedPhoto: PhotoModel) => {
        const updatedPhotos = photos.map(photo => photo.id ===key ? updatedPhoto : photo)
        setPhotos(updatedPhotos)
    }

    const deletePhoto = (key: string) => {
        const updatedPhotos = photos.filter(photo => photo.id !== key)
        setPhotos(updatedPhotos);

    }

    const createAlbum = (album: AlbumModel) => {
        const timestamp = Date.now();
        album.id = `album-${timestamp}`
        setAlbums(prevAlbums => [...prevAlbums, album]);
    }

    const editAlbum = (key: string, updatedAlbum: AlbumModel) => {
        const updatedAlbums = albums.map(album => album.id === key ? updatedAlbum : album)
        setAlbums(updatedAlbums)

    }

    const deleteAlbum = (key: string) => {
        const updatedAlbums = albums.filter(album => album.id !==key)
        setAlbums(updatedAlbums);

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