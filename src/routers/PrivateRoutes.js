import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';


export const PrivateRoutes = ({
   isAuthenticated,
   component: Component,
   ...rest
}) => {
   return (
      <Route
         component={(props) => (
            (isAuthenticated)
               ? (<Component {...props} />)
               : (<Redirect to='/auth/login' />)
         )}         
      />
   )
}


PrivateRoutes.propTypes = {
   isAuthenticated: PropTypes.bool.isRequired,
   component: PropTypes.func.isRequired
}