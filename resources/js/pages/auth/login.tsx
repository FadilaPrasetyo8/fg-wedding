import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthLayout } from '@/layouts/auth-layout';
import { Head, Link, router } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        // Auth backend belum aktif — kembali ke beranda
        router.visit('/');
    }

    return (
        <>
            <Head title="Masuk" />
            <AuthLayout
                title="Masuk"
                subtitle="Lanjutkan perencanaan pernikahan Anda."
            >
                <form onSubmit={handleSubmit} className="space-y-5">
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
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                        Masuk
                    </Button>
                </form>
                <p className="mt-6 text-sm text-[var(--color-cream-muted)]">
                    Belum punya akun?{' '}
                    <Link
                        href="/register"
                        className="font-medium text-[var(--color-bronze)] underline-offset-4 hover:underline"
                    >
                        Daftar
                    </Link>
                </p>
            </AuthLayout>
        </>
    );
}
