import { CtaButton } from '@/components/site/cta';
import { PageHero } from '@/components/site/section-heading';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { site } from '@/data/site';
import { SiteLayout } from '@/layouts/site-layout';
import { FormEvent, useState } from 'react';

const fieldClass =
    'min-h-11 w-full rounded-md border border-[var(--color-cream)]/15 bg-[var(--color-paper-elevated)]/40 px-3.5 text-[var(--color-cream)] placeholder:text-[var(--color-cream-muted)]/60 focus:border-[var(--color-bronze)] focus:outline-none focus:ring-2 focus:ring-[var(--color-bronze)]/25';

export default function Contact() {
    const [sent, setSent] = useState(false);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setSent(true);
    }

    return (
        <SiteLayout title="Contact">
            <PageHero
                eyebrow="Consultation"
                title="Let's plan your wedding"
                description="Share a few details about your celebration. FG Wedding will reach out to continue the conversation."
            />

            <section className="section-pad">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <h2 className="font-display text-2xl text-[var(--color-cream)]">
                            Start a conversation
                        </h2>
                        <p className="mt-3 font-serif-body text-[var(--color-cream-muted)]">
                            No checkout. No booking cart. Just a thoughtful first
                            step toward your wedding day.
                        </p>
                        <ul className="mt-8 space-y-3 text-sm text-[var(--color-cream-muted)]">
                            <li>{site.email}</li>
                            <li>{site.phone}</li>
                            <li>{site.address}</li>
                        </ul>
                    </div>

                    {sent ? (
                        <div className="surface-panel rounded-sm p-8 sm:p-10">
                            <p className="eyebrow">Message received</p>
                            <h3 className="mt-3 font-display text-3xl text-[var(--color-cream)]">
                                Thank you — we'll be in touch soon.
                            </h3>
                            <p className="mt-3 font-serif-body text-[var(--color-cream-muted)]">
                                Our team will review your details and contact you
                                to schedule a consultation.
                            </p>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="surface-panel grid gap-5 rounded-sm p-6 sm:grid-cols-2 sm:p-8"
                        >
                            <Field label="Name" id="name" required />
                            <Field label="Partner Name" id="partner" />
                            <Field label="Email" id="email" type="email" required />
                            <Field label="Phone" id="phone" type="tel" required />
                            <Field label="Wedding Date" id="date" type="date" />
                            <Field label="Wedding Location" id="location" />
                            <Field
                                label="Estimated Guests"
                                id="guests"
                                type="number"
                            />
                            <div>
                                <Label htmlFor="budget">Estimated Budget</Label>
                                <select id="budget" className={fieldClass} defaultValue="">
                                    <option value="" disabled>
                                        Select range
                                    </option>
                                    <option>Under Rp 100jt</option>
                                    <option>Rp 100jt – 200jt</option>
                                    <option>Rp 200jt – 350jt</option>
                                    <option>Above Rp 350jt</option>
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="style">Wedding Style</Label>
                                <select id="style" className={fieldClass} defaultValue="">
                                    <option value="" disabled>
                                        Select style
                                    </option>
                                    <option>Modern</option>
                                    <option>Elegant</option>
                                    <option>Traditional</option>
                                    <option>Luxury</option>
                                    <option>Minimalist</option>
                                    <option>Outdoor</option>
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="message">Message</Label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className={`${fieldClass} py-3`}
                                    placeholder="Tell us about your vision..."
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <CtaButton type="submit" className="w-full">
                                    Start a Conversation
                                </CtaButton>
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </SiteLayout>
    );
}

function Field({
    label,
    id,
    type = 'text',
    required,
}: {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
}) {
    return (
        <div>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} name={id} type={type} required={required} />
        </div>
    );
}
