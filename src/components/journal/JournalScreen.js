import React from 'react';
import { Sidebar } from './Sidebar';
import {useSelector} from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';


export const JournalScreen = () => {

    const {active} = useSelector( state => state.note );

    return (
        <div className="journal__main-content animate__animated animate__fadeIn">
            
            <Sidebar />


            <main>
    
                {
                    (active)
                        ?(<NoteScreen />)
                        :(<NothingSelected />)
                }

            </main>


        </div>
    )
}
