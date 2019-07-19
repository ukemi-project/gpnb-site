import React from 'react';
import { NavbarBrand } from 'reactstrap';

const Logo = () => {
	return (
		<div className='navbar-header'>
			<NavbarBrand href='/'>
				<div className='brand-logo'>
					<img className='img-fluid' src='/static/img/gpnb-logo-sm.png' alt='App Logo' />
				</div>
				{/* <div className='brand-logo-collapsed'>
    <img className='img-fluid' src='/static/img/logo-single.png' alt='App Logo' />
  </div> */}
			</NavbarBrand>
		</div>
	);
};

export default Logo;
