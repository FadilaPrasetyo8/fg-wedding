import { cn } from '@/lib/utils';
import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    invalid?: boolean;
};

export function Input({ className, invalid, ...props }: InputProps) {
    return (
        <input
            className={cn(
                'min-h-11 w-full rounded-md border bg-[var(--color-paper-elevated)]/40 px-3.5 text-base text-[var(--color-cream)] placeholder:text-[var(--color-cream-muted)]/60 transition-colors',
                'border-[var(--color-cream)]/15 focus:border-[var(--color-bronze)] focus:outline-none focus:ring-2 focus:ring-[var(--color-bronze)]/25',
                invalid &&
                    'border-danger focus:border-danger focus:ring-danger/20',
                className,
            )}
            {...props}
        />
    );
}
