import { PageHero } from '@/components/site/section-heading';
import { galleryItems } from '@/data/site';
import { SiteLayout } from '@/layouts/site-layout';
import { useMemo, useState } from 'react';

const categories = ['All', 'Wedding', 'Decoration', 'Ceremony', 'Reception', 'Details'];

export default function Gallery() {
    const [category, setCategory] = useState('All');
    const [active, setActive] = useState<(typeof galleryItems)[0] | null>(null);

    const items = useMemo(() => {
        if (category === 'All') return galleryItems;
        return galleryItems.filter((g) => g.category === category);
    }, [category]);

    return (
        <SiteLayout title="Gallery">
            <PageHero
                eyebrow="Gallery"
                title="Moments, details, and atmospheres"
                description="A visual collection from FG Wedding celebrations — click any image for a closer look."
            />

            <section className="section-pad pt-10">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 flex gap-2 overflow-x-auto">
                        {categories.map((c) => (
                            <button
                                key={c}
                                type="button"
                                onClick={() => setCategory(c)}
                                className={
                                    category === c
                                        ? 'min-h-10 shrink-0 rounded-md bg-[var(--color-cream)]/15 px-3.5 text-sm text-[var(--color-cream)]'
                                        : 'min-h-10 shrink-0 rounded-md border border-[var(--color-cream)]/15 px-3.5 text-sm text-[var(--color-cream-muted)]'
                                }
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
                        {items.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setActive(item)}
                                className="mb-3 block w-full overflow-hidden rounded-sm"
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {active ? (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--color-deeper)]/90 p-4 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setActive(null)}
                >
                    <button
                        type="button"
                        className="absolute top-5 right-5 text-sm text-[var(--color-cream)]"
                        onClick={() => setActive(null)}
                    >
                        Close
                    </button>
                    <img
                        src={active.src}
                        alt={active.alt}
                        className="max-h-[85vh] max-w-full rounded-sm object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            ) : null}
        </SiteLayout>
    );
}
