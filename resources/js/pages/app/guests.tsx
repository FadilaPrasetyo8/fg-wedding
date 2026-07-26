import { Button } from '@/components/ui/button';
import { AppLayout } from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const guests = [
    { name: 'Budi Santoso', side: 'Mempelai wanita', rsvp: 'Diundang' },
    { name: 'Sari Dewi', side: 'Mempelai wanita', rsvp: 'Ya' },
    { name: 'Andi Wijaya', side: 'Mempelai pria', rsvp: 'Mungkin' },
    { name: 'Rina Kartika', side: 'Keluarga', rsvp: 'Tidak' },
];

export default function Guests() {
    return (
        <>
            <Head title="Tamu" />
            <AppLayout title="Daftar Tamu" description="Kelola undangan & RSVP">
                <div className="mb-8 flex justify-end">
                    <Button variant="primary">Tambah tamu</Button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[520px] text-left text-sm">
                        <thead>
                            <tr className="border-b border-line text-ink-muted">
                                <th className="py-3 pr-4 font-medium">Nama</th>
                                <th className="py-3 pr-4 font-medium">Sisi</th>
                                <th className="py-3 font-medium">RSVP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {guests.map((g) => (
                                <tr
                                    key={g.name}
                                    className="border-b border-line/70"
                                >
                                    <td className="py-3.5 pr-4 font-medium text-ink">
                                        {g.name}
                                    </td>
                                    <td className="py-3.5 pr-4 text-ink-muted">
                                        {g.side}
                                    </td>
                                    <td className="py-3.5 text-ink-muted">
                                        {g.rsvp}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AppLayout>
        </>
    );
}
