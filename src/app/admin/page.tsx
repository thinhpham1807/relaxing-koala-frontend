import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Component() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-gray-900 text-white">
            <header className="flex h-16 shrink-0 items-center border-b border-gray-700 px-4 md:px-6">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                        prefetch={false}
                    >
                        <MountainIcon className="h-6 w-6" />
                        <span className="sr-only">Restaurant Admin</span>
                    </Link>
                    <Link href="#" className="font-bold" prefetch={false}>
                        Dashboard
                    </Link>
                    <Link href="#" className="text-muted-foreground" prefetch={false}>
                        Orders
                    </Link>
                    <Link href="#" className="text-muted-foreground" prefetch={false}>
                        Products
                    </Link>
                    <Link href="#" className="text-muted-foreground" prefetch={false}>
                        Customers
                    </Link>
                </nav>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="border-gray-700 bg-gray-800 pl-8 text-white sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </form>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Avatar>
                            <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                            <AvatarFallback>Av</AvatarFallback>
                        </Avatar>
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <BellIcon className="h-6 w-6 text-muted-foreground" />
                        <span className="sr-only">Notifications</span>
                    </Button>
                </div>
            </header>
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$45,231.89</div>
                            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                            <UsersIcon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+2350</div>
                            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Sales</CardTitle>
                            <CreditCardIcon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+12,234</div>
                            <p className="text-xs text-muted-foreground">+19% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                            <ActivityIcon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-xs text-muted-foreground">+201 since last hour</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Top Selling Products</CardTitle>
                            <Link href="#" className="text-xs text-muted-foreground" prefetch={false}>
                                View All
                            </Link>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder-user.jpg" alt="Product Image" />
                                    <AvatarFallback>Prod</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-medium">Acme Widget</div>
                                    <div className="text-xs text-muted-foreground">SKU: 123456</div>
                                </div>
                                <div className="ml-auto">$19.99</div>
                            </div>
                            <div className="mt-4 flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder-user.jpg" alt="Product Image" />
                                    <AvatarFallback>Prod</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-medium">Acme Gadget</div>
                                    <div className="text-xs text-muted-foreground">SKU: 654321</div>
                                </div>
                                <div className="ml-auto">$29.99</div>
                            </div>
                            <div className="mt-4 flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder-user.jpg" alt="Product Image" />
                                    <AvatarFallback>Prod</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-medium">Acme Thingamajig</div>
                                    <div className="text-xs text-muted-foreground">SKU: 987654</div>
                                </div>
                                <div className="ml-auto">$39.99</div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Recent Orders</CardTitle>
                            <Link href="#" className="text-xs text-muted-foreground" prefetch={false}>
                                View All
                            </Link>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-4">
                                <div className="text-lg font-bold">#1</div>
                                <div>
                                    <div className="font-medium">John Doe</div>
                                    <div className="text-xs text-muted-foreground">Order #12345</div>
                                </div>
                                <div className="ml-auto">$99.99</div>
                            </div>
                            <div className="mt-4 flex items-center space-x-4">
                                <div className="text-lg font-bold">#2</div>
                                <div>
                                    <div className="font-medium">Jane Smith</div>
                                    <div className="text-xs text-muted-foreground">Order #54321</div>
                                </div>
                                <div className="ml-auto">$79.99</div>
                            </div>
                            <div className="mt-4 flex items-center space-x-4">
                                <div className="text-lg font-bold">#3</div>
                                <div>
                                    <div className="font-medium">Bob Johnson</div>
                                    <div className="text-xs text-muted-foreground">Order #98765</div>
                                </div>
                                <div className="ml-auto">$59.99</div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                            <Link href="#" className="text-xs text-muted-foreground" prefetch={false}>
                                View All
                            </Link>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder-user.jpg" alt="Customer Image" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-medium">John Doe</div>
                                    <div className="text-xs text-muted-foreground">Joined 1 week ago</div>
                                </div>
                                <Button variant="outline" size="sm" className="ml-auto">
                                    View
                                </Button>
                            </div>
                            <div className="mt-4 flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder-user.jpg" alt="Customer Image" />
                                    <AvatarFallback>JS</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-medium">Jane Smith</div>
                                    <div className="text-xs text-muted-foreground">Joined 2 weeks ago</div>
                                </div>
                                <Button variant="outline" size="sm" className="ml-auto">
                                    View
                                </Button>
                            </div>
                            <div className="mt-4 flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder-user.jpg" alt="Customer Image" />
                                    <AvatarFallback>BJ</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-medium">Bob Johnson</div>
                                    <div className="text-xs text-muted-foreground">Joined 3 weeks ago</div>
                                </div>
                                <Button variant="outline" size="sm" className="ml-auto">
                                    View
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}

function ActivityIcon(props: any) {
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
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
        </svg>
    );
}

function BellIcon(props: any) {
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
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    );
}

function CreditCardIcon(props: any) {
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
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    );
}

function DollarSignIcon(props: any) {
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
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    );
}

function MountainIcon(props: any) {
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
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}

function SearchIcon(props: any) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
}

function UsersIcon(props: any) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}
