import { BrandMark } from '@/components/brand-mark';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';

const navItems = [
    { href: '/app', label: 'Dashboard', match: '/app' },
    { href: '/app/vendors', label: 'Vendor', match: '/app/vendors' },
    { href: '/app/packages', label: 'Paket', match: '/app/packages' },
    { href: '/app/budget', label: 'Anggaran', match: '/app/budget' },
    { href: '/app/timeline', label: 'Timeline', match: '/app/timeline' },
    { href: '/app/checklist', label: 'Checklist', match: '/app/checklist' },
    { href: '/app/guests', label: 'Tamu', match: '/app/guests' },
];

type AppLayoutProps = PropsWithChildren<{
    title: string;
    description?: string;
}>;

export function AppLayout({ title, description, children }: AppLayoutProps) {
    const { url } = usePage();

    return (
        <div className="min-h-screen lg:grid lg:grid-cols-[240px_1fr]">
            <aside className="border-b border-line bg-paper-elevated/70 lg:border-r lg:border-b-0">
                <div className="flex h-16 items-center px-5">
                    <BrandMark size="sm" href="/app" />
                </div>
                <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-col lg:overflow-visible lg:px-3 lg:pb-6">
                    {navItems.map((item) => {
                        const active =
                            item.match === '/app'
                                ? url === '/app' || url.startsWith('/app?')
                                : url.startsWith(item.match);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'shrink-0 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                                    active
                                        ? 'bg-brand-soft text-brand'
                                        : 'text-ink-muted hover:bg-brand-soft/40 hover:text-ink',
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            <div className="flex min-w-0 flex-col">
                <header className="flex h-16 items-center justify-between border-b border-line px-5 sm:px-8">
                    <div>
                        <h1 className="font-display text-2xl font-medium tracking-wide text-brand">
                            {title}
                        </h1>
                        {description ? (
                            <p className="text-sm text-ink-muted">
                                {description}
                            </p>
                        ) : null}
                    </div>
                    <Link
                        href="/"
                        className="text-sm font-medium text-ink-muted hover:text-ink"
                    >
                        Beranda
                    </Link>
                </header>
                <main className="mx-auto w-full max-w-[1200px] flex-1 px-5 py-8 sm:px-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
