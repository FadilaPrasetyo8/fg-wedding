import { BrandMark } from '@/components/brand-mark';
import { navLinks } from '@/data/site';
import { cn } from '@/lib/utils';
import type { Auth } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export function SiteNavbar() {
    const { url, props } = usePage<{ auth: Auth }>();
    const user = props.auth?.user ?? null;
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isHome = url === '/' || url.startsWith('/?');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [url]);

    const solid = scrolled || !isHome || open;

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 transition-all duration-500',
                solid ? 'nav-glass' : 'bg-transparent',
            )}
        >
            <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
                <BrandMark size="sm" href="/" />

                <nav className="hidden items-center gap-0.5 lg:flex">
                    {navLinks.map((link) => {
                        const active =
                            link.href === '/'
                                ? isHome
                                : url === link.href ||
                                  url.startsWith(`${link.href}/`);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    'rounded-md px-3 py-2 text-[0.8125rem] tracking-wide transition-colors',
                                    active
                                        ? 'bg-[var(--color-cream)]/12 text-[var(--color-cream)]'
                                        : 'text-[var(--color-cream-muted)] hover:text-[var(--color-cream)]',
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden items-center gap-2 lg:flex">
                    {user ? (
                        <>
                            <span className="max-w-[10rem] truncate text-sm text-[var(--color-cream-muted)]">
                                {user.name}
                            </span>
                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="inline-flex min-h-10 items-center rounded-md border border-[var(--color-cream)]/25 px-4 text-sm tracking-wide text-[var(--color-cream)] transition-colors hover:bg-[var(--color-cream)]/10"
                            >
                                Logout
                            </Link>
                        </>
                    ) : (
                        <Link
                            href="/login"
                            className="inline-flex min-h-10 items-center rounded-md border border-[var(--color-cream)]/25 px-4 text-sm tracking-wide text-[var(--color-cream)] transition-colors hover:bg-[var(--color-cream)]/10"
                        >
                            Masuk
                        </Link>
                    )}
                    <Link
                        href="/contact"
                        className="inline-flex min-h-10 items-center rounded-md bg-[var(--color-bronze)] px-4 text-sm font-medium tracking-wide text-[var(--color-deeper)] transition-colors hover:bg-[var(--color-bronze-deep)] hover:text-[var(--color-cream)]"
                    >
                        Consult With Us
                    </Link>
                </div>

                <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-cream)]/20 lg:hidden"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    <span className="sr-only">Menu</span>
                    <div className="flex w-4 flex-col gap-1.5">
                        <span
                            className={cn(
                                'h-px w-full bg-[var(--color-cream)] transition-transform',
                                open && 'translate-y-[3.5px] rotate-45',
                            )}
                        />
                        <span
                            className={cn(
                                'h-px w-full bg-[var(--color-cream)] transition-opacity',
                                open && 'opacity-0',
                            )}
                        />
                        <span
                            className={cn(
                                'h-px w-full bg-[var(--color-cream)] transition-transform',
                                open && '-translate-y-[3.5px] -rotate-45',
                            )}
                        />
                    </div>
                </button>
            </div>

            {open ? (
                <div className="border-t border-[var(--color-cream)]/10 bg-[var(--color-deeper)] lg:hidden">
                    <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="border-b border-[var(--color-cream)]/8 py-3.5 text-sm tracking-wide text-[var(--color-cream)]"
                            >
                                {link.label}
                            </Link>
                        ))}
                        {user ? (
                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--color-cream)]/25 text-sm text-[var(--color-cream)]"
                            >
                                Logout ({user.name})
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--color-cream)]/25 text-sm text-[var(--color-cream)]"
                            >
                                Masuk
                            </Link>
                        )}
                        <Link
                            href="/contact"
                            className="mt-3 inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--color-bronze)] text-sm font-medium text-[var(--color-deeper)]"
                        >
                            Consult With Us
                        </Link>
                    </nav>
                </div>
            ) : null}
        </header>
    );
}
