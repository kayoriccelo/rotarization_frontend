import React from 'react';

import List from './List';
import Add from './Add';
import Edit from './Edit';


export const ListLocalization = ({ history }) => <List history={history} />;

export const AddLocalization = ({ history }) => <Add history={history} />;

export const EditLocalization = ({ history, match }) => (
    <Edit 
        history={history} 
        id={match.params.id}
    />
);
