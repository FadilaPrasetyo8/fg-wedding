import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthLayout } from '@/layouts/auth-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        post('/register');
    }

    return (
        <>
            <Head title="Daftar" />
            <AuthLayout
                title="Buat akun"
                subtitle="Daftar untuk memakai FG Wedding AI Blueprint."
            >
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <Label htmlFor="name">Nama</Label>
                        <Input
                            id="name"
                            type="text"
                            autoComplete="name"
                            required
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Alya Putri"
                        />
                        {errors.name ? (
                            <p className="mt-1.5 text-sm text-red-300">
                                {errors.name}
                            </p>
                        ) : null}
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="nama@email.com"
                        />
                        {errors.email ? (
                            <p className="mt-1.5 text-sm text-red-300">
                                {errors.email}
                            </p>
                        ) : null}
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            minLength={8}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Minimal 8 karakter"
                        />
                        {errors.password ? (
                            <p className="mt-1.5 text-sm text-red-300">
                                {errors.password}
                            </p>
                        ) : null}
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
                            minLength={8}
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            placeholder="Ulangi password"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        size="lg"
                        disabled={processing}
                    >
                        {processing ? 'Mendaftar…' : 'Daftar'}
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
