import { AppLayout } from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const initial = [
    { id: 1, title: 'Konfirmasi estimasi tamu dengan keluarga', done: false },
    { id: 2, title: 'Kumpulkan referensi moodboard', done: false },
    { id: 3, title: 'Jadwalkan meeting planner FG Wedding', done: true },
    { id: 4, title: 'Siapkan daftar prioritas vendor', done: false },
];

export default function Checklist() {
    const [items, setItems] = useState(initial);

    function toggle(id: number) {
        setItems((prev) =>
            prev.map((i) => (i.id === id ? { ...i, done: !i.done } : i)),
        );
    }

    return (
        <>
            <Head title="Checklist" />
            <AppLayout
                title="Checklist"
                description="Tugas persiapan menuju hari H"
            >
                <ul className="divide-y divide-line">
                    {items.map((item) => (
                        <li key={item.id}>
                            <button
                                type="button"
                                onClick={() => toggle(item.id)}
                                className="flex min-h-14 w-full items-center gap-3 py-3 text-left"
                            >
                                <span
                                    className={
                                        item.done
                                            ? 'flex h-5 w-5 items-center justify-center rounded border border-success bg-success text-[10px] text-paper-elevated'
                                            : 'h-5 w-5 rounded border border-line'
                                    }
                                    aria-hidden
                                >
                                    {item.done ? '✓' : null}
                                </span>
                                <span
                                    className={
                                        item.done
                                            ? 'text-ink-muted line-through'
                                            : 'text-ink'
                                    }
                                >
                                    {item.title}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </AppLayout>
        </>
    );
}
