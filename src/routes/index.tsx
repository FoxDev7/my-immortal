import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="grow w-full h-full">
			<main className="w-full h-[calc(100svh-128px)]">
				<img src="/hero.jpg" alt="Hero Image" className="h-full object-cover"/>
			</main>
		</div>
	);
}
