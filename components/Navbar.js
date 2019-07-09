import React, { useState, useContext } from 'react';
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
	NavbarToggler,
	Container
} from 'reactstrap';
import NavRoutes from './NavRoutes';
import CurrentUser from './CurrentUser';
import { UserContext } from '../providers/UserProvider';

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
		[ searchOpen, setSearchOpen ] = useState( false ),
		[ user ] = useContext( UserContext );

	const toggle = () => setNavOpen( !navOpen );
	const toggleNavSearch = () => setSearchOpen( !searchOpen );

	return (
		<Navbar light expand='sm' className='top-nav'>
			<Container className='container-md'>
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
				<NavbarToggler onClick={toggle} />
				<Collapse navbar isOpen={navOpen}>
					<Nav navbar className='mr-auto flex-lg-row'>
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
					<Nav navbar className='flex-row ml-auto'>
						<NavItem>
							<NavLink onClick={toggleNavSearch}>
								<em className='icon-magnifier' />
							</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar className='dropdown-list'>
							<DropdownToggle nav className='dropdown-toggle-nocaret'>
								<em className='icon-bell' />
								{/* TODO: Alerts */}
								{/* <span className='badge badge-danger'>11</span>  */}
							</DropdownToggle>
							<DropdownMenu right className='dropdown-menu-right animated flipInX'>
								<DropdownItem>
									<ListGroup>
										<ListGroupItem action tag='p'>
											No notifications
										</ListGroupItem>
									</ListGroup>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
						<UncontrolledDropdown nav inNavbar className='dropdown-list'>
							<DropdownToggle nav className='dropdown-toggle-nocaret'>
								<em className='icon-user' />
							</DropdownToggle>
							<DropdownMenu right className='dropdown-menu-right animated flipInX'>
								<DropdownItem>
									<ListGroup>
										<ListGroupItem tag='p'>
											<CurrentUser {...user} />
										</ListGroupItem>
									</ListGroup>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComponent;
