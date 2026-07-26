import { AppLayout } from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const milestones = [
    { title: 'Booking paket & venue', due: 'Sep 2026', status: 'todo' },
    { title: 'Finalisasi vendor inti', due: 'Nov 2026', status: 'todo' },
    { title: 'Fitting & tasting', due: 'Mar 2027', status: 'todo' },
    { title: 'Konfirmasi tamu final', due: 'Mei 2027', status: 'todo' },
    { title: 'Briefing hari H', due: 'Jun 2027', status: 'todo' },
];

export default function Timeline() {
    return (
        <>
            <Head title="Timeline" />
            <AppLayout
                title="Timeline"
                description="Milestone mundur dari hari H"
            >
                <ol className="space-y-0">
                    {milestones.map((m, i) => (
                        <li key={m.title} className="relative flex gap-5 pb-10 last:pb-0">
                            <div className="flex flex-col items-center">
                                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-brand" />
                                {i < milestones.length - 1 ? (
                                    <span className="mt-1 w-px flex-1 bg-brand/25" />
                                ) : null}
                            </div>
                            <div className="-mt-1">
                                <p className="font-mono text-xs text-ink-muted">
                                    {m.due}
                                </p>
                                <h2 className="mt-1 font-display text-xl font-medium text-ink">
                                    {m.title}
                                </h2>
                                <p className="mt-1 text-sm text-ink-muted capitalize">
                                    {m.status}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </AppLayout>
        </>
    );
}
