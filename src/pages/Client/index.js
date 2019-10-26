import React from 'react';

import List from './List';
import Add from './Add';
import Edit from './Edit';


export const ListClient = ({ history }) => <List history={history} />;

export const AddClient = ({ history }) => <Add history={history} />;

export const EditClient = ({ history, match }) => (
    <Edit 
        history={history} 
        id={match.params.id}
    />
);
