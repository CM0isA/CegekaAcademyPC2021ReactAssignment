import React, { useState, useEffect, useContext} from "react";
import { Route, Switch } from "react-router";
import { PhotoModel } from "../../models/PhotoModel";
import AlbumList from "../Album/AlbumList";
import * as api from "../../api"
import { PhotoList } from "../Photo";
import { AlbumsContext } from "../../contexts/AlbumContext";

const Main = () => {
    
    const [photos, setPhotos] = useState<PhotoModel[]>([]);
    const {albums, editAlbum, createAlbum, deleteAlbum} = useContext(AlbumsContext)
    
    
    useEffect(() =>{
        const localPhotos = localStorage.getItem('photos')

        if(localPhotos){
            
            setPhotos(JSON.parse(localPhotos));
        }
        else{
            
            const photosResponse = api.getPhotos();
            
            setPhotos(photosResponse);
           
        }
    },[])


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