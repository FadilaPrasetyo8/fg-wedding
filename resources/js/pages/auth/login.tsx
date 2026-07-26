import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthLayout } from '@/layouts/auth-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        post('/login');
    }

    return (
        <>
            <Head title="Masuk" />
            <AuthLayout
                title="Masuk"
                subtitle="Login untuk mengakses FG Wedding AI Blueprint."
            >
                <form onSubmit={handleSubmit} className="space-y-5">
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
                            autoComplete="current-password"
                            required
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="••••••••"
                        />
                        {errors.password ? (
                            <p className="mt-1.5 text-sm text-red-300">
                                {errors.password}
                            </p>
                        ) : null}
                    </div>
                    <label className="flex items-center gap-2 text-sm text-[var(--color-cream-muted)]">
                        <input
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                            className="rounded border-[var(--color-cream)]/30"
                        />
                        Ingat saya
                    </label>
                    <Button
                        type="submit"
                        className="w-full"
                        size="lg"
                        disabled={processing}
                    >
                        {processing ? 'Masuk…' : 'Masuk'}
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
