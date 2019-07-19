import React from 'react';
import Link from 'next/link';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, NavItem, NavLink } from 'reactstrap';
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

const NavLinks = () => {
	return (
		<Nav navbar className='mr-auto flex-lg-row'>
			{NavRoutes.map( ( item, i ) => {
				if ( itemType( item ) === 'menu' ) {
					return (
						<NavItem key={i}>
							<NavLink href={item.path}>{item.name}</NavLink>
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
	);
};

export default NavLinks;
