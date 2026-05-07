import { useState } from "react";
import { navItems } from "#/lib/config";
import { cn } from "#/lib/utils";
import HamburgerButton from "./hamburger-button";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function MobileNav({ className }: { className?: string }) {
	const [open, setOpen] = useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					className={cn(
						"extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 p-0! hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent aria-expanded:bg-transparent",
						className,
					)}
				>
					<HamburgerButton open={open} />
					{/*<span></span>*/}
				</Button>
			</PopoverTrigger>

			<PopoverContent
				className="no-scrollbar h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-y-auto rounded-none border-none bg-background p-0 shadow-none backdrop-blur duration-100 data-open:animate-none! ring-0"
				align="start"
				side="bottom"
				alignOffset={-16}
				sideOffset={50}
			>
				<div className="flex flex-col gap-12 overflow-auto px-6 py-6">
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-3">
							{navItems.map((item) => (
								<Button
									variant="ghost"
									className="mx-0 px-0 py-0 items-start justify-start font-normal"
									key={item.label}
									onClick={() => setOpen(false)}
								>
									<a href={`#${item.href}`} className="text-2xl">
										{item.label}
									</a>
								</Button>
							))}
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}

// TODO: Complete Mobile Nav.
