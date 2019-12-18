import React from 'react';

import List from './List';
import Add from './Add';
import Edit from './Edit';


export const ListScripting = () => <List />;

export const AddScripting = () => <Add />;

export const EditScripting = ({ match }) => <Edit id={match.params.id} />;
