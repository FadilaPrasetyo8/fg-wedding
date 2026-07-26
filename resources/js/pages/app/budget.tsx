import { AppLayout } from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const rows = [
    { label: 'Venue', allocated: 80000000, actual: 0 },
    { label: 'Katering', allocated: 90000000, actual: 0 },
    { label: 'Dekorasi', allocated: 45000000, actual: 0 },
    { label: 'Dokumentasi', allocated: 35000000, actual: 0 },
];

function formatIdr(n: number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(n);
}

export default function Budget() {
    const total = 250000000;
    const allocated = rows.reduce((s, r) => s + r.allocated, 0);

    return (
        <>
            <Head title="Anggaran" />
            <AppLayout
                title="Anggaran"
                description="Alokasi transparan dan sisa saldo"
            >
                <div className="grid gap-8 border-b border-line pb-10 sm:grid-cols-3">
                    <Stat label="Total anggaran" value={formatIdr(total)} />
                    <Stat label="Dialokasikan" value={formatIdr(allocated)} />
                    <Stat
                        label="Sisa"
                        value={formatIdr(total - allocated)}
                    />
                </div>

                <ul className="mt-10 divide-y divide-line">
                    {rows.map((r) => (
                        <li
                            key={r.label}
                            className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <span className="font-medium">{r.label}</span>
                            <span className="font-mono text-sm text-ink-muted">
                                Alokasi {formatIdr(r.allocated)} · Aktual{' '}
                                {formatIdr(r.actual)}
                            </span>
                        </li>
                    ))}
                </ul>
            </AppLayout>
        </>
    );
}

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-sm text-ink-muted">{label}</p>
            <p className="mt-1 font-display text-2xl font-medium text-ink sm:text-3xl">
                {value}
            </p>
        </div>
    );
}
