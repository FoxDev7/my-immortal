export default function Header() {
	const navItems = [
		{
			id: 1,
			name: "Home",
			link: "/",
		},
		{
			id: 2,
			name: "About",
			link: "/",
		},
	];

	const sns = [
		{
			label: "Instagram",
			href: "https://www.instagram.com",
		},
		{
			label: "Facebook",
			href: "https://www.facebook.com",
		},
	];

	return (
		<header>
			<div>
				{/* Logo */}
				<a href="/">
					<span>LAN NGUYEN</span>
				</a>
			</div>

			<ul></ul>
		</header>
	);
}
