import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {firebase} from '../firebase/firebase-config';   

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checkin, setCheckin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged( async (user) => {
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                dispatch(startLoadingNotes(user.uid))
            }else{
                setIsLoggedIn(false)
            }

            setCheckin(false)
        })
    }, [dispatch, setCheckin, setIsLoggedIn])

    if(checkin){
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRoutes 
                        exact
                        path="/"
                        component={ JournalScreen }
                        isAuthenticated={isLoggedIn}
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
