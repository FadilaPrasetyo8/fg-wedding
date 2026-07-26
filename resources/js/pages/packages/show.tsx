import { CtaLink } from '@/components/site/cta';
import { PageHero } from '@/components/site/section-heading';
import { packages, partners } from '@/data/site';
import { SiteLayout } from '@/layouts/site-layout';
import { Link, usePage } from '@inertiajs/react';

export default function PackageShow() {
    const { slug } = usePage<{ slug: string }>().props;
    const pkg = packages.find((p) => p.slug === slug) ?? packages[0];
    const packagePartners = pkg.partnerSlugs
        .map((partnerSlug) => partners.find((p) => p.slug === partnerSlug))
        .filter((p): p is (typeof partners)[number] => Boolean(p));

    return (
        <SiteLayout title={pkg.name}>
            <PageHero
                eyebrow="Package"
                title={pkg.name}
                description={pkg.description}
            />

            <section className="section-pad">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <div className="aspect-[16/11] overflow-hidden rounded-sm">
                            <img
                                src={pkg.image}
                                alt={pkg.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h2 className="mt-10 font-display text-2xl text-[var(--color-cream)]">
                            Package overview
                        </h2>
                        <p className="mt-3 font-serif-body text-[var(--color-cream-muted)]">
                            {pkg.description} Designed as a clear starting point
                            — we refine inclusions during consultation based on
                            your venue, guest count, and priorities.
                        </p>
                        <h2 className="mt-10 font-display text-2xl text-[var(--color-cream)]">
                            Included services
                        </h2>
                        <ul className="mt-4 divide-y divide-[var(--color-cream)]/10">
                            {pkg.highlights.map((h) => (
                                <li
                                    key={h}
                                    className="flex gap-3 py-3 text-[var(--color-cream)]"
                                >
                                    <span className="text-[var(--color-bronze)]">
                                        ✓
                                    </span>
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <aside className="surface-panel h-fit rounded-sm p-8">
                        <p className="eyebrow">Starting from</p>
                        <p className="mt-2 font-display text-4xl text-[var(--color-cream)]">
                            {pkg.price}
                        </p>
                        <p className="mt-2 text-sm text-[var(--color-cream-muted)]">
                            Guest range: {pkg.guests}
                        </p>
                        <p className="mt-6 font-serif-body text-sm text-[var(--color-cream-muted)]">
                            Final investment depends on venue, guest count, and
                            selected options. Let's discuss your wedding.
                        </p>
                        <div className="mt-8 flex flex-col gap-3">
                            <CtaLink href="/contact">
                                Discuss This Package
                            </CtaLink>
                            <a
                                href="#package-partners"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[var(--color-cream)]/30 px-6 text-sm font-medium tracking-wide text-[var(--color-cream)] transition-colors hover:bg-[var(--color-cream)]/10"
                            >
                                See Partners in This Package
                            </a>
                        </div>
                    </aside>
                </div>
            </section>

            <section
                id="package-partners"
                className="section-pad scroll-mt-24 border-t border-[var(--color-cream)]/8 bg-[var(--color-deeper)]"
            >
                <div className="mx-auto max-w-6xl">
                    <p className="eyebrow">Partner vendors in this package</p>
                    <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] text-[var(--color-cream)]">
                        Curated partners for {pkg.name}
                    </h2>
                    <p className="mt-3 max-w-2xl font-serif-body text-[var(--color-cream-muted)]">
                        Each package comes with a different partner lineup. These
                        are FG Wedding partners typically included or recommended
                        for this package — not a marketplace booking.
                    </p>

                    {packagePartners.length > 0 ? (
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {packagePartners.map((partner) => (
                                <Link
                                    key={partner.slug}
                                    href={`/partners/${partner.slug}`}
                                    className="group overflow-hidden rounded-sm"
                                >
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={partner.image}
                                            alt={partner.name}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                        />
                                    </div>
                                    <div className="surface-panel border-t-0 p-5">
                                        <p className="eyebrow">
                                            {partner.category} ·{' '}
                                            {partner.location}
                                        </p>
                                        <h3 className="mt-2 font-display text-2xl text-[var(--color-cream)]">
                                            {partner.name}
                                        </h3>
                                        <p className="mt-2 text-sm text-[var(--color-cream-muted)]">
                                            {partner.short}
                                        </p>
                                        <span className="mt-4 inline-block text-sm text-[var(--color-bronze)] transition-transform group-hover:translate-x-0.5">
                                            View partner →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="mt-10 text-[var(--color-cream-muted)]">
                            Partner lineup for this package will be confirmed
                            during consultation.
                        </p>
                    )}

                    <div className="mt-12">
                        <CtaLink href="/contact">
                            Discuss With FG Wedding
                        </CtaLink>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
