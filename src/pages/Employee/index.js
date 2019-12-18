import React from 'react';

import List from './List';
import Add from './Add';
import Edit from './Edit';


export const ListEmployee = () => <List />;

export const AddEmployee = () => <Add />;

export const EditEmployee = ({ match }) => <Edit id={match.params.id} />;
