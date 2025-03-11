import React from 'react';
import logo from '/resources/img/follas_logo.jpg';

const ApplicationLogo: React.FC<ApplicationLogoProps> = (props) => {
	console.log(logo)
	return (
		<img src="../../img/follas_logo.jpg" alt="follas_logo"/>
	);
};

export default ApplicationLogo;
