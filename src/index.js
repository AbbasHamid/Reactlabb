import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList ';

import './style.css';

ReactDom.render(
	<div>
		<Header />
		<EmployeeList ial />
	</div>,
	document.getElementById('root')
);
