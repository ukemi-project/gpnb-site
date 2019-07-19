import React, { useState } from 'react';
import { Navbar, Collapse, NavbarToggler, Container } from 'reactstrap';
import Logo from '../components/navbar/Logo';
import NavLinks from '../components/navbar/NavLinks';
import NavControls from './../components/navbar/NavControls';

const NavbarComponent = () => {
	const [ navOpen, setNavOpen ] = useState( false ),
		toggle = () => setNavOpen( !navOpen );

	return (
		<Navbar light expand='sm' className='top-nav'>
			<Container className='container-md'>
				<Logo />
				<NavbarToggler onClick={toggle} />
				<Collapse navbar isOpen={navOpen}>
					<NavLinks />
					<NavControls />
				</Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComponent;
