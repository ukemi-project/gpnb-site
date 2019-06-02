import Link from 'next/link';
import React from 'react';
import moment from 'moment';
import { signOut } from '../firebase';

const CurrentUser = ( { displayName, photoURL, email, createdAt, children } ) => {
	return (
		<section className='CurrentUser'>
			<div className='CurrentUser--profile'>
				{photoURL && <img src={photoURL} alt={displayName} />}
				<div className='CurrentUser--information'>
					<Link to='profile'>
						<h2>{displayName}</h2>
					</Link>
					<p className='email'>{email}</p>
					<p className='created-at'>{moment( createdAt ).calendar()}</p>
				</div>
			</div>
			<div>
				<div>{children}</div>
				<button onClick={signOut}>Sign Out</button>
			</div>
		</section>
	);
};

CurrentUser.defaultProps = {
	displayName: 'Hideo Kojima',
	email: 'hideo@kojima.net',
	photoURL: 'https://i1.wp.com/nordicgame.com/wp-content/uploads/2016/03/hideo.kojima.final_.850.560.jpg',
	createdAt: new Date()
};

export default CurrentUser;
