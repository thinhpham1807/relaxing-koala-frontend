/**
 * v0 by Vercel.
 * @see https://v0.dev/t/h5gY9MhzVYS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Component() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Payment Successful</CardTitle>
                    <CardDescription>Your order has been processed</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-4 py-8">
                    <CircleCheckIcon className="size-12 text-green-500" />
                    <p className="text-lg font-medium">Your payment was successful!</p>
                    <p className="text-muted-foreground">Your order has been processed and is on its way.</p>
                </CardContent>
                <CardFooter>
                    <Link className="w-full bg-red-400" href="/menu">
                        <Button className="w-full bg-red-400">Back to Menu</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}

function CircleCheckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
