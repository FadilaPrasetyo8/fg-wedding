import { Button } from '@/components/ui/button';
import { AppLayout } from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const packages = [
    {
        name: 'Jakarta Gold Package',
        price: 'Rp175.000.000',
        guests: '200–400 tamu',
        inclusions: ['WO full service', 'Dekorasi standar', 'Dokumentasi'],
    },
    {
        name: 'Planning Fee — Full Coordination',
        price: 'Rp35.000.000',
        guests: 'Semua skala',
        inclusions: ['Koordinasi vendor', 'Timeline & checklist', 'Hari H support'],
    },
    {
        name: 'Intimate Garden Package',
        price: 'Rp95.000.000',
        guests: '80–150 tamu',
        inclusions: ['Venue garden partner', 'Dekor intimate', 'Photo session'],
    },
];

export default function Packages() {
    return (
        <>
            <Head title="Paket" />
            <AppLayout
                title="Paket Resmi"
                description="Paket dan biaya planning FG Wedding"
            >
                <ul className="space-y-10">
                    {packages.map((p) => (
                        <li
                            key={p.name}
                            className="border-t border-line pt-8 first:border-t-0 first:pt-0"
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h2 className="font-display text-2xl font-medium text-brand">
                                        {p.name}
                                    </h2>
                                    <p className="mt-1 font-display text-3xl text-ink">
                                        {p.price}
                                    </p>
                                    <p className="mt-1 text-sm text-ink-muted">
                                        {p.guests}
                                    </p>
                                    <ul className="mt-4 space-y-1 font-serif-body text-ink-muted">
                                        {p.inclusions.map((inc) => (
                                            <li key={inc}>— {inc}</li>
                                        ))}
                                    </ul>
                                </div>
                                <Button variant="accent" className="shrink-0">
                                    Pilih paket
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </AppLayout>
        </>
    );
}
