import { PageHero } from '@/components/site/section-heading';
import { weddings } from '@/data/site';
import { SiteLayout } from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';
import { useMemo, useState } from 'react';

const filters = ['All', 'Wedding', 'Ceremony', 'Reception', 'Decoration', 'Outdoor', 'Indoor'];

export default function WeddingsIndex() {
    const [filter, setFilter] = useState('All');

    const filtered = useMemo(() => {
        if (filter === 'All') return weddings;
        return weddings.filter((w) => w.tags.includes(filter));
    }, [filter]);

    return (
        <SiteLayout title="Weddings">
            <PageHero
                eyebrow="Real Weddings"
                title="Celebrations we've helped bring to life"
                description="Editorial case studies of FG Wedding projects — photography first, story always."
            />

            <section className="section-pad">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 flex gap-2 overflow-x-auto">
                        {filters.map((f) => (
                            <button
                                key={f}
                                type="button"
                                onClick={() => setFilter(f)}
                                className={
                                    filter === f
                                        ? 'min-h-10 shrink-0 rounded-md bg-[var(--color-cream)]/15 px-3.5 text-sm text-[var(--color-cream)]'
                                        : 'min-h-10 shrink-0 rounded-md border border-[var(--color-cream)]/15 px-3.5 text-sm text-[var(--color-cream-muted)]'
                                }
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {filtered.length === 0 ? (
                        <p className="font-serif-body text-[var(--color-cream-muted)]">
                            No wedding stories available yet.
                        </p>
                    ) : (
                        <div className="grid gap-10 sm:grid-cols-2">
                            {filtered.map((w) => (
                                <Link
                                    key={w.slug}
                                    href={`/weddings/${w.slug}`}
                                    className="group"
                                >
                                    <div className="aspect-[4/3] overflow-hidden rounded-sm">
                                        <img
                                            src={w.cover}
                                            alt={w.couple}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                        />
                                    </div>
                                    <p className="eyebrow mt-5">
                                        {w.location} · {w.date}
                                    </p>
                                    <h2 className="mt-2 font-display text-3xl text-[var(--color-cream)]">
                                        {w.couple}
                                    </h2>
                                    <p className="mt-1 text-[var(--color-cream-muted)]">
                                        {w.concept}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </SiteLayout>
    );
}
