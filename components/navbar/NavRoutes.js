const NavRoutes = [
	{
		name: 'Home',
		icon: 'icon-speedometer',
		path: '/',
		as: '/home'
	},
	{
		name: 'Assets',
		icon: 'icon-basket-loaded',
		submenu: [
			{
				name: 'Orders',
				path: '/ecommerce/orders',
				label: { value: 10, color: 'success' }
			},
			{
				name: 'Order-view',
				path: '/ecommerce/orderview'
			},
			{
				name: 'Products',
				path: '/ecommerce/products'
			},
			{
				name: 'Product-view',
				path: '/ecommerce/productview'
			},
			{
				name: 'Checkout',
				path: '/ecommerce/checkout'
			}
		]
	},
	{
		name: 'Forum',
		icon: 'icon-speedometer',
		path: '/forum',
		as: '/forum'
	},
	{
		name: 'Help',
		icon: 'icon-speech',
		path: '/help/faq',
		as: '/help'
	}
];

export default NavRoutes;
