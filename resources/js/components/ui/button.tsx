import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger';
type Size = 'md' | 'lg' | 'sm';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
};

const variants: Record<Variant, string> = {
    primary:
        'bg-[var(--color-bronze)] text-[var(--color-deeper)] hover:bg-[var(--color-bronze-deep)] hover:text-[var(--color-cream)]',
    secondary:
        'border border-[var(--color-cream)]/25 bg-transparent text-[var(--color-cream)] hover:bg-[var(--color-cream)]/10',
    accent:
        'bg-[var(--color-cream)] text-[var(--color-deeper)] hover:bg-[var(--color-cream)]/90',
    ghost: 'bg-transparent text-[var(--color-cream-muted)] hover:bg-[var(--color-cream)]/8 hover:text-[var(--color-cream)]',
    danger:
        'border border-danger/40 bg-transparent text-danger hover:bg-danger/10',
};

const sizes: Record<Size, string> = {
    sm: 'min-h-10 px-3.5 text-sm',
    md: 'min-h-11 px-5 text-sm',
    lg: 'min-h-12 px-6 text-base',
};

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    type = 'button',
    ...props
}: ButtonProps) {
    return (
        <button
            type={type}
            className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50',
                variants[variant],
                sizes[size],
                className,
            )}
            {...props}
        />
    );
}
