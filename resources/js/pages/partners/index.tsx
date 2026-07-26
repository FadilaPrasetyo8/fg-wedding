import { CtaLink } from '@/components/site/cta';
import { PageHero } from '@/components/site/section-heading';
import { partnerCategories, partners } from '@/data/site';
import { SiteLayout } from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';
import { useMemo, useState } from 'react';

export default function PartnersIndex() {
    const [category, setCategory] = useState('All');

    const filtered = useMemo(() => {
        if (category === 'All') return partners;
        return partners.filter((p) => p.category === category);
    }, [category]);

    return (
        <SiteLayout title="Partners">
            <PageHero
                eyebrow="Our Partners"
                title="A curated network — not a marketplace"
                description="These are trusted partners FG Wedding works with. Discuss your wedding with us, and we'll recommend the right collaborators."
            />

            <section className="section-pad">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 flex gap-2 overflow-x-auto pb-1">
                        {partnerCategories.map((c) => (
                            <button
                                key={c}
                                type="button"
                                onClick={() => setCategory(c)}
                                className={
                                    category === c
                                        ? 'min-h-10 shrink-0 rounded-md bg-[var(--color-cream)]/15 px-3.5 text-sm text-[var(--color-cream)]'
                                        : 'min-h-10 shrink-0 rounded-md border border-[var(--color-cream)]/15 px-3.5 text-sm text-[var(--color-cream-muted)] hover:text-[var(--color-cream)]'
                                }
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    {filtered.length === 0 ? (
                        <p className="font-serif-body text-[var(--color-cream-muted)]">
                            No partner vendors available in this category yet.
                        </p>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filtered.map((p) => (
                                <Link
                                    key={p.slug}
                                    href={`/partners/${p.slug}`}
                                    className="group overflow-hidden rounded-sm"
                                >
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                        />
                                    </div>
                                    <div className="surface-panel border-t-0 p-5">
                                        <p className="eyebrow">
                                            {p.category} · {p.location}
                                        </p>
                                        <h2 className="mt-2 font-display text-2xl text-[var(--color-cream)]">
                                            {p.name}
                                        </h2>
                                        <p className="mt-2 text-sm text-[var(--color-cream-muted)]">
                                            {p.short}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    <div className="mt-14 text-center">
                        <CtaLink href="/contact">
                            Discuss With FG Wedding
                        </CtaLink>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
