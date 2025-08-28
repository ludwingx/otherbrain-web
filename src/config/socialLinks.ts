// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
	name: string
	link: string
	icon: string
}

export const socialLinks: SocialLink[] = [
	{
		name: 'facebook',
		link: 'https://www.facebook.com/profile.php?id=61580122220796',
		icon: 'fb-icon'
	},
	{
		name: 'instagram',
		link: 'https://www.instagram.com/otherbrain.tech/',
		icon: 'instagram-icon'
	},
	{
		name: 'tiktok',
		link: 'https://www.tiktok.com/@otherbrain.tech/',
		icon: 'tiktok-icon'
	},
	{
		name: 'linkedin',
		link: 'https://www.linkedin.com/company/other-brain/',
		icon: 'linkedin-icon'
	}
]
