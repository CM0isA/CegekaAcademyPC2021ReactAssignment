import { Card, Icon, Label } from "semantic-ui-react"
import { AlbumModel } from "../../models/AlbumModel"
import { PhotoModel } from "../../models/PhotoModel"
import { WithLightbox } from "../Common"
import Photo from "../Photo"

interface AlbumProps {
    album : AlbumModel;
    albumPhotos: PhotoModel[];
}


const Album: React.FC<AlbumProps> = ({album, albumPhotos, children}) =>{

    // const RenderPreviewImages = () => {
    //     return (
    //         albumPhotos
    //         .filter((photo, index) => photo && index <4)
    //         .map((photo, index) => {
    //             return <Image key = {index} src={photo.url} />
    //         })
    //     );
    // }

    const renderTags = () => {
        return (
            album.tags
            .map((tagName, index) => {
                return <Label key={index}>{tagName}</Label>
            })
        )
    }


    return (
        <Card>
            <Card.Content className='header'>
                <Card.Header>
                    {album.name}
                </Card.Header>
                <Label attached = 'top right'>
                    <Icon name = 'photo' />
                    {albumPhotos.length}
                </Label>
            </Card.Content>
        </Card>
    )
}

export default Album