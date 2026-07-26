import { CtaLink } from '@/components/site/cta';
import { PageHero } from '@/components/site/section-heading';
import { SiteLayout } from '@/layouts/site-layout';

export default function About() {
    return (
        <SiteLayout title="About">
            <PageHero
                eyebrow="About"
                title="Every wedding has a story. Our job is to make sure yours is beautifully told."
                description="FG Wedding is a professional wedding organizer built on trust, clarity, and curated experience."
            />

            <section className="section-pad">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="aspect-[4/5] overflow-hidden rounded-sm">
                        <img
                            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop"
                            alt="FG Wedding atmosphere"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="eyebrow">Our Story</p>
                        <h2 className="mt-3 font-display text-3xl text-[var(--color-cream)] md:text-4xl">
                            Planning that feels calm, human, and intentional.
                        </h2>
                        <div className="mt-6 space-y-4 font-serif-body text-[var(--color-cream-muted)]">
                            <p>
                                FG Wedding began with a simple belief: couples
                                deserve a wedding organizer who protects their
                                vision — and their peace of mind.
                            </p>
                            <p>
                                We work as your single point of trust. From first
                                consultation to the last guest farewell, we
                                coordinate partners, timing, and details so the
                                day feels seamless.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-pad bg-[var(--color-deeper)]">
                <div className="mx-auto max-w-6xl">
                    <p className="eyebrow">Vision</p>
                    <h2 className="mt-3 max-w-3xl font-display text-3xl text-[var(--color-cream)] md:text-4xl">
                        To help every couple celebrate with clarity, beauty, and
                        confidence.
                    </h2>
                    <div className="mt-14 grid gap-10 md:grid-cols-3">
                        {[
                            {
                                title: 'Trust',
                                body: 'Transparent packages, honest guidance, and partners we stand behind.',
                            },
                            {
                                title: 'Quality',
                                body: 'Curated vendors and styling that hold up in real celebrations — not just moodboards.',
                            },
                            {
                                title: 'Experience',
                                body: 'A process designed to reduce stress and protect the emotional core of your day.',
                            },
                        ].map((v) => (
                            <div
                                key={v.title}
                                className="border-t border-[var(--color-cream)]/15 pt-6"
                            >
                                <h3 className="font-display text-2xl text-[var(--color-cream)]">
                                    {v.title}
                                </h3>
                                <p className="mt-3 font-serif-body text-[var(--color-cream-muted)]">
                                    {v.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-pad">
                <div className="mx-auto max-w-6xl">
                    <p className="eyebrow">Why FG Wedding</p>
                    <h2 className="mt-3 max-w-2xl font-display text-3xl text-[var(--color-cream)]">
                        A professional organizer — not a marketplace, not a
                        software tool.
                    </h2>
                    <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                        {[
                            'Dedicated planning & coordination',
                            'Curated partner network',
                            'Clear wedding packages',
                            'Real wedding portfolio',
                            'Consultation-first approach',
                            'Future AI Blueprint support',
                        ].map((item) => (
                            <li
                                key={item}
                                className="surface-panel flex items-center gap-3 rounded-sm px-5 py-4 text-[var(--color-cream)]"
                            >
                                <span className="text-[var(--color-bronze)]">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-12">
                        <CtaLink href="/contact">Consult With Us</CtaLink>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
