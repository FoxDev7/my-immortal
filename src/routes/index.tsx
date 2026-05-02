import { createFileRoute } from "@tanstack/react-router";
import { Separator } from "#/components/ui/separator";

export const Route = createFileRoute("/")({ component: Home });

const contactInfo = [
	{
		label: "TEL",
		content: "0132 0232 00232",
	},
	{
		label: "ADDRESS",
		content: "Street 11. Place",
	},
	{
		label: "OPENING HOUR",
		content: "09:00 ~ 17:00",
	},
];

function Home() {
	return (
		<div className="grow w-full h-full">
			<section className="w-full h-[calc(100svh-var(--header-h))]">
				<img src="/hero.jpg" alt="Hero" className="h-full object-cover" />
			</section>

			{/*	Introduction section */}
			<section className="w-[calc(100%-var(--space-hor)*2)] flex flex-col gap-15 my-(--space-vrt) mx-auto">
				{/* Headline */}
				<div>
					<h1 className="flex">
						<span>Änderungsschneiderei</span>
					</h1>
				</div>

				{/* Introduction */}
				<div className="overflow-hidden my-auto -mx-(--space-hor)">
					<img
						src="/introduction.jpg"
						alt="Introduction"
						className="w-full max-h-66 object-cover"
					/>
				</div>
				<div className="max-w-2xl mx-auto my-auto">
					<p>
						Professionelle Reparaturen und Änderungen für Ihre
						Lieblingskleidung. Von Saum bis Reißverschluss - wir sorgen für
						perfekte Passform und verlängern die Lebensdauer Ihrer Garderobe.
					</p>
				</div>
				<div className="flex justify-center gap-10">
					<a href="/" className="flex items-center font-bold text-lg">
						<span>Visit the shop</span>
					</a>
				</div>

				<div className="overflow-hidden my-auto -mx-(--space-hor)">
					<img
						src="/img1.jpg"
						alt="Introduction"
						className="w-full max-h-66 object-cover"
					/>
				</div>
			</section>

			{/* Contact Info */}
			<section className="w-[calc(100%-var(--space-hor)*2)] flex flex-col gap-15 my-(--space-vrt) mx-auto">
				<div>
					<h2 className="flex flex-col items-center text-3xl">Contact</h2>
				</div>
				<Separator />

				<div className="flex flex-col gap-4">
					{contactInfo.map((c) => (
						<div key={c.label}>
							<dl className="flex justify-between">
								<dt>{c.label}</dt>
								<dd>{c.content}</dd>
							</dl>
							<Separator />
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
