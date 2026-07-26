import { BrandMark } from '@/components/brand-mark';
import { navLinks, site } from '@/data/site';
import { Link } from '@inertiajs/react';

export function SiteFooter() {
    return (
        <footer className="border-t border-[var(--color-cream)]/8 bg-[var(--color-deeper)]">
            <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr]">
                <div>
                    <BrandMark size="md" href="/" />
                    <p className="mt-4 max-w-sm font-serif-body text-sm leading-relaxed text-[var(--color-cream-muted)]">
                        Professional wedding organizing — calm planning, curated
                        partners, and celebrations that feel truly yours.
                    </p>
                </div>

                <div>
                    <p className="eyebrow">Explore</p>
                    <ul className="mt-4 space-y-2">
                        {navLinks.slice(1).map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-[var(--color-cream-muted)] transition-colors hover:text-[var(--color-cream)]"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/ai-blueprint"
                                className="text-sm text-[var(--color-cream-muted)] transition-colors hover:text-[var(--color-cream)]"
                            >
                                AI Wedding Blueprint
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="eyebrow">Contact</p>
                    <ul className="mt-4 space-y-2 text-sm text-[var(--color-cream-muted)]">
                        <li>{site.email}</li>
                        <li>{site.phone}</li>
                        <li>{site.address}</li>
                    </ul>
                    <Link
                        href="/contact"
                        className="mt-6 inline-flex min-h-10 items-center border-b border-[var(--color-bronze)] pb-1 text-sm font-medium text-[var(--color-bronze)]"
                    >
                        Let's Plan Your Wedding
                    </Link>
                </div>
            </div>

            <div className="border-t border-[var(--color-cream)]/8">
                <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-[0.6875rem] tracking-wider text-[var(--color-cream-muted)] uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8">
                    <p>© {new Date().getFullYear()} FG Wedding</p>
                    <p>Wedding Organizer · Indonesia</p>
                </div>
            </div>
        </footer>
    );
}
