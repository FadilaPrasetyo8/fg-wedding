import { CtaLink } from '@/components/site/cta';
import { PageHero } from '@/components/site/section-heading';
import { SiteLayout } from '@/layouts/site-layout';

export default function AiBlueprint() {
    return (
        <SiteLayout title="AI Wedding Blueprint">
            <PageHero
                eyebrow="FG Wedding AI Blueprint"
                title="Not sure where to start?"
                description="Tell us about your dream wedding and we'll help you build a personalized wedding blueprint — coming soon as a FG Wedding product feature."
            />

            <section className="section-pad">
                <div className="mx-auto max-w-3xl">
                    <div className="surface-panel rounded-sm p-8 sm:p-12">
                        <p className="eyebrow">Coming Soon</p>
                        <h2 className="mt-3 font-display text-3xl text-[var(--color-cream)]">
                            Your dream wedding starts with a plan.
                        </h2>
                        <p className="mt-4 font-serif-body text-[var(--color-cream-muted)]">
                            AI Blueprint will gather your date, guests, location,
                            budget, style, and priorities — then suggest a wedding
                            concept, FG Wedding packages, partner directions, and
                            a planning outline. No chatbot. No generic AI toy —
                            a structured FG Wedding experience.
                        </p>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                            {[
                                'Wedding concept',
                                'Recommended services',
                                'Package direction',
                                'Budget allocation',
                                'Planning timeline',
                                'Partner recommendations',
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="border-t border-[var(--color-cream)]/10 pt-3 text-sm text-[var(--color-cream)]"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <CtaLink href="/contact">
                                Consult While You Wait
                            </CtaLink>
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
