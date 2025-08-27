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
		link: 'https://www.facebook.com/profile.php?id=61570658193632',
		icon: 'fb-icon'
	},
	{
		name: 'instagram',
		link: 'https://www.instagram.com/intelexialabs/',
		icon: 'instagram-icon'
	},
	{
		name: 'tiktok',
		link: 'https://www.tiktok.com/@intelexialabs/',
		icon: 'tiktok-icon'
	},
	{
		name: 'linkedin',
		link: 'https://www.linkedin.com/company/intelexia-labs/',
		icon: 'linkedin-icon'
	}
]
