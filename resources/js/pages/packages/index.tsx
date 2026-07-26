import { CtaLink } from '@/components/site/cta';
import { PageHero } from '@/components/site/section-heading';
import { packages } from '@/data/site';
import { SiteLayout } from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';

export default function PackagesIndex() {
    return (
        <SiteLayout title="Packages">
            <PageHero
                eyebrow="Packages"
                title="Wedding packages designed for real celebrations"
                description="Clear inclusions, thoughtful guest ranges, and a consultation to tailor what matters most to you."
            >
                <CtaLink href="/contact" variant="secondary">
                    Need help choosing?
                </CtaLink>
            </PageHero>

            <section className="section-pad">
                <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
                    {packages.map((p) => (
                        <article
                            key={p.slug}
                            className={
                                p.featured
                                    ? 'flex flex-col rounded-sm bg-[var(--color-cream)] p-8 text-[var(--color-deeper)] sm:p-10'
                                    : 'surface-panel flex flex-col rounded-sm p-8 sm:p-10'
                            }
                        >
                            <div className="aspect-[16/10] overflow-hidden rounded-sm">
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <p
                                className={`eyebrow mt-6 ${p.featured ? 'text-[var(--color-bronze-deep)]' : ''}`}
                            >
                                {p.featured ? 'Most Chosen' : 'Package'}
                            </p>
                            <h2
                                className={`mt-2 font-display text-3xl font-medium ${p.featured ? 'text-[var(--color-deep)]' : 'text-[var(--color-cream)]'}`}
                            >
                                {p.name}
                            </h2>
                            <p
                                className={`mt-3 font-serif-body text-sm leading-relaxed ${p.featured ? 'text-[var(--color-deep)]/70' : 'text-[var(--color-cream-muted)]'}`}
                            >
                                {p.description}
                            </p>
                            <p
                                className={`mt-6 font-display text-2xl ${p.featured ? 'text-[var(--color-deep)]' : 'text-[var(--color-cream)]'}`}
                            >
                                Starting from
                            </p>
                            <p
                                className={`font-display text-3xl ${p.featured ? 'text-[var(--color-deep)]' : 'text-[var(--color-bronze)]'}`}
                            >
                                {p.price}
                            </p>
                            <p
                                className={`mt-1 text-sm ${p.featured ? 'text-[var(--color-deep)]/55' : 'text-[var(--color-cream-muted)]'}`}
                            >
                                {p.guests}
                            </p>
                            <ul
                                className={`mt-8 space-y-2 border-t pt-6 text-sm ${p.featured ? 'border-[var(--color-deep)]/10 text-[var(--color-deep)]/80' : 'border-[var(--color-cream)]/10 text-[var(--color-cream-muted)]'}`}
                            >
                                {p.highlights.map((h) => (
                                    <li key={h} className="flex gap-2">
                                        <span className="text-[var(--color-bronze)]">
                                            ✓
                                        </span>
                                        {h}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={`/packages/${p.slug}`}
                                className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-md text-sm font-medium ${p.featured ? 'bg-[var(--color-deep)] text-[var(--color-cream)]' : 'border border-[var(--color-cream)]/20 text-[var(--color-cream)] hover:bg-[var(--color-cream)]/10'}`}
                            >
                                View Package
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </SiteLayout>
    );
}
