import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthLayout } from '@/layouts/auth-layout';
import { Head, Link, router } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        // Auth backend belum aktif — kembali ke beranda
        router.visit('/');
    }

    return (
        <>
            <Head title="Daftar" />
            <AuthLayout
                title="Buat akun"
                subtitle="Mulai perencanaan pernikahan bersama FG Wedding."
            >
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <Label htmlFor="name">Nama</Label>
                        <Input
                            id="name"
                            type="text"
                            autoComplete="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Alya Putri"
                        />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="nama@email.com"
                        />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            minLength={10}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Minimal 10 karakter"
                        />
                    </div>
                    <div>
                        <Label htmlFor="password_confirmation">
                            Konfirmasi password
                        </Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            autoComplete="new-password"
                            required
                            minLength={10}
                            value={passwordConfirmation}
                            onChange={(e) =>
                                setPasswordConfirmation(e.target.value)
                            }
                            placeholder="Ulangi password"
                        />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                        Daftar
                    </Button>
                </form>
                <p className="mt-6 text-sm text-[var(--color-cream-muted)]">
                    Sudah punya akun?{' '}
                    <Link
                        href="/login"
                        className="font-medium text-[var(--color-bronze)] underline-offset-4 hover:underline"
                    >
                        Masuk
                    </Link>
                </p>
            </AuthLayout>
        </>
    );
}
