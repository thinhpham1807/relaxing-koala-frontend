'use client';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Component() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === 'admin@admin' && password === '1') {
            router.push('/admin');
        } else if (password === '1') {
            router.push('/landing');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="flex min-h-[100dvh] items-center justify-center bg-[url('/subtle-pattern.svg')] bg-[length:50px_50px] bg-repeat px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-md space-y-6 rounded-lg bg-slate-200 p-6 shadow-lg">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold text-black">Welcome Back</h1>
                    <p className="text-black text-muted-foreground">Enter your email and password to sign in.</p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-black">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="admin@admin"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        {/* <p>Admin: admin@admin (pwd: 1)</p>
                        <p>Customer: your email (pwd: 1)</p> */}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-black">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Sign In
                    </Button>
                </form>
                <div className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{' '}
                    <Link href="#" className="underline" prefetch={false}>
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}
