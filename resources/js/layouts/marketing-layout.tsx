import { BrandMark } from '@/components/brand-mark';
import { NavButton } from '@/components/ui/nav-button';
import type { PropsWithChildren } from 'react';

type MarketingLayoutProps = PropsWithChildren<{
    transparentNav?: boolean;
}>;

export function MarketingLayout({
    children,
    transparentNav = false,
}: MarketingLayoutProps) {
    return (
        <div className="min-h-screen">
            <header
                className={
                    transparentNav
                        ? 'absolute inset-x-0 top-0 z-40'
                        : 'border-b border-line/80 bg-paper/80 backdrop-blur-sm'
                }
            >
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
                    <BrandMark
                        size="md"
                        light={transparentNav}
                        className={
                            transparentNav
                                ? 'drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]'
                                : undefined
                        }
                    />
                    <nav className="flex items-center gap-2 sm:gap-3">
                        <NavButton
                            href="/app"
                            variant={transparentNav ? 'secondary' : 'primary'}
                            size="sm"
                            className={
                                transparentNav
                                    ? 'border-paper-elevated/40 bg-paper-elevated/10 text-paper-elevated backdrop-blur-sm hover:bg-paper-elevated/20'
                                    : undefined
                            }
                        >
                            Buka Aplikasi
                        </NavButton>
                    </nav>
                </div>
            </header>

            <main>{children}</main>

            <footer className="border-t border-line bg-paper">
                <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
                    <div>
                        <BrandMark size="sm" href="/" />
                        <p className="mt-2 max-w-sm font-serif-body text-sm text-ink-muted">
                            Wedding planner & organizer — hanya untuk pasangan
                            FG Wedding, dengan vendor partner resmi.
                        </p>
                    </div>
                    <p className="font-mono text-xs text-ink-muted">
                        © {new Date().getFullYear()} FG Wedding
                    </p>
                </div>
            </footer>
        </div>
    );
}
