import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

type BrandMarkProps = {
    className?: string;
    href?: string | null;
    size?: 'sm' | 'md' | 'lg' | 'hero';
    /** @deprecated Tema gelap default — light selalu cream */
    light?: boolean;
};

const sizes = {
    sm: 'text-xl tracking-[0.04em]',
    md: 'text-2xl tracking-[0.04em]',
    lg: 'text-3xl tracking-[0.05em]',
    hero: 'text-[clamp(2.75rem,8vw,4.5rem)] tracking-[0.06em] leading-[0.95]',
};

export function BrandMark({
    className,
    href = '/',
    size = 'md',
}: BrandMarkProps) {
    const classes = cn(
        'font-display font-medium text-[var(--color-cream)]',
        sizes[size],
        className,
    );

    if (href) {
        if (href.startsWith('#')) {
            return (
                <a href={href} className={classes} aria-label="FG Wedding beranda">
                    FG Wedding
                </a>
            );
        }

        return (
            <Link href={href} className={classes} aria-label="FG Wedding beranda">
                FG Wedding
            </Link>
        );
    }

    return (
        <p className={classes} aria-label="FG Wedding">
            FG Wedding
        </p>
    );
}
