import React from 'react';

import List from './List';
import Add from './Add';
import Edit from './Edit';


export const ListClient = () => <List />;

export const AddClient = () => <Add />;

export const EditClient = ({ match }) => <Edit id={match.params.id}/>;
