import React from 'react';

import List from './List';
import Add from './Add';
import Edit from './Edit';


export const ListLocalization = () => <List />;

export const AddLocalization = () => <Add />;

export const EditLocalization = ({ match }) => <Edit id={match.params.id} />;
