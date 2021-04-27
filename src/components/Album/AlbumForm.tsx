import React, {useState} from 'react'
import { AlbumModel} from '../../models/AlbumModel'
import { Modal, Form, Button, Icon, Message } from 'semantic-ui-react';

interface AlbumFormProps{
    formType: 'New' | 'Edit';
    index: string;
    albumProp?: AlbumModel;
    editAlbum: Function;
    createAlbum: Function;
}

const AlbumForm = (props: AlbumFormProps) =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isError, setIsError] = useState(false);
    const emptyAlbum: AlbumModel = {
        id: '',
        name: '',
        description: '',
        tags: [],
        photosIds: []
    }
}

export default AlbumForm