import React from 'react';

import List from './List';
import Add from './Add';
import Edit from './Edit';


export const ListScripting = ({ history }) => <List history={history} />;

export const AddScripting = ({ history }) => <Add history={history} />;

export const EditScripting = ({ history, match }) => (
    <Edit 
        history={history} 
        id={match.params.id}
    />
);
