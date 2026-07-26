import { CtaLink } from '@/components/site/cta';
import { SectionHeading } from '@/components/site/section-heading';
import {
    packages,
    partners,
    services,
    testimonials,
    weddings,
} from '@/data/site';
import { SiteLayout } from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';

const HERO =
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop';

export default function Home() {
    return (
        <SiteLayout title="Home">
            {/* Hero */}
            <section className="relative isolate min-h-[100svh] overflow-hidden">
                <img
                    src={HERO}
                    alt="Wedding celebration"
                    className="img-kenburns absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(26,36,29,0.88)_0%,rgba(47,64,51,0.5)_50%,rgba(36,51,40,0.72)_100%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deeper)] via-transparent to-[var(--color-deep)]/35" />

                <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pt-32 pb-20 sm:px-8 sm:pb-24 lg:justify-center lg:pb-20">
                    <p className="eyebrow motion-safe:animate-fade-up">
                        Wedding Organizer · Indonesia
                    </p>
                    <h1
                        className="mt-4 max-w-3xl font-display text-[clamp(2.75rem,8vw,5rem)] leading-[0.98] font-medium tracking-wide text-[var(--color-cream)] text-balance motion-safe:animate-fade-up"
                        style={{ animationDelay: '100ms' }}
                    >
                        Your Wedding,
                        <br />
                        Beautifully Planned.
                    </h1>
                    <p
                        className="mt-6 max-w-md font-serif-body text-lg leading-relaxed text-[var(--color-cream-muted)] motion-safe:animate-fade-up"
                        style={{ animationDelay: '200ms' }}
                    >
                        From planning to the final moment, FG Wedding helps you
                        create a celebration that feels truly yours.
                    </p>
                    <div
                        className="mt-10 flex flex-wrap gap-3 motion-safe:animate-fade-up"
                        style={{ animationDelay: '300ms' }}
                    >
                        <CtaLink href="/packages">Explore Our Packages</CtaLink>
                        <CtaLink href="/contact" variant="secondary">
                            Consult With Us
                        </CtaLink>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="section-pad border-t border-[var(--color-cream)]/8">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <SectionHeading
                            eyebrow="About FG Wedding"
                            title="Every wedding has a story. Ours is to help you tell yours."
                            description="FG Wedding is a professional wedding organizer focused on clarity, curated partners, and calm execution — so your celebration feels intentional from the first meeting to the last dance."
                        />
                        <div className="mt-8">
                            <CtaLink href="/about" variant="ghost">
                                Our Story →
                            </CtaLink>
                        </div>
                    </div>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                        <img
                            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop"
                            alt="Wedding décor detail"
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 ring-1 ring-[var(--color-cream)]/10 ring-inset" />
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section-pad bg-[var(--color-deeper)]">
                <div className="mx-auto max-w-6xl">
                    <SectionHeading
                        eyebrow="What We Do"
                        title="Services crafted for real celebrations"
                        description="Whether you need full planning or day-of calm, every service is designed around trust, quality, and experience."
                    />
                    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.slice(0, 6).map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group block"
                            >
                                <div className="aspect-[16/10] overflow-hidden rounded-sm">
                                    <img
                                        src={s.image}
                                        alt={s.name}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    />
                                </div>
                                <p className="eyebrow mt-5">{s.name}</p>
                                <p className="mt-2 font-serif-body text-[var(--color-cream-muted)]">
                                    {s.short}
                                </p>
                                <span className="mt-4 inline-block text-sm text-[var(--color-bronze)] transition-transform group-hover:translate-x-0.5">
                                    Learn More →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Packages */}
            <section className="section-pad">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <SectionHeading
                            eyebrow="What You Get"
                            title="Wedding packages, clearly presented"
                            description="Thoughtful packages — not software pricing. Choose a starting point, then refine with us."
                            className="mb-0"
                        />
                        <CtaLink href="/packages" variant="ghost">
                            View All Packages →
                        </CtaLink>
                    </div>

                    <div className="mt-14 grid gap-4 md:grid-cols-3">
                        {packages.map((p) => (
                            <Link
                                key={p.slug}
                                href={`/packages/${p.slug}`}
                                className={
                                    p.featured
                                        ? 'flex flex-col rounded-sm bg-[var(--color-cream)] p-8 text-[var(--color-deeper)] shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-10'
                                        : 'surface-panel flex flex-col rounded-sm p-8 sm:p-10'
                                }
                            >
                                <p
                                    className={
                                        p.featured
                                            ? 'eyebrow text-[var(--color-bronze-deep)]'
                                            : 'eyebrow'
                                    }
                                >
                                    {p.featured ? 'Most Chosen' : 'Package'}
                                </p>
                                <h3
                                    className={`mt-3 font-display text-3xl font-medium tracking-wide ${p.featured ? 'text-[var(--color-deep)]' : 'text-[var(--color-cream)]'}`}
                                >
                                    {p.name}
                                </h3>
                                <p
                                    className={`mt-3 font-serif-body text-sm leading-relaxed ${p.featured ? 'text-[var(--color-deep)]/70' : 'text-[var(--color-cream-muted)]'}`}
                                >
                                    {p.description}
                                </p>
                                <p
                                    className={`mt-6 font-display text-2xl ${p.featured ? 'text-[var(--color-deep)]' : 'text-[var(--color-cream)]'}`}
                                >
                                    {p.price}
                                </p>
                                <p
                                    className={`mt-1 text-sm ${p.featured ? 'text-[var(--color-deep)]/55' : 'text-[var(--color-cream-muted)]'}`}
                                >
                                    {p.guests}
                                </p>
                                <ul
                                    className={`mt-8 flex-1 space-y-2 border-t pt-6 text-sm ${p.featured ? 'border-[var(--color-deep)]/10 text-[var(--color-deep)]/75' : 'border-[var(--color-cream)]/10 text-[var(--color-cream-muted)]'}`}
                                >
                                    {p.highlights.slice(0, 5).map((h) => (
                                        <li key={h} className="flex gap-2">
                                            <span className="text-[var(--color-bronze)]">
                                                ✓
                                            </span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                                <span
                                    className={`mt-8 text-sm font-medium ${p.featured ? 'text-[var(--color-deep)]' : 'text-[var(--color-bronze)]'}`}
                                >
                                    View Package →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="section-pad bg-[var(--color-deeper)]">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <SectionHeading
                            eyebrow="Who We Work With"
                            title="Our trusted partners"
                            description="Not a marketplace — a curated network of venues, stylists, and creatives who work with FG Wedding."
                            className="mb-0"
                        />
                        <CtaLink href="/partners" variant="ghost">
                            Meet Our Partners →
                        </CtaLink>
                    </div>
                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {partners.slice(0, 6).map((p) => (
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
                                    <h3 className="mt-2 font-display text-2xl text-[var(--color-cream)]">
                                        {p.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-[var(--color-cream-muted)]">
                                        {p.short}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section className="section-pad">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <SectionHeading
                            eyebrow="Our Work"
                            title="Real weddings, thoughtfully told"
                            description="A look at celebrations we've helped bring to life — case studies, not catalogs."
                            className="mb-0"
                        />
                        <CtaLink href="/weddings" variant="ghost">
                            View All Weddings →
                        </CtaLink>
                    </div>
                    <div className="mt-14 grid gap-8 md:grid-cols-2">
                        {weddings.slice(0, 4).map((w, i) => (
                            <Link
                                key={w.slug}
                                href={`/weddings/${w.slug}`}
                                className={`group ${i === 0 ? 'md:col-span-2' : ''}`}
                            >
                                <div
                                    className={`overflow-hidden rounded-sm ${i === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}
                                >
                                    <img
                                        src={w.cover}
                                        alt={w.couple}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                    />
                                </div>
                                <p className="eyebrow mt-5">
                                    {w.location} · {w.date}
                                </p>
                                <h3 className="mt-2 font-display text-3xl text-[var(--color-cream)]">
                                    {w.couple}
                                </h3>
                                <p className="mt-1 text-[var(--color-cream-muted)]">
                                    {w.concept}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery strip */}
            <section className="border-y border-[var(--color-cream)]/8 bg-[var(--color-deeper)] py-4">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
                    <p className="font-display text-2xl text-[var(--color-cream)]">
                        Gallery
                    </p>
                    <CtaLink href="/gallery" variant="ghost">
                        Open Gallery →
                    </CtaLink>
                </div>
                <div className="mt-4 flex gap-2 overflow-x-auto px-5 pb-4 sm:px-8">
                    {[
                        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=600&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=600&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop',
                    ].map((src) => (
                        <img
                            key={src}
                            src={src}
                            alt=""
                            className="h-36 w-52 shrink-0 rounded-sm object-cover sm:h-44 sm:w-64"
                        />
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-pad">
                <div className="mx-auto max-w-6xl">
                    <SectionHeading
                        eyebrow="Why Trust Us"
                        title="Words from the couples we served"
                        align="center"
                        className="mb-14"
                    />
                    <div className="grid gap-10 md:grid-cols-3">
                        {testimonials.map((t) => (
                            <blockquote key={t.couple} className="border-t border-[var(--color-cream)]/15 pt-6">
                                <p className="font-display text-2xl leading-snug text-[var(--color-cream)]">
                                    “{t.quote}”
                                </p>
                                <footer className="mt-6 text-sm text-[var(--color-cream-muted)]">
                                    <span className="text-[var(--color-cream)]">
                                        {t.couple}
                                    </span>
                                    <span className="mx-2">·</span>
                                    {t.date}
                                </footer>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Teaser */}
            <section className="section-pad bg-[var(--color-deeper)]">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="eyebrow">Coming Soon · Differentiator</p>
                    <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-medium tracking-wide text-[var(--color-cream)]">
                        Your dream wedding starts with a plan.
                    </h2>
                    <p className="mt-4 font-serif-body text-lg text-[var(--color-cream-muted)]">
                        Not sure where to start? FG Wedding AI Blueprint will
                        help you shape a personalized concept, package direction,
                        and planning outline — built around our services and
                        partners.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <CtaLink href="/ai-blueprint">
                            Create My Wedding Blueprint
                        </CtaLink>
                        <CtaLink href="/contact" variant="secondary">
                            Or Talk to Us First
                        </CtaLink>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-pad border-t border-[var(--color-cream)]/8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-medium tracking-wide text-[var(--color-cream)]">
                        Let's talk about your wedding.
                    </h2>
                    <p className="mt-4 font-serif-body text-lg text-[var(--color-cream-muted)]">
                        Share your date, vision, and priorities — we'll guide
                        you toward the right package and partners.
                    </p>
                    <div className="mt-8">
                        <CtaLink href="/contact">Start a Conversation</CtaLink>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
