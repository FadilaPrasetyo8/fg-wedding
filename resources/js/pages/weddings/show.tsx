import { CtaLink } from '@/components/site/cta';
import { weddings } from '@/data/site';
import { SiteLayout } from '@/layouts/site-layout';
import { usePage } from '@inertiajs/react';

export default function WeddingShow() {
    const { slug } = usePage<{ slug: string }>().props;
    const wedding = weddings.find((w) => w.slug === slug) ?? weddings[0];

    return (
        <SiteLayout title={wedding.couple}>
            <section className="relative min-h-[70vh] overflow-hidden">
                <img
                    src={wedding.cover}
                    alt={wedding.couple}
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deeper)] via-[var(--color-deep)]/50 to-transparent" />
                <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8">
                    <p className="eyebrow">
                        {wedding.location} · {wedding.date}
                    </p>
                    <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--color-cream)]">
                        {wedding.couple}
                    </h1>
                    <p className="mt-3 max-w-xl font-display text-2xl text-[var(--color-cream-muted)]">
                        {wedding.tagline}
                    </p>
                </div>
            </section>

            <section className="section-pad">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                    <div>
                        <p className="eyebrow">Story</p>
                        <p className="mt-4 font-serif-body text-lg leading-relaxed text-[var(--color-cream-muted)]">
                            {wedding.story}
                        </p>
                        <p className="mt-4 font-serif-body text-[var(--color-cream-muted)]">
                            Concept: {wedding.concept}. Venue: {wedding.venue}.
                        </p>

                        <div className="mt-12 grid gap-3 sm:grid-cols-2">
                            {wedding.gallery.map((src) => (
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
                        <p className="eyebrow">Handled by FG Wedding</p>
                        <ul className="mt-4 space-y-2 text-sm text-[var(--color-cream-muted)]">
                            {wedding.services.map((s) => (
                                <li key={s} className="flex gap-2">
                                    <span className="text-[var(--color-bronze)]">
                                        ✓
                                    </span>
                                    {s}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <CtaLink href="/contact">
                                Plan a Wedding Like This
                            </CtaLink>
                        </div>
                    </aside>
                </div>
            </section>
        </SiteLayout>
    );
}
