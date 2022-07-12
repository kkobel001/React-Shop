import React from 'react';
import { BrowserRouter } from 'react-router-dom';

type childrenBrowser = {
    children: JSX.Element | JSX.Element[];
}

const BrowserRouterTemplates = ({ children }: childrenBrowser) => (
    { children }
)

export default BrowserRouterTemplates;