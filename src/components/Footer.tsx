import { Separator } from "./ui/separator";

const footerLinks = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "About",
		href: "/",
	},
	{
		label: "Contact",
		href: "/",
	},
];

const sns = [
	{
		label: "Instagram",
		href: "https://www.instagram.com",
		iconSource: "https://thesvg.org/icons/instagram/mono.svg",
	},
	{
		label: "Facebook",
		href: "https://www.facebook.com",
		iconSource: "https://thesvg.org/icons/facebook/mono.svg",
	},
];

export default function Footer() {
	return (
		<footer>
			<div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8">
				<a href="/">
					<span>LAN NGUYEN</span>
				</a>

				<div className="flex items-center gap-5 whitespace-nowrap">
					{footerLinks.map((f) => (
						<a
							href={f.href}
							key={f.label}
							className="opacity-80 transition-opacity duration-300 hover:opacity-100"
						>
							{f.label}
						</a>
					))}
				</div>

				{/* Social Media */}
				<div className="flex items-center gap-4">
					{sns.map((s) => (
						<a href={s.href} key={s.label}>
							<img src={s.iconSource} alt={s.label} width={24} height={24} />
						</a>
					))}
				</div>
			</div>

			<Separator />

			<div className="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6">
				<p className="text-center font-medium text-balance">
					{`${new Date().getFullYear()}`}{" "}
					<a href="/" className="hover:underline">
						Lan Nguyen
					</a>
				</p>
			</div>
		</footer>
	);
}
