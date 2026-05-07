import { cn } from "#/lib/utils";

export default function HamburgerButton({ open, className }: { open: true | false; className?: string }) {
	return (
		<div className={cn(
			"relative flex h-8 w-10 items-center justify-center",
			className
		)}>
			<div className="relative w-full h-3.5">
				<span
					className={cn(
						"absolute left-0 block h-px w-full bg-foreground transition-all duration-100",
						open ? "top-[0.4rem] -rotate-45" : "top-0",
					)}
				/>
				<span
					className={cn(
						"absolute left-0 block h-px w-full bg-foreground transition-all duration-100",
						open ? "hidden" : "top-1/2",
					)}
				/>
				<span
					className={cn(
						"absolute left-0 block h-px w-full bg-foreground transition-all duration-100",
						open ? "top-[0.4rem] rotate-45" : "bottom-0",
					)}
				/>
			</div>
			{/* <span className="sr-only">Toggle Menu</span> */}
		</div>
	);
}
