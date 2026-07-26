import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AppLayout } from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

const priorities = [
    'Fotografi',
    'Katering',
    'Dekorasi',
    'Venue',
    'Hiburan',
    'Makeup & attire',
];

export default function Blueprint() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <>
            <Head title="AI Wedding Blueprint" />
            <AppLayout
                title="AI Wedding Blueprint"
                description="Form preferensi → rencana terstruktur. Bukan chatbot."
            >
                {!submitted ? (
                    <form
                        onSubmit={handleSubmit}
                        className="mx-auto max-w-2xl space-y-8 motion-safe:animate-fade-up"
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <Label htmlFor="wedding_date">Tanggal pernikahan</Label>
                                <Input id="wedding_date" type="date" required />
                            </div>
                            <div>
                                <Label htmlFor="city">Kota</Label>
                                <Input
                                    id="city"
                                    required
                                    placeholder="Jakarta"
                                    list="cities"
                                />
                                <datalist id="cities">
                                    {[
                                        'Jakarta',
                                        'Bandung',
                                        'Surabaya',
                                        'Bali',
                                        'Yogyakarta',
                                        'Medan',
                                        'Makassar',
                                        'Semarang',
                                    ].map((c) => (
                                        <option key={c} value={c} />
                                    ))}
                                </datalist>
                            </div>
                            <div>
                                <Label htmlFor="guest_count">Jumlah tamu</Label>
                                <Input
                                    id="guest_count"
                                    type="number"
                                    min={1}
                                    required
                                    placeholder="300"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="budget">Anggaran (IDR)</Label>
                                <Input
                                    id="budget"
                                    type="number"
                                    min={1}
                                    required
                                    placeholder="250000000"
                                />
                            </div>
                            <div>
                                <Label htmlFor="venue_type">Tipe venue</Label>
                                <select
                                    id="venue_type"
                                    required
                                    className="min-h-11 w-full rounded-lg border border-line bg-paper-elevated px-3.5 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Pilih
                                    </option>
                                    <option value="indoor">Indoor</option>
                                    <option value="outdoor">Outdoor</option>
                                    <option value="mixed">Campuran</option>
                                </select>
                            </div>
                            <div>
                                <Label htmlFor="style">Gaya</Label>
                                <select
                                    id="style"
                                    required
                                    className="min-h-11 w-full rounded-lg border border-line bg-paper-elevated px-3.5 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Pilih
                                    </option>
                                    <option value="traditional">Tradisional</option>
                                    <option value="modern">Modern</option>
                                    <option value="fusion">Fusion</option>
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="theme">Tema</Label>
                                <Input
                                    id="theme"
                                    placeholder="Garden elegance"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="colors">Warna pilihan</Label>
                                <Input
                                    id="colors"
                                    placeholder="Champagne, sage hijau"
                                />
                            </div>
                        </div>

                        <fieldset>
                            <legend className="mb-3 text-sm font-medium text-ink">
                                Prioritas
                            </legend>
                            <div className="flex flex-wrap gap-2">
                                {priorities.map((p) => (
                                    <label
                                        key={p}
                                        className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-lg border border-line px-3 text-sm hover:bg-brand-soft/40 has-[:checked]:border-brand has-[:checked]:bg-brand-soft"
                                    >
                                        <input
                                            type="checkbox"
                                            name="priorities"
                                            value={p}
                                            className="accent-brand"
                                        />
                                        {p}
                                    </label>
                                ))}
                            </div>
                        </fieldset>

                        <div>
                            <Label htmlFor="notes">Catatan</Label>
                            <textarea
                                id="notes"
                                rows={3}
                                className="w-full rounded-lg border border-line bg-paper-elevated px-3.5 py-2.5 text-ink placeholder:text-ink-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                                placeholder="Misalnya: akad intim bersama keluarga dekat."
                            />
                        </div>

                        <Button type="submit" variant="accent" size="lg">
                            Generate Wedding Blueprint
                        </Button>
                    </form>
                ) : (
                    <div className="space-y-14 motion-safe:animate-fade-up">
                        <div className="flex flex-wrap gap-3">
                            <Button variant="accent">Terapkan ke Wedding</Button>
                            <Button
                                variant="secondary"
                                onClick={() => setSubmitted(false)}
                            >
                                Edit preferensi
                            </Button>
                            <Button
                                variant="ghost"
                                onClick={() => setSubmitted(false)}
                            >
                                Generate ulang
                            </Button>
                        </div>

                        <BlueprintSection title="Ringkasan">
                            Pernikahan indoor modern di Jakarta untuk ~300 tamu,
                            dengan fokus fotografi, katering, dan dekorasi
                            garden-elegant dalam anggaran yang Anda tetapkan.
                        </BlueprintSection>

                        <BlueprintSection title="Tema">
                            <p className="font-display text-2xl text-ink">
                                Garden Elegance
                            </p>
                            <p className="mt-2 text-ink-muted">
                                Botani lembut modern dengan netral hangat —
                                preview UI (AI backend belum terhubung).
                            </p>
                        </BlueprintSection>

                        <BlueprintSection title="Palet warna">
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { name: 'Champagne', hex: '#E8D5C4' },
                                    { name: 'Deep Sage', hex: '#2F3E46' },
                                    { name: 'Ivory', hex: '#F7F3EE' },
                                    { name: 'Bronze', hex: '#9A6B4F' },
                                ].map((c) => (
                                    <div key={c.hex} className="w-24">
                                        <div
                                            className="h-16 w-full rounded-lg border border-line"
                                            style={{ backgroundColor: c.hex }}
                                            title={c.hex}
                                        />
                                        <p className="mt-2 text-sm font-medium">
                                            {c.name}
                                        </p>
                                        <p className="font-mono text-xs text-ink-muted">
                                            {c.hex}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </BlueprintSection>

                        <BlueprintSection title="Rekomendasi vendor">
                            <ul className="divide-y divide-line">
                                {[
                                    'Venue partner — cocok kapasitas & indoor',
                                    'Dekorasi — gaya garden elegant',
                                    'Fotografi — prioritas Anda',
                                    'Katering — sesuai jumlah tamu',
                                ].map((v) => (
                                    <li
                                        key={v}
                                        className="flex min-h-12 items-center justify-between py-3"
                                    >
                                        <span>{v}</span>
                                        <span className="text-sm text-ink-muted">
                                            Preview
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </BlueprintSection>

                        <BlueprintSection title="Paket">
                            <p>
                                Jakarta Gold Package — cocok untuk rentang tamu
                                dan kota Anda (preview UI).
                            </p>
                        </BlueprintSection>

                        <BlueprintSection title="Alokasi anggaran">
                            <BudgetBar label="Venue" pct={32} />
                            <BudgetBar label="Katering" pct={36} />
                            <BudgetBar label="Dekorasi" pct={18} />
                            <BudgetBar label="Dokumentasi" pct={14} />
                        </BlueprintSection>

                        <BlueprintSection title="Timeline">
                            <ol className="space-y-4 border-l border-brand/30 pl-5">
                                {[
                                    'Booking paket & venue',
                                    'Finalisasi vendor inti',
                                    'Fitting & tasting',
                                    'Konfirmasi tamu final',
                                ].map((t) => (
                                    <li key={t} className="relative">
                                        <span className="absolute top-1.5 -left-[1.4rem] h-2.5 w-2.5 rounded-full bg-brand" />
                                        {t}
                                    </li>
                                ))}
                            </ol>
                        </BlueprintSection>

                        <BlueprintSection title="Checklist">
                            <ul className="space-y-2">
                                {[
                                    'Konfirmasi estimasi tamu dengan keluarga',
                                    'Kumpulkan referensi moodboard',
                                    'Jadwalkan meeting dengan planner FG Wedding',
                                ].map((c) => (
                                    <li key={c} className="flex gap-3">
                                        <span className="mt-1 h-4 w-4 shrink-0 rounded border border-line" />
                                        {c}
                                    </li>
                                ))}
                            </ul>
                        </BlueprintSection>
                    </div>
                )}
            </AppLayout>
        </>
    );
}

function BlueprintSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="border-t border-line pt-8">
            <h2 className="font-display text-2xl font-medium tracking-wide text-brand">
                {title}
            </h2>
            <div className="mt-4 font-serif-body text-ink">{children}</div>
        </section>
    );
}

function BudgetBar({ label, pct }: { label: string; pct: number }) {
    return (
        <div className="mb-4">
            <div className="mb-1.5 flex justify-between text-sm">
                <span>{label}</span>
                <span className="font-mono text-ink-muted">{pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-brand-soft">
                <div
                    className="h-full rounded-full bg-brand transition-[width] duration-700 ease-out"
                    style={{ width: `${pct}%` }}
                />
            </div>
        </div>
    );
}
