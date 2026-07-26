import { Button } from '@/components/ui/button';
import { AppLayout } from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const vendors = [
    {
        name: 'Lumina Decoration',
        category: 'Dekorasi',
        city: 'Jakarta',
        range: 'Rp25jt – Rp80jt',
        tags: ['garden', 'elegant'],
    },
    {
        name: 'Frame & Folio',
        category: 'Fotografi',
        city: 'Jakarta',
        range: 'Rp18jt – Rp45jt',
        tags: ['documentary', 'modern'],
    },
    {
        name: 'Seruni Catering',
        category: 'Katering',
        city: 'Jakarta',
        range: 'Rp175rb – Rp350rb / pax',
        tags: ['indo', 'fusion'],
    },
    {
        name: 'The Glass House',
        category: 'Venue',
        city: 'Jakarta',
        range: 'Rp60jt – Rp150jt',
        tags: ['indoor', 'garden'],
    },
];

export default function Vendors() {
    return (
        <>
            <Head title="Vendor" />
            <AppLayout
                title="Vendor Partner"
                description="Hanya vendor resmi yang bermitra dengan FG Wedding"
            >
                <div className="mb-8 flex flex-wrap gap-2">
                    {['Semua', 'Venue', 'Katering', 'Dekorasi', 'Fotografi'].map(
                        (f, i) => (
                            <button
                                key={f}
                                type="button"
                                className={
                                    i === 0
                                        ? 'min-h-10 rounded-lg bg-brand px-3.5 text-sm font-medium text-paper-elevated'
                                        : 'min-h-10 rounded-lg border border-line px-3.5 text-sm font-medium text-ink-muted hover:bg-brand-soft/40'
                                }
                            >
                                {f}
                            </button>
                        ),
                    )}
                </div>

                <ul className="divide-y divide-line">
                    {vendors.map((v) => (
                        <li
                            key={v.name}
                            className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div>
                                <p className="font-mono text-xs tracking-wider text-accent uppercase">
                                    {v.category} · {v.city}
                                </p>
                                <h2 className="mt-1 font-display text-2xl font-medium text-ink">
                                    {v.name}
                                </h2>
                                <p className="mt-1 text-sm text-ink-muted">
                                    {v.range}
                                </p>
                                <p className="mt-2 text-sm text-ink-muted">
                                    {v.tags.join(' · ')}
                                </p>
                            </div>
                            <Button variant="secondary" className="shrink-0">
                                Tambah ke rencana
                            </Button>
                        </li>
                    ))}
                </ul>
            </AppLayout>
        </>
    );
}
