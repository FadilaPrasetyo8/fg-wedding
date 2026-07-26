import { CtaLink } from '@/components/site/cta';
import { PageHero } from '@/components/site/section-heading';
import { services } from '@/data/site';
import { SiteLayout } from '@/layouts/site-layout';

export default function ServicesIndex() {
    return (
        <SiteLayout title="Services">
            <PageHero
                eyebrow="Services"
                title="How FG Wedding supports your celebration"
                description="From full planning to day-of coordination — each service is designed for clarity and calm execution."
            />

            <section className="section-pad">
                <div className="mx-auto max-w-6xl space-y-20">
                    {services.map((s, i) => (
                        <article
                            key={s.slug}
                            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                        >
                            <div className="aspect-[16/11] overflow-hidden rounded-sm">
                                <img
                                    src={s.image}
                                    alt={s.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="eyebrow">Service</p>
                                <h2 className="mt-3 font-display text-3xl text-[var(--color-cream)] md:text-4xl">
                                    {s.name}
                                </h2>
                                <p className="mt-4 font-serif-body text-lg text-[var(--color-cream-muted)]">
                                    {s.description}
                                </p>
                                <ul className="mt-6 space-y-2 text-sm text-[var(--color-cream-muted)]">
                                    {s.benefits.map((b) => (
                                        <li key={b} className="flex gap-2">
                                            <span className="text-[var(--color-bronze)]">
                                                ✓
                                            </span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 flex flex-wrap gap-4">
                                    <CtaLink href={`/services/${s.slug}`}>
                                        Learn More
                                    </CtaLink>
                                    <CtaLink href="/contact" variant="ghost">
                                        Discuss Your Wedding →
                                    </CtaLink>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </SiteLayout>
    );
}
