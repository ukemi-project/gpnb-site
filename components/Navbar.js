import React, { useState } from 'react';
import Link from 'next/link';
import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	ListGroup,
	ListGroupItem,
	Nav,
	NavbarBrand,
	Navbar,
	Collapse,
	NavItem,
	NavLink,
	NavbarToggler
} from 'reactstrap';
import NavRoutes from './NavRoutes';

const itemType = ( item ) => {
	if ( item.heading ) {
		return 'heading';
	}

	if ( !item.submenu ) {
		return 'menu';
	}

	if ( item.submenu ) {
		return 'submenu';
	}
};

const NavbarComponent = () => {
	const [ navOpen, setNavOpen ] = useState( false ),
		[ searchOpen, setSearchOpen ] = useState( false );

	const toggle = () => setNavOpen( !navOpen );

	return (
		<Navbar light expand='md' className='top-nav'>
			<div className='navbar-header'>
				<NavbarBrand href='/'>
					<div className='brand-logo'>
						<img className='img-fluid' src='/static/img/gpnb-logo-sm.png' alt='App Logo' />
					</div>
					<div className='brand-logo-collapsed'>
						<img className='img-fluid' src='/static/img/logo-single.png' alt='App Logo' />
					</div>
				</NavbarBrand>
			</div>
			<NavbarToggler onClick={toggle} />
			<Collapse navbar isOpen={navOpen}>
				<Nav navbar className=''>
					{NavRoutes.map( ( item, i ) => {
						if ( itemType( item ) === 'menu' ) {
							return (
								<NavItem key={i}>
									<Link href={item.path}>
										<NavLink>{item.name}</NavLink>
									</Link>
								</NavItem>
							);
						}

						if ( itemType( item ) === 'submenu' ) {
							return (
								<UncontrolledDropdown key={i} nav inNavbar>
									<DropdownToggle nav>{item.name}</DropdownToggle>
									<DropdownMenu className='animated fadeIn'>
										{item.submenu.map( ( sitem, si ) => {
											return (
												<Link key={si} href={sitem.path}>
													<DropdownItem>{sitem.name}</DropdownItem>
												</Link>
											);
										} )}
									</DropdownMenu>
								</UncontrolledDropdown>
							);
						}
					} )}
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default NavbarComponent;
