import { SiteFooter } from '@/components/site/site-footer';
import { SiteNavbar } from '@/components/site/site-navbar';
import { Head } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';

type SiteLayoutProps = PropsWithChildren<{
    title?: string;
    description?: string;
}>;

export function SiteLayout({
    children,
    title,
    description = 'FG Wedding — professional wedding organizer helping couples create celebrations that feel truly theirs.',
}: SiteLayoutProps) {
    return (
        <>
            <Head title={title}>
                <meta head-key="description" name="description" content={description} />
            </Head>
            <div className="flex min-h-screen flex-col text-[var(--color-cream)]">
                <SiteNavbar />
                <main className="flex-1">{children}</main>
                <SiteFooter />
            </div>
        </>
    );
}
