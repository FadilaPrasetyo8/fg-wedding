import { NavButton } from '@/components/ui/nav-button';
import { AppLayout } from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <AppLayout
                title="Dashboard"
                description="Ringkasan perencanaan pernikahan Anda"
            >
                <section className="motion-safe:animate-fade-up">
                    <p className="font-mono text-xs tracking-widest text-accent uppercase">
                        Langkah berikutnya
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-medium tracking-wide text-brand">
                        Mulai dari vendor atau paket
                    </h2>
                    <p className="mt-3 max-w-xl font-serif-body text-ink-muted">
                        Pilih partner resmi FG Wedding, lalu lengkapi anggaran,
                        timeline, checklist, dan daftar tamu.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <NavButton href="/app/vendors" variant="accent" size="lg">
                            Browse Vendor
                        </NavButton>
                        <NavButton
                            href="/app/packages"
                            variant="secondary"
                            size="lg"
                        >
                            Lihat Paket
                        </NavButton>
                    </div>
                </section>

                <section className="mt-16 grid gap-10 border-t border-line pt-12 sm:grid-cols-3">
                    {[
                        {
                            label: 'Status',
                            value: 'Draf',
                            hint: 'Belum ada rencana aktif',
                        },
                        {
                            label: 'Anggaran',
                            value: '—',
                            hint: 'Belum ditetapkan',
                        },
                        {
                            label: 'Hari H',
                            value: '—',
                            hint: 'Atur tanggal di proyek',
                        },
                    ].map((item) => (
                        <div key={item.label}>
                            <p className="text-sm text-ink-muted">
                                {item.label}
                            </p>
                            <p className="mt-1 font-display text-3xl font-medium text-ink">
                                {item.value}
                            </p>
                            <p className="mt-1 text-sm text-ink-muted">
                                {item.hint}
                            </p>
                        </div>
                    ))}
                </section>

                <section className="mt-16 border-t border-line pt-12">
                    <h3 className="font-display text-2xl font-medium text-brand">
                        Pintasan perencanaan
                    </h3>
                    <ul className="mt-6 divide-y divide-line">
                        {[
                            { href: '/app/vendors', label: 'Browse vendor' },
                            { href: '/app/packages', label: 'Paket resmi' },
                            { href: '/app/budget', label: 'Atur anggaran' },
                            { href: '/app/timeline', label: 'Lihat timeline' },
                            {
                                href: '/app/checklist',
                                label: 'Checklist persiapan',
                            },
                            { href: '/app/guests', label: 'Daftar tamu' },
                        ].map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="flex min-h-12 items-center justify-between py-3 text-ink transition-colors hover:text-brand"
                                >
                                    <span>{item.label}</span>
                                    <span
                                        aria-hidden
                                        className="text-ink-muted"
                                    >
                                        →
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </AppLayout>
        </>
    );
}
