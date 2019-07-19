import React, { useState, useContext } from 'react';
import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	ListGroup,
	ListGroupItem,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import CurrentUser from '../CurrentUser';
import { UserContext } from '../../providers/UserProvider';

const NavControls = () => {
	const [ searchOpen, setSearchOpen ] = useState( false ),
		[ user ] = useContext( UserContext );

	const toggleNavSearch = () => setSearchOpen( !searchOpen );

	return (
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
	);
};

export default NavControls;
