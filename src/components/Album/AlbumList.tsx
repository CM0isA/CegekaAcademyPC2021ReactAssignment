import { Card } from "semantic-ui-react";
import { AlbumModel } from "../../models/AlbumModel"
import { PhotoModel } from "../../models/PhotoModel";
import Album from "./Album";

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
                </Album>
            )

        })
        );
    }
    return (
        <div>
            <Card.Group itemsPerRow={4} doubling>
                {renderAlbums()}
            </Card.Group>
        </div>
    )
}

export default AlbumList