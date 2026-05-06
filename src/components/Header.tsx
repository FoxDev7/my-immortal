import MobileNav from "./mobile-nav";

export default function Header() {
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

	return (
		<>
			{/* Desktop Nav */}
			<header className="hidden md:flex flex-col items-center justify-between fixed right-0 w-52 h-svh gap-5 z-3 px-5 pt-25 pb-13 transition-[background-color] duration-300">
				{/* Burger button */}
				{/* <div className="flex flex-col justify-center w-14">
					<div className="w-full h-3.5 relative">
						<span className="block absolute left-0 w-full h-px bg-black top-0"></span>
						<span className="block absolute left-0 w-full h-px bg-black top-1/2"></span>
						<span className="block absolute left-0 w-full h-px bg-black bottom-0"></span>
					</div>
				</div> */}
				<MobileNav />

				{/* Logo */}
				<div>
					<a href="/" className="flex flex-col items-center">
						{/*<svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-bird-icon lucide-bird"
            >
              <title>Bird</title>
              <path d="M16 7h.01" />
              <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
              <path d="m20 7 2 .5-2 .5" />
              <path d="M10 18v3" />
              <path d="M14 17.75V21" />
              <path d="M7 18a6 6 0 0 0 3.84-10.61" />
            </svg>*/}
						<span className="text-xl font-bold">LAN NGUYEN</span>
					</a>
				</div>

				<ul className="flex gap-x-2.5 gap-y-5 text-xs">
					{sns.map((item) => (
						<li key={item.label}>
							<a href={item.href} target="_blank">
								<img
									src={item.iconSource}
									alt={item.label}
									width={24}
									height={24}
								/>
								{/* Hide this on mobile nav  */}
								{/* <span>{item.label}</span> */}
							</a>
						</li>
					))}
				</ul>
			</header>

			{/* Mobile Nav */}
			<header className="flex md:hidden items-start w-full sticky top-0 justify-between gap-5 z-3 h-32 left-0 px-8 py-8 bg-background">
				{/* Burger button */}
				{/* <div className="flex flex-col justify-center w-14">
					<div className="w-full h-3.5 relative">
						<span className="block absolute left-0 w-full h-px bg-black top-0"></span>
						<span className="block absolute left-0 w-full h-px bg-black top-1/2"></span>
						<span className="block absolute left-0 w-full h-px bg-black bottom-0"></span>
					</div>
				</div> */}

				<MobileNav />

				<div>
					{/* Logo */}
					<a href="/" className="flex flex-col items-center">
						{/*<svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-bird-icon lucide-bird"
            >
              <title>Bird</title>
              <path d="M16 7h.01" />
              <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
              <path d="m20 7 2 .5-2 .5" />
              <path d="M10 18v3" />
              <path d="M14 17.75V21" />
              <path d="M7 18a6 6 0 0 0 3.84-10.61" />
            </svg>*/}
						<span className="font-bold">LAN NGUYEN</span>
					</a>
				</div>

				<ul className="flex gap-x-4 gap-y-5 text-xs">
					{sns.map((item) => (
						<li key={item.label}>
							<a href={item.href} target="_blank">
								<img
									src={item.iconSource}
									alt={item.label}
									width={20}
									height={20}
								/>
							</a>
						</li>
					))}
				</ul>
			</header>
		</>
	);
}
