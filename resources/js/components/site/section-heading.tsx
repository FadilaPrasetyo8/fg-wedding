import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function SectionHeading({
    eyebrow,
    title,
    description,
    align = 'left',
    className,
}: {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
    className?: string;
}) {
    return (
        <div
            className={cn(
                'max-w-2xl',
                align === 'center' && 'mx-auto text-center',
                className,
            )}
        >
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-medium tracking-wide text-balance text-[var(--color-cream)]">
                {title}
            </h2>
            {description ? (
                <p className="mt-4 font-serif-body text-base leading-relaxed text-[var(--color-cream-muted)] sm:text-lg">
                    {description}
                </p>
            ) : null}
        </div>
    );
}

export function PageHero({
    eyebrow,
    title,
    description,
    children,
}: {
    eyebrow?: string;
    title: string;
    description?: string;
    children?: ReactNode;
}) {
    return (
        <section className="border-b border-[var(--color-cream)]/8 bg-[var(--color-deeper)] pt-28 pb-16 sm:pt-32 sm:pb-20">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
                <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.4rem,6vw,4rem)] font-medium tracking-wide text-balance text-[var(--color-cream)]">
                    {title}
                </h1>
                {description ? (
                    <p className="mt-5 max-w-xl font-serif-body text-lg leading-relaxed text-[var(--color-cream-muted)]">
                        {description}
                    </p>
                ) : null}
                {children ? <div className="mt-8">{children}</div> : null}
            </div>
        </section>
    );
}

export function TextLink({
    href,
    children,
    className,
}: {
    href: string;
    children: ReactNode;
    className?: string;
}) {
    return (
        <a
            href={href}
            className={cn(
                'inline-flex min-h-11 items-center border-b border-[var(--color-bronze)] pb-1 text-sm font-medium tracking-wide text-[var(--color-bronze)] transition-opacity hover:opacity-75',
                className,
            )}
        >
            {children}
        </a>
    );
}
