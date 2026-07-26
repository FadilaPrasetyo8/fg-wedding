import { BrandMark } from '@/components/brand-mark';
import { Link } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';

type AuthLayoutProps = PropsWithChildren<{
    title: string;
    subtitle: string;
    aside?: string;
}>;

export function AuthLayout({
    children,
    title,
    subtitle,
    aside = 'Rencana pernikahan yang tenang, indah, dan terkurasi — bersama partner resmi FG Wedding.',
}: AuthLayoutProps) {
    return (
        <div className="grid min-h-screen bg-[var(--color-deep)] text-[var(--color-cream)] lg:grid-cols-2">
            <aside className="relative hidden overflow-hidden lg:block">
                <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1600&auto=format&fit=crop"
                    alt="Suasana dekorasi pernikahan yang hangat"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,36,29,0.35)_0%,rgba(26,36,29,0.85)_100%)]" />
                <div className="relative z-10 flex h-full flex-col justify-between p-10">
                    <BrandMark size="lg" href="/" />
                    <div className="max-w-md motion-safe:animate-fade-up">
                        <p className="eyebrow mb-4">FG Wedding</p>
                        <p className="font-display text-4xl leading-tight font-medium tracking-wide text-[var(--color-cream)]">
                            {aside}
                        </p>
                    </div>
                </div>
            </aside>

            <div className="flex flex-col justify-center px-5 py-12 sm:px-10">
                <div className="mx-auto w-full max-w-md">
                    <div className="mb-8 lg:hidden">
                        <BrandMark size="md" href="/" />
                    </div>
                    <h1 className="font-display text-4xl font-medium tracking-wide text-[var(--color-cream)]">
                        {title}
                    </h1>
                    <p className="mt-2 font-serif-body text-[var(--color-cream-muted)]">
                        {subtitle}
                    </p>
                    <div className="mt-8">{children}</div>
                    <p className="mt-8 text-center text-sm text-[var(--color-cream-muted)]">
                        <Link
                            href="/"
                            className="underline-offset-4 hover:text-[var(--color-cream)] hover:underline"
                        >
                            Kembali ke beranda
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
