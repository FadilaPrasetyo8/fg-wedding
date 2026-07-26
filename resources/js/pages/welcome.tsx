import { BrandMark } from '@/components/brand-mark';
import { cn } from '@/lib/utils';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const HERO_IMAGE =
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop';

const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'vendor', label: 'Vendor' },
    { id: 'paket', label: 'Paket' },
    { id: 'anggaran', label: 'Anggaran' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'checklist', label: 'Checklist' },
    { id: 'tamu', label: 'Tamu' },
] as const;

type SectionId = (typeof navItems)[number]['id'];

const vendors = [
    {
        name: 'Lumina Decoration',
        category: 'Dekorasi',
        city: 'Jakarta',
        range: 'Rp25jt – Rp80jt',
        note: 'Instalasi garden & indoor dengan pencahayaan hangat.',
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
    },
    {
        name: 'Frame & Folio',
        category: 'Fotografi',
        city: 'Jakarta',
        range: 'Rp18jt – Rp45jt',
        note: 'Dokumentasi cinematic dengan gaya editorial modern.',
        image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1200&auto=format&fit=crop',
    },
    {
        name: 'Seruni Catering',
        category: 'Katering',
        city: 'Jakarta',
        range: 'Rp175rb – Rp350rb / pax',
        note: 'Menu fusion Indonesia untuk resepsi skala menengah–besar.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
    },
    {
        name: 'The Glass House',
        category: 'Venue',
        city: 'Jakarta',
        range: 'Rp60jt – Rp150jt',
        note: 'Ruang indoor bercahaya alami, kapasitas hingga 400 tamu.',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
    },
];

const packages = [
    {
        name: 'Intimate Garden',
        price: '95',
        guests: '80–150 tamu',
        inclusions: ['Venue garden partner', 'Dekor intimate', 'Photo session'],
    },
    {
        name: 'Jakarta Gold',
        price: '175',
        guests: '200–400 tamu',
        inclusions: ['WO full service', 'Dekorasi standar', 'Dokumentasi lengkap'],
        featured: true,
    },
    {
        name: 'Full Coordination',
        price: '35',
        unit: 'biaya planning',
        guests: 'Semua skala',
        inclusions: ['Koordinasi vendor', 'Timeline & checklist', 'Pendampingan hari H'],
    },
];

const budgetRows = [
    { label: 'Venue', allocated: 80000000, pct: 32 },
    { label: 'Katering', allocated: 90000000, pct: 36 },
    { label: 'Dekorasi', allocated: 45000000, pct: 18 },
    { label: 'Dokumentasi', allocated: 35000000, pct: 14 },
];

const milestones = [
    { title: 'Booking paket & venue', due: 'September 2026', meta: 'Prioritas utama' },
    { title: 'Finalisasi vendor inti', due: 'November 2026', meta: 'Dekor · foto · katering' },
    { title: 'Fitting & tasting', due: 'Maret 2027', meta: 'Detail pengalaman' },
    { title: 'Konfirmasi tamu final', due: 'Mei 2027', meta: 'Headcount pasti' },
    { title: 'Briefing hari H', due: 'Juni 2027', meta: 'Run-of-show' },
];

const guestRows = [
    { name: 'Budi Santoso', side: 'Mempelai wanita', rsvp: 'Diundang' },
    { name: 'Sari Dewi', side: 'Mempelai wanita', rsvp: 'Hadir' },
    { name: 'Andi Wijaya', side: 'Mempelai pria', rsvp: 'Mungkin' },
    { name: 'Rina Kartika', side: 'Keluarga', rsvp: 'Tidak' },
];

function formatIdr(n: number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(n);
}

export default function Welcome() {
    const [active, setActive] = useState<SectionId>('beranda');
    const [scrolled, setScrolled] = useState(false);
    const [checklist, setChecklist] = useState([
        { id: 1, title: 'Konfirmasi estimasi tamu dengan keluarga', done: false },
        { id: 2, title: 'Kumpulkan referensi moodboard', done: false },
        { id: 3, title: 'Jadwalkan meeting planner FG Wedding', done: true },
        { id: 4, title: 'Siapkan daftar prioritas vendor', done: false },
    ]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible?.target.id) {
                    setActive(visible.target.id as SectionId);
                }
            },
            { rootMargin: '-35% 0px -50% 0px', threshold: [0.15, 0.4] },
        );

        navItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    function scrollTo(id: SectionId) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActive(id);
    }

    const totalBudget = 250000000;
    const onHero = active === 'beranda' && !scrolled;

    return (
        <>
            <Head title="FG Wedding" />

            <div className="min-h-screen text-[var(--color-cream)]">
                <header
                    className={cn(
                        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
                        onHero ? 'bg-transparent' : 'nav-glass',
                    )}
                >
                    <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:px-8 lg:h-[4.25rem] lg:flex-row lg:items-center lg:justify-between lg:py-0">
                        <BrandMark
                            size="sm"
                            href="#beranda"
                            light
                            className="text-[var(--color-cream)] drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)]"
                        />
                        <nav className="-mx-1 flex gap-0.5 overflow-x-auto pb-0.5 lg:pb-0">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => scrollTo(item.id)}
                                    className={cn(
                                        'shrink-0 rounded-md px-3 py-2 text-[0.8125rem] tracking-wide transition-colors',
                                        active === item.id
                                            ? 'bg-[var(--color-cream)]/12 text-[var(--color-cream)]'
                                            : 'text-[var(--color-cream-muted)] hover:text-[var(--color-cream)]',
                                    )}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </header>

                {/* Hero */}
                <section
                    id="beranda"
                    className="relative isolate min-h-[100svh] scroll-mt-0 overflow-hidden"
                >
                    <img
                        src={HERO_IMAGE}
                        alt="Suasana pernikahan yang hangat"
                        className="img-kenburns absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(26,36,29,0.88)_0%,rgba(47,64,51,0.55)_45%,rgba(36,51,40,0.7)_100%)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deeper)] via-transparent to-[var(--color-deep)]/40" />

                    <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pt-32 pb-20 sm:px-8 sm:pb-24 lg:justify-center lg:pb-16">
                        <p className="eyebrow motion-safe:animate-fade-up">
                            Wedding Organizer · Jakarta
                        </p>
                        <BrandMark
                            size="hero"
                            light
                            href={null}
                            className="mt-4 text-[var(--color-cream)] drop-shadow-[0_4px_32px_rgba(0,0,0,0.45)] motion-safe:animate-fade-up"
                        />
                        <h1 className="sr-only">FG Wedding</h1>
                        <p
                            className="mt-6 max-w-lg font-display text-[clamp(1.65rem,3.8vw,2.5rem)] leading-[1.15] font-medium tracking-wide text-balance text-[var(--color-cream)] motion-safe:animate-fade-up"
                            style={{ animationDelay: '140ms' }}
                        >
                            Merancang hari yang tenang, indah, dan terencana.
                        </p>
                        <p
                            className="mt-5 max-w-md font-serif-body text-[1.05rem] leading-relaxed text-[var(--color-cream-muted)] motion-safe:animate-fade-up"
                            style={{ animationDelay: '240ms' }}
                        >
                            Vendor partner, paket resmi, anggaran, dan timeline —
                            dalam satu alur yang elegan.
                        </p>
                        <div
                            className="mt-10 flex flex-wrap gap-3 motion-safe:animate-fade-up"
                            style={{ animationDelay: '340ms' }}
                        >
                            <button
                                type="button"
                                onClick={() => scrollTo('vendor')}
                                className="group inline-flex min-h-12 items-center gap-3 rounded-md bg-[var(--color-bronze)] px-6 text-sm font-medium tracking-wide text-[var(--color-deeper)] transition-all hover:bg-[var(--color-bronze-deep)] hover:text-[var(--color-cream)]"
                            >
                                Jelajahi Vendor
                                <span
                                    aria-hidden
                                    className="transition-transform group-hover:translate-x-0.5"
                                >
                                    →
                                </span>
                            </button>
                            <button
                                type="button"
                                onClick={() => scrollTo('paket')}
                                className="inline-flex min-h-12 items-center rounded-md border border-[var(--color-cream)]/25 px-6 text-sm font-medium tracking-wide text-[var(--color-cream)] transition-colors hover:bg-[var(--color-cream)]/10"
                            >
                                Lihat Paket
                            </button>
                        </div>
                    </div>
                </section>

                {/* Vendor */}
                <section
                    id="vendor"
                    className="section-pad scroll-mt-24 border-t border-[var(--color-cream)]/8 bg-[var(--color-deep)] lg:scroll-mt-20"
                >
                    <div className="mx-auto max-w-6xl">
                        <HeaderBlock
                            eyebrow="Kurasi Partner"
                            title="Vendor yang kami percaya"
                            description="Setiap nama di bawah ini adalah mitra resmi FG Wedding — dipilih untuk kualitas, gaya, dan keandalan."
                        />

                        <div className="mt-16 space-y-16 md:space-y-24">
                            {vendors.map((v, i) => (
                                <article
                                    key={v.name}
                                    className={cn(
                                        'grid items-center gap-8 md:grid-cols-12 md:gap-10',
                                        i % 2 === 1 && 'md:[&>*:first-child]:order-2',
                                    )}
                                >
                                    <div className="md:col-span-7">
                                        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                                            <img
                                                src={v.image}
                                                alt={v.name}
                                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deeper)]/50 to-transparent" />
                                            <div className="absolute inset-0 ring-1 ring-[var(--color-cream)]/10 ring-inset" />
                                        </div>
                                    </div>
                                    <div className="md:col-span-5">
                                        <p className="eyebrow">
                                            {v.category} · {v.city}
                                        </p>
                                        <h3 className="mt-3 font-display text-3xl font-medium tracking-wide text-[var(--color-cream)] md:text-4xl">
                                            {v.name}
                                        </h3>
                                        <p className="mt-4 font-serif-body leading-relaxed text-[var(--color-cream-muted)]">
                                            {v.note}
                                        </p>
                                        <p className="mt-5 font-display text-xl text-[var(--color-bronze)]">
                                            {v.range}
                                        </p>
                                        <button
                                            type="button"
                                            className="mt-8 inline-flex min-h-11 items-center border-b border-[var(--color-bronze)] pb-1 text-sm font-medium tracking-wide text-[var(--color-bronze)] transition-opacity hover:opacity-70"
                                        >
                                            Tambah ke rencana
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Paket */}
                <section
                    id="paket"
                    className="section-pad scroll-mt-24 bg-[var(--color-deeper)] lg:scroll-mt-20"
                >
                    <div className="mx-auto max-w-6xl">
                        <HeaderBlock
                            eyebrow="Paket Resmi"
                            title="Pilihan yang rapi, tanpa ribet"
                            description="Tiga jalur jelas — dari intimate hingga full coordination — dengan inklusi yang transparan."
                        />

                        <div className="mt-16 grid gap-4 md:grid-cols-3">
                            {packages.map((p) => (
                                <div
                                    key={p.name}
                                    className={cn(
                                        'flex flex-col rounded-sm p-8 sm:p-10',
                                        p.featured
                                            ? 'bg-[var(--color-cream)] text-[var(--color-deeper)] shadow-[0_24px_60px_rgba(0,0,0,0.35)]'
                                            : 'surface-panel',
                                    )}
                                >
                                    <p
                                        className={cn(
                                            'eyebrow',
                                            p.featured
                                                ? 'text-[var(--color-bronze-deep)]'
                                                : undefined,
                                        )}
                                    >
                                        {p.featured ? 'Paling dipilih' : 'Paket'}
                                    </p>
                                    <h3
                                        className={cn(
                                            'mt-3 font-display text-3xl font-medium tracking-wide',
                                            p.featured
                                                ? 'text-[var(--color-deep)]'
                                                : 'text-[var(--color-cream)]',
                                        )}
                                    >
                                        {p.name}
                                    </h3>
                                    <p
                                        className={cn(
                                            'mt-6 font-display text-5xl font-medium tracking-tight',
                                            p.featured
                                                ? 'text-[var(--color-deep)]'
                                                : 'text-[var(--color-cream)]',
                                        )}
                                    >
                                        <span
                                            className={cn(
                                                'align-top text-lg',
                                                p.featured
                                                    ? 'text-[var(--color-bronze-deep)]'
                                                    : 'text-[var(--color-cream-muted)]',
                                            )}
                                        >
                                            Rp
                                        </span>
                                        {p.price}
                                        <span
                                            className={cn(
                                                'ml-1 text-lg',
                                                p.featured
                                                    ? 'text-[var(--color-bronze-deep)]'
                                                    : 'text-[var(--color-cream-muted)]',
                                            )}
                                        >
                                            jt
                                        </span>
                                    </p>
                                    <p
                                        className={cn(
                                            'mt-2 text-sm',
                                            p.featured
                                                ? 'text-[var(--color-deep)]/55'
                                                : 'text-[var(--color-cream-muted)]',
                                        )}
                                    >
                                        {p.unit ?? p.guests}
                                    </p>
                                    <ul
                                        className={cn(
                                            'mt-8 flex-1 space-y-3 border-t pt-8 font-serif-body',
                                            p.featured
                                                ? 'border-[var(--color-deep)]/10 text-[var(--color-deep)]/75'
                                                : 'border-[var(--color-cream)]/10 text-[var(--color-cream-muted)]',
                                        )}
                                    >
                                        {p.inclusions.map((inc) => (
                                            <li key={inc} className="flex gap-3">
                                                <span
                                                    className={cn(
                                                        'mt-2 h-1 w-1 shrink-0 rounded-full',
                                                        p.featured
                                                            ? 'bg-[var(--color-bronze-deep)]'
                                                            : 'bg-[var(--color-bronze)]',
                                                    )}
                                                />
                                                {inc}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        type="button"
                                        className={cn(
                                            'mt-10 min-h-11 rounded-md text-sm font-medium tracking-wide transition-colors',
                                            p.featured
                                                ? 'bg-[var(--color-deep)] text-[var(--color-cream)] hover:bg-[var(--color-bronze-deep)]'
                                                : 'border border-[var(--color-cream)]/20 text-[var(--color-cream)] hover:bg-[var(--color-cream)]/10',
                                        )}
                                    >
                                        Pilih paket
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Anggaran */}
                <section
                    id="anggaran"
                    className="section-pad scroll-mt-24 border-t border-[var(--color-cream)]/8 bg-[var(--color-deep)] lg:scroll-mt-20"
                >
                    <div className="mx-auto max-w-6xl">
                        <HeaderBlock
                            eyebrow="Keuangan"
                            title="Anggaran yang bisa dibaca"
                            description="Alokasi per kategori tetap terlihat — supaya keputusan tetap tenang."
                        />

                        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
                            <div className="surface-panel rounded-sm p-8 sm:p-10">
                                <p className="text-sm text-[var(--color-cream-muted)]">
                                    Total anggaran
                                </p>
                                <p className="mt-2 font-display text-4xl font-medium tracking-tight text-[var(--color-cream)] sm:text-5xl">
                                    {formatIdr(totalBudget)}
                                </p>
                                <p className="mt-4 font-serif-body text-[var(--color-cream-muted)]">
                                    Sisa belum dialokasikan:{' '}
                                    <span className="text-[var(--color-bronze)]">
                                        {formatIdr(
                                            totalBudget -
                                                budgetRows.reduce(
                                                    (s, r) => s + r.allocated,
                                                    0,
                                                ),
                                        )}
                                    </span>
                                </p>
                            </div>

                            <ul className="space-y-7">
                                {budgetRows.map((r) => (
                                    <li key={r.label}>
                                        <div className="mb-2 flex items-end justify-between gap-4">
                                            <span className="font-medium text-[var(--color-cream)]">
                                                {r.label}
                                            </span>
                                            <span className="font-mono text-xs text-[var(--color-cream-muted)]">
                                                {formatIdr(r.allocated)}
                                            </span>
                                        </div>
                                        <div className="h-[3px] overflow-hidden rounded-full bg-[var(--color-cream)]/10">
                                            <div
                                                className="h-full rounded-full bg-[var(--color-bronze)] transition-[width] duration-1000 ease-out"
                                                style={{ width: `${r.pct}%` }}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section
                    id="timeline"
                    className="section-pad scroll-mt-24 bg-[var(--color-deeper)] lg:scroll-mt-20"
                >
                    <div className="mx-auto max-w-6xl">
                        <HeaderBlock
                            eyebrow="Perjalanan"
                            title="Timeline menuju hari H"
                            description="Milestone mundur dari tanggal pernikahan — setiap tahap punya ruang bernapas."
                        />

                        <ol className="mt-16">
                            {milestones.map((m, i) => (
                                <li
                                    key={m.title}
                                    className="grid gap-4 border-t border-[var(--color-cream)]/10 py-8 md:grid-cols-[200px_1fr_1fr] md:items-baseline md:gap-8"
                                >
                                    <p className="font-mono text-xs tracking-wider text-[var(--color-bronze)]">
                                        {String(i + 1).padStart(2, '0')} · {m.due}
                                    </p>
                                    <h3 className="font-display text-2xl font-medium tracking-wide text-[var(--color-cream)] md:text-3xl">
                                        {m.title}
                                    </h3>
                                    <p className="font-serif-body text-[var(--color-cream-muted)] md:text-right">
                                        {m.meta}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Checklist */}
                <section
                    id="checklist"
                    className="section-pad scroll-mt-24 border-t border-[var(--color-cream)]/8 bg-[var(--color-deep)] lg:scroll-mt-20"
                >
                    <div className="mx-auto max-w-3xl">
                        <HeaderBlock
                            eyebrow="Persiapan"
                            title="Checklist yang ringan"
                            description="Tandai yang sudah selesai. Sisanya menunggu giliran."
                            center
                        />

                        <ul className="mt-12 space-y-2">
                            {checklist.map((item) => (
                                <li key={item.id}>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setChecklist((prev) =>
                                                prev.map((i) =>
                                                    i.id === item.id
                                                        ? { ...i, done: !i.done }
                                                        : i,
                                                ),
                                            )
                                        }
                                        className={cn(
                                            'flex w-full items-center gap-4 rounded-md px-4 py-4 text-left transition-colors',
                                            item.done
                                                ? 'bg-[var(--color-cream)]/5'
                                                : 'surface-panel hover:bg-[var(--color-paper-elevated)]/40',
                                        )}
                                    >
                                        <span
                                            className={cn(
                                                'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors',
                                                item.done
                                                    ? 'border-[var(--color-bronze)] bg-[var(--color-bronze)] text-[var(--color-deeper)]'
                                                    : 'border-[var(--color-cream)]/25',
                                            )}
                                            aria-hidden
                                        >
                                            {item.done ? (
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M2.5 6.5L4.8 8.8L9.5 3.5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.6"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            ) : null}
                                        </span>
                                        <span
                                            className={cn(
                                                'font-serif-body text-base',
                                                item.done
                                                    ? 'text-[var(--color-cream-muted)] line-through decoration-[var(--color-cream)]/25'
                                                    : 'text-[var(--color-cream)]',
                                            )}
                                        >
                                            {item.title}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Tamu */}
                <section
                    id="tamu"
                    className="section-pad scroll-mt-24 bg-[var(--color-deeper)] lg:scroll-mt-20"
                >
                    <div className="mx-auto max-w-6xl">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                            <HeaderBlock
                                eyebrow="Undangan"
                                title="Daftar tamu"
                                description="Kelola sisi keluarga dan status RSVP dengan rapi."
                                className="mb-0"
                            />
                            <button
                                type="button"
                                className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md bg-[var(--color-bronze)] px-5 text-sm font-medium tracking-wide text-[var(--color-deeper)] transition-colors hover:bg-[var(--color-bronze-deep)] hover:text-[var(--color-cream)]"
                            >
                                Tambah tamu
                            </button>
                        </div>

                        <div className="surface-panel mt-12 overflow-x-auto rounded-sm">
                            <table className="w-full min-w-[560px] text-left">
                                <thead>
                                    <tr className="border-b border-[var(--color-cream)]/10">
                                        <th className="eyebrow px-5 pt-5 pb-4 pr-6 font-medium normal-case tracking-[0.18em] sm:px-8">
                                            Nama
                                        </th>
                                        <th className="eyebrow pt-5 pb-4 pr-6 font-medium normal-case tracking-[0.18em]">
                                            Sisi
                                        </th>
                                        <th className="eyebrow px-5 pt-5 pb-4 font-medium normal-case tracking-[0.18em] sm:px-8">
                                            RSVP
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {guestRows.map((g) => (
                                        <tr
                                            key={g.name}
                                            className="border-b border-[var(--color-cream)]/8 transition-colors hover:bg-[var(--color-cream)]/4"
                                        >
                                            <td className="px-5 py-5 pr-6 font-display text-xl font-medium tracking-wide text-[var(--color-cream)] sm:px-8">
                                                {g.name}
                                            </td>
                                            <td className="py-5 pr-6 font-serif-body text-[var(--color-cream-muted)]">
                                                {g.side}
                                            </td>
                                            <td className="px-5 py-5 sm:px-8">
                                                <span
                                                    className={cn(
                                                        'inline-flex min-h-8 items-center rounded-full px-3 text-xs font-medium tracking-wide',
                                                        g.rsvp === 'Hadir' &&
                                                            'bg-[var(--color-bronze)]/20 text-[var(--color-bronze)]',
                                                        g.rsvp === 'Diundang' &&
                                                            'bg-[var(--color-cream)]/8 text-[var(--color-cream-muted)]',
                                                        g.rsvp === 'Mungkin' &&
                                                            'bg-[var(--color-bronze)]/10 text-[var(--color-bronze)]',
                                                        g.rsvp === 'Tidak' &&
                                                            'bg-[var(--color-cream)]/5 text-[var(--color-cream-muted)]',
                                                    )}
                                                >
                                                    {g.rsvp}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <footer className="border-t border-[var(--color-cream)]/8 bg-[var(--color-deeper)]">
                    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 sm:flex-row sm:items-end sm:justify-between sm:px-8">
                        <div>
                            <BrandMark
                                size="md"
                                href="#beranda"
                                light
                                className="text-[var(--color-cream)]"
                            />
                            <p className="mt-3 max-w-sm font-serif-body text-sm leading-relaxed text-[var(--color-cream-muted)]">
                                Atelier perencanaan pernikahan FG Wedding —
                                tenang, terkurasi, dan siap dieksekusi.
                            </p>
                        </div>
                        <p className="font-mono text-[0.6875rem] tracking-wider text-[var(--color-cream-muted)] uppercase">
                            © {new Date().getFullYear()} FG Wedding
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}

function HeaderBlock({
    eyebrow,
    title,
    description,
    center = false,
    className,
}: {
    eyebrow: string;
    title: string;
    description: string;
    center?: boolean;
    className?: string;
}) {
    return (
        <div className={cn('max-w-2xl', center && 'mx-auto text-center', className)}>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-medium tracking-wide text-balance text-[var(--color-cream)]">
                {title}
            </h2>
            <p className="mt-4 font-serif-body text-base leading-relaxed text-[var(--color-cream-muted)] sm:text-lg">
                {description}
            </p>
        </div>
    );
}
