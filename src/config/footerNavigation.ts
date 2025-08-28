// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Other Brain.',
		aboutText:
			'Simplificamos la transformación digital mediante soluciones innovadoras y personalizadas. Con Other Brain, llevamos tu negocio al futuro con tecnología de vanguardia y un enfoque centrado en el cliente.',
		logo: {
			src: '/logo.svg',
			alt: 'Other Brain.',
			text: 'Other Brain.'
		}
	},
	footerColumns: [
		{
			category: 'Navegación',
			subCategories: [
				{
					subCategory: 'Inicio',
					subCategoryLink: '/'
				},
				{
					subCategory: 'Servicios',
					subCategoryLink: '#features'
				},
				{
					subCategory: 'Sobre Nosotro',
					subCategoryLink: '#aboutus'
				},
				{
					subCategory: 'Contacto',
					subCategoryLink: '#contact'
				}
			]
		},
		// {
		// 	category: 'About us',
		// 	subCategories: [
		// 		{
		// 			subCategory: 'About us',
		// 			subCategoryLink: '/'
		// 		},
		// 		{
		// 			subCategory: 'News',
		// 			subCategoryLink: '/blog'
		// 		},
		// 		{
		// 			subCategory: 'Careers',
		// 			subCategoryLink: '/blog'
		// 		}
		// 	]
		// },
		// {
		// 	category: 'Contactanos',
		// 	subCategories: [
		// 		{
		// 			subCategory: 'Contact',
		// 			subCategoryLink: '/contact'
		// 		},
		// 		{
		// 			subCategory: 'Support',
		// 			subCategoryLink: '/contact'
		// 		},
		// 		{
		// 			subCategory: 'Join us',
		// 			subCategoryLink: '/contact'
		// 		}
		// 	]
		// }
	],
	subFooter: {
		copywriteText: '© Other Brain 2025.'
	}
}
