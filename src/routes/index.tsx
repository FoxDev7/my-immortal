import { createFileRoute } from "@tanstack/react-router";
import { Separator } from "#/components/ui/separator";

// TODO: Make desktop layout

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
    <div className="w-full overflow-auto md:w-[calc(100svw-14rem)] h-full">
      {/* Hero section */}
      <section className="relative w-full h-[calc(100svh-var(--header-h))] md:h-svh">
        <div className="h-full md:w-full text-center">
          <img
            src="https://images.unsplash.com/photo-1502217625004-89c03571bcca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8dGFpbG9yfGVufDB8fHx8MTc3NzgyNTExMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="h-full object-cover md:w-full"
          />
          <div className="w-full absolute text-center top-1/2 left-1/2 -translate-x-1/2 break-normal z-2 lg:w-5xl tracking-normal px-7">
            {/*<h1 className="inset-x-0 text-4xl text-primary-foreground text-center">
              Änderungsschneiderei
            </h1>*/}
            <p className="text-center break-normal text-primary-foreground text-[27px] md:text-[45px] lg:leading-16 font-extralight font-playfair tracking-wider">
              Änderungsschneiderei. Fachgerechte Schneiderei und
              Reparaturdienste, die Ihren Lieblingsstücken neues Leben
              einhauchen.
            </p>
          </div>
        </div>

        {/* Dark shadow */}
        <div className="absolute top-0 left-0 bg-dark-shadow h-full w-full opacity-45"></div>
      </section>

      {/*	Introduction section */}
      <section className="w-[calc(100%-var(--space-hor)*2)] flex flex-col gap-15 my-(--space-vrt) mx-auto md:max-w-full">
        {/* Headline */}
        {/*<div>
          <h1 className="flex text-2xl md:text-3xl">Änderungsschneiderei</h1>
        </div>*/}

        {/* Introduction */}
        <div className="flex flex-col gap-15 md:gap-25 md:flex-row-reverse md:mx-auto">
          <div className="max-w-2xl mx-auto my-auto md:my-4 text-2xl md:text-3xl lg:text-4xl font-playfair px-3 md:w-1/2">
            <p>
              Professionelle Reparaturen und Änderungen für Ihre
              Lieblingskleidung. Von Saum bis Reißverschluss - wir sorgen für
              perfekte Passform und verlängern die Lebensdauer Ihrer Garderobe.
            </p>
          </div>
          <div className="overflow-hidden my-auto -mx-(--space-hor) md:w-1/2 md:flex md:justify-center">
            <img
              src="https://images.unsplash.com/photo-1619909490011-5e4b5b6b8547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MzF8fHRhaWxvcnxlbnwwfHx8fDE3Nzc4MjYwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Introduction"
              className="w-full max-h-66 md:max-h-full md:w-5/6 object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center gap-10">
          <a href="/" className="flex items-center font-bold text-lg">
            <span>Visit the shop</span>
          </a>
        </div>

        <div className="overflow-hidden my-auto md:my-(--space-vrt) -mx-(--space-hor)">
          <img
            src="https://storage.stock.studio.design/optimized/RP-9cUYsqrbzmlXOWMZY2.webp"
            alt="Introduction"
            className="w-full max-h-66 md:max-h-160 object-cover"
          />
        </div>
      </section>

      {/* Contact Info */}
      <section className="w-[calc(100%-var(--space-hor)*2)] flex flex-col gap-15 my-(--space-vrt) mx-auto">
        <div>
          <h2 className="flex flex-col items-center text-3xl">Contact</h2>
        </div>
        <Separator />

        <div className="flex flex-col gap-4 md:mx-auto   md:w-lg">
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
