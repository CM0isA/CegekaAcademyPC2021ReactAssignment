import React from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import { AlbumModel } from "../../models/AlbumModel"
import { PhotoModel } from "../../models/PhotoModel";
import { DeleteButton, WithLightbox } from "../Common";
import { StatusBar } from "../StatusBar";
import Album from "./Album";
import AlbumForm from "./AlbumForm";

interface AlbumListProps {
    albums : AlbumModel[];
    photos : PhotoModel[];
    deleteAlbum: (index: string) => void;
    editAlbum: Function;
    createAlbum: Function;
}


const AlbumList = ({ albums, photos, createAlbum, editAlbum, deleteAlbum}: AlbumListProps) =>
{
    const getAlbumPhotos = (album: AlbumModel) => {
        return photos
        .filter(photo => album.photosIds.includes(photo.id));
            
    }

    const renderAlbums = () => {
        return (
            albums 
            .map(album => {
                const albumPhotos = getAlbumPhotos(album);
            

            return (
                <Album
                    key = {album.id}
                    album = {album}
                    albumPhotos = {albumPhotos}
                >
                    <Button icon>
                        <WithLightbox  
                        photos = {albumPhotos}
                        >
                        <Icon name ='play' />
                        </WithLightbox>
                    </Button>
                    <AlbumForm
                    formType = 'Edit'
                    index = {album.id}
                    albumProp = {album}
                    photos = {photos}
                    editAlbum = {editAlbum}
                    createAlbum = {createAlbum}
                    />
                <DeleteButton
                index = {album.id}
                objectName = {album.name}
                deleteObject = {deleteAlbum}
                />
                </Album>
            )

        })
        );
    }
    return (
        <div>
            <StatusBar title={`${photos.length} Album(s) total`}>
                <AlbumForm 
                formType='New'
                createAlbum={createAlbum}
                photos = {photos}
                index={''}
                editAlbum={editAlbum}
                />
            </StatusBar>
            <Card.Group itemsPerRow={4} doubling>
                {renderAlbums()}
            </Card.Group>
        </div>
    )
}

export default AlbumList