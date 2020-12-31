import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const {active} = useSelector( state => state.note );

    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(startSaveNote(active));
    }

    const handleClickPicture = () => {
        document.querySelector('#selectorFile').click();

    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file){
            dispatch(startUploading(file))
        }
    }   

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <input 
                id='selectorFile'
                type='file'
                name='file'
                style={{display: 'none'}}
                onChange={handleFileChange}
            />

            <div>
                <button 
                    className="btn"
                    onClick={handleClickPicture}
                >
                    Picture
                </button>

                <button className="btn" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
