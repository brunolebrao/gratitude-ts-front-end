import React, { createContext, useContext, useEffect } from 'react'
import {Router as RouterOriginal, withRouter, } from 'react-router-dom'
import {RouteComponentProps} from 'react-router'

import queryString from 'query-string'
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()

const RouterContext = createContext(null);
const RouterContextProvider = withRouter(({children, ...routerProps}) => {
  return (
    <RouterContext.Provider history={history} value={routerProps}>
      {children}  
    </RouterContext.Provider>
  )
})