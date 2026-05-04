import { useState } from "react";
import { cn } from "#/lib/utils";
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
						"extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 p-0! hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
						className,
					)}
				>
					<div className="relative flex h-8 w-4 items-center justify-center">
						<div className="relative size-4">
							<span>{/* HERE! */}</span>
						</div>
					</div>
				</Button>
			</PopoverTrigger>
		</Popover>
	);
}

// TODO: Complete Mobile Nav.
