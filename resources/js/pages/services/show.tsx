import { CtaLink } from '@/components/site/cta';
import { PageHero } from '@/components/site/section-heading';
import { services } from '@/data/site';
import { SiteLayout } from '@/layouts/site-layout';
import { usePage } from '@inertiajs/react';

export default function ServiceShow() {
    const { slug } = usePage<{ slug: string }>().props;
    const service = services.find((s) => s.slug === slug) ?? services[0];

    return (
        <SiteLayout title={service.name}>
            <PageHero eyebrow="Service" title={service.name} description={service.short} />

            <section className="section-pad">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
                    <div className="aspect-[4/5] overflow-hidden rounded-sm">
                        <img
                            src={service.image}
                            alt={service.name}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="font-serif-body text-lg leading-relaxed text-[var(--color-cream-muted)]">
                            {service.description}
                        </p>
                        <h2 className="mt-10 font-display text-2xl text-[var(--color-cream)]">
                            What you can expect
                        </h2>
                        <ul className="mt-4 space-y-3">
                            {service.benefits.map((b) => (
                                <li
                                    key={b}
                                    className="border-t border-[var(--color-cream)]/10 pt-3 text-[var(--color-cream)]"
                                >
                                    {b}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10 flex flex-wrap gap-3">
                            <CtaLink href="/contact">Discuss Your Wedding</CtaLink>
                            <CtaLink href="/packages" variant="secondary">
                                Explore Packages
                            </CtaLink>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
