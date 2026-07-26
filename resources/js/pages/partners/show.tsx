import { CtaLink } from '@/components/site/cta';
import { PageHero } from '@/components/site/section-heading';
import { partners } from '@/data/site';
import { SiteLayout } from '@/layouts/site-layout';
import { usePage } from '@inertiajs/react';

export default function PartnerShow() {
    const { slug } = usePage<{ slug: string }>().props;
    const partner = partners.find((p) => p.slug === slug) ?? partners[0];

    return (
        <SiteLayout title={partner.name}>
            <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
                <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deeper)] via-[var(--color-deep)]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-10 sm:px-8">
                    <p className="eyebrow">
                        {partner.category} · {partner.location}
                    </p>
                    <h1 className="mt-2 font-display text-4xl text-[var(--color-cream)] md:text-5xl">
                        {partner.name}
                    </h1>
                </div>
            </div>

            <section className="section-pad">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                    <div>
                        <h2 className="font-display text-2xl text-[var(--color-cream)]">
                            About
                        </h2>
                        <p className="mt-4 font-serif-body text-lg text-[var(--color-cream-muted)]">
                            {partner.about}
                        </p>
                        <h2 className="mt-10 font-display text-2xl text-[var(--color-cream)]">
                            Services
                        </h2>
                        <ul className="mt-4 flex flex-wrap gap-2">
                            {partner.services.map((s) => (
                                <li
                                    key={s}
                                    className="rounded-full border border-[var(--color-cream)]/15 px-3 py-1.5 text-sm text-[var(--color-cream-muted)]"
                                >
                                    {s}
                                </li>
                            ))}
                        </ul>
                        <h2 className="mt-10 font-display text-2xl text-[var(--color-cream)]">
                            Gallery
                        </h2>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {[partner.image, ...partner.gallery].map((src) => (
                                <img
                                    key={src}
                                    src={src}
                                    alt=""
                                    className="aspect-[4/3] w-full rounded-sm object-cover"
                                />
                            ))}
                        </div>
                    </div>
                    <aside className="surface-panel h-fit rounded-sm p-8">
                        <p className="eyebrow">Partner of FG Wedding</p>
                        <p className="mt-4 font-serif-body text-sm text-[var(--color-cream-muted)]">
                            Interested in working with {partner.name}? Start a
                            conversation with FG Wedding — we'll recommend and
                            coordinate the right partners for your celebration.
                        </p>
                        <div className="mt-8">
                            <CtaLink href="/contact">
                                Discuss With FG Wedding
                            </CtaLink>
                        </div>
                    </aside>
                </div>
            </section>
        </SiteLayout>
    );
}
