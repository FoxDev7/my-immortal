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
      <header className="hidden md:flex flex-col items-center justify-between w-52 h-svh gap-5 z-3 px-5 pt-25 pb-13 transition-[background-color] duration-300">
        {/* Burger button */}
        <div className="flex flex-col justify-center w-14">
          <div className="w-full h-3.5 relative">
            <span className="block absolute left-0 w-full h-px bg-black top-0"></span>
            <span className="block absolute left-0 w-full h-px bg-black top-1/2"></span>
            <span className="block absolute left-0 w-full h-px bg-black bottom-0"></span>
          </div>
        </div>

        {/* Logo */}
        <div>
          <a href="/">
            <span>LAN NGUYEN</span>
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
      <header className="flex md:hidden items-start w-full sticky top-0 justify-between gap-5 z-3 h-32 left-0 px-8 py-8 transition-[background-color] duration-300">
        {/* Burger button */}
        <div className="flex flex-col justify-center w-14">
          <div className="w-full h-3.5 relative">
            <span className="block absolute left-0 w-full h-px bg-black top-0"></span>
            <span className="block absolute left-0 w-full h-px bg-black top-1/2"></span>
            <span className="block absolute left-0 w-full h-px bg-black bottom-0"></span>
          </div>
        </div>

        <div>
          {/* Logo */}
          <a href="/">
            <span>LAN NGUYEN</span>
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
    </>
  );
}
