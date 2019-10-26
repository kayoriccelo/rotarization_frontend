import React from 'react';

import List from './List';
import Add from './Add';
import Edit from './Edit';


export const ListEmployee = ({ history }) => <List history={history} />;

export const AddEmployee = ({ history }) => <Add history={history} />;

export const EditEmployee = ({ history, match }) => (
    <Edit 
        history={history} 
        id={match.params.id}
    />
);
