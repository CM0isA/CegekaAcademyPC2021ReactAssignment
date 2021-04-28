import { Card, Icon, Label, Image, Button } from "semantic-ui-react"
import { AlbumModel } from "../../models/AlbumModel"
import { PhotoModel } from "../../models/PhotoModel"

interface AlbumProps {
    album : AlbumModel;
    albumPhotos: PhotoModel[];
}


const Album: React.FC<AlbumProps> = ({album, albumPhotos, children}) =>{

    const RenderPreviewImages = () => {
        return (
            albumPhotos
            .filter((photo, index) => photo && index <4)
            .map((photo, index) => {
                return <Image key = {index} src={photo.url} />
            })
        );
    }

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
            <Card.Content className='photo-container'>
                <Image.Group size ='tiny'>
                {RenderPreviewImages()}
                </Image.Group>
            </Card.Content>
            <Card.Content >
                <Card.Description as ='p'>
                    {album.description}
                </Card.Description>
                <Card.Meta>
                    <Label tag size ='mini'>
                        {renderTags()}
                    </Label>
                </Card.Meta>
            </Card.Content>
            <Button.Group >
                {children}
            </Button.Group>
        </Card>
    )
}

export default Album