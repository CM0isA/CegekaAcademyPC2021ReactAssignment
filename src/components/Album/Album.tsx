import { Card } from "semantic-ui-react"
import { AlbumModel } from "../../models/AlbumModel"
import { PhotoModel } from "../../models/PhotoModel"
import { WithLightbox } from "../Common"

interface AlbumProps {
    album : AlbumModel;
    albumPhotos: PhotoModel[];
}


const Album: React.FC<AlbumProps> = ({album, albumPhotos, children}) =>{



    return (
        <Card className='album'>
            
            
        </Card>
    )
}

export default Album