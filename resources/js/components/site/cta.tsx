import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const styles: Record<Variant, string> = {
    primary:
        'bg-[var(--color-bronze)] text-[var(--color-deeper)] hover:bg-[var(--color-bronze-deep)] hover:text-[var(--color-cream)]',
    secondary:
        'border border-[var(--color-cream)]/30 text-[var(--color-cream)] hover:bg-[var(--color-cream)]/10',
    ghost: 'text-[var(--color-cream)] hover:text-[var(--color-bronze)]',
};

export function CtaLink({
    href,
    children,
    variant = 'primary',
    className,
}: {
    href: string;
    children: ReactNode;
    variant?: Variant;
    className?: string;
}) {
    return (
        <Link
            href={href}
            className={cn(
                'inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium tracking-wide transition-colors',
                styles[variant],
                className,
            )}
        >
            {children}
        </Link>
    );
}

export function CtaButton({
    children,
    variant = 'primary',
    className,
    type = 'button',
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
    return (
        <button
            type={type}
            className={cn(
                'inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium tracking-wide transition-colors disabled:opacity-50',
                styles[variant],
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}
