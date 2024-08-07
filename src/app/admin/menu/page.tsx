'use client';
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lEWTObiErFn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { useState } from 'react';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

export default function Component() {
    const [menuItems, setMenuItems] = useState([
        {
            id: 1,
            name: 'Beef Burger',
            description: 'Juicy beef patty, lettuce, tomato, onion',
            price: '$12.99',
            category: 'Burgers',
        },
        {
            id: 2,
            name: 'Margherita Pizza',
            description: 'Tomato sauce, mozzarella, basil',
            price: '$14.99',
            category: 'Pizza',
        },
        {
            id: 3,
            name: 'Caesar Salad',
            description: 'Romaine lettuce, croutons, parmesan, caesar dressing',
            price: '$9.99',
            category: 'Salads',
        },
    ]);

    const [newMenuItem, setNewMenuItem] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
    });

    const [editingMenuItem, setEditingMenuItem] = useState<any>(null);

    const handleCreateMenuItem = () => {
        setMenuItems([...menuItems, { ...newMenuItem, id: menuItems.length + 1 }]);
        setNewMenuItem({
            name: '',
            description: '',
            price: '',
            category: '',
        });
    };

    const handleUpdateMenuItem = () => {
        const updatedMenuItems = menuItems.map((item) => (item.id === editingMenuItem.id ? editingMenuItem : item));
        setMenuItems(updatedMenuItems);
        setEditingMenuItem(null);
    };

    const handleDeleteMenuItem = (id: any) => {
        setMenuItems(menuItems.filter((item) => item.id !== id));
    };

    const handleEditMenuItem = (item: any) => {
        setEditingMenuItem(item);
    };

    const handleNewMenuItemChange = (field: any, value: any) => {
        setNewMenuItem({ ...newMenuItem, [field]: value });
    };

    const handleEditingMenuItemChange = (field: any, value: any) => {
        setEditingMenuItem({ ...editingMenuItem, [field]: value });
    };

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                        prefetch={false}
                    >
                        <MenuIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                        <span className="sr-only">Acme Restaurant</span>
                    </Link>
                    <h1 className="text-lg font-bold">Acme Restaurant</h1>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                                <img
                                    src="/placeholder.svg"
                                    width={36}
                                    height={36}
                                    alt="Avatar"
                                    className="overflow-hidden rounded-full"
                                    style={{ aspectRatio: '36/36', objectFit: 'cover' }}
                                />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Admin</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="/admin"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                        prefetch={false}
                                    >
                                        <ViewIcon className="h-5 w-5" />
                                        <span className="sr-only">Overview</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">Overview</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="#"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                        prefetch={false}
                                    >
                                        <CommandIcon className="h-5 w-5" />
                                        <span className="sr-only">Orders</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">Orders</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="/admin/staff"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                        prefetch={false}
                                    >
                                        <UsersIcon className="h-5 w-5" />
                                        <span className="sr-only">Staff</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">Staff</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="/admin/menu"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                        prefetch={false}
                                    >
                                        <MenuIcon className="h-5 w-5" />
                                        <span className="sr-only">Menu</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">Menu</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="#"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                        prefetch={false}
                                    >
                                        <SettingsIcon className="h-5 w-5" />
                                        <span className="sr-only">Settings</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">Settings</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </nav>
                </aside>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <div className="col-span-2 lg:col-span-3">
                        <Card className="my-10 border-white">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Menu Management</CardTitle>
                                <Button variant="outline" size="sm" className="h-8 gap-1">
                                    <PlusIcon className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Menu Item</span>
                                </Button>
                            </CardHeader>
                            <CardContent>
                                {/* <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Item</TableHead>
                                            <TableHead>Description</TableHead>
                                            <TableHead>Price</TableHead>
                                            <TableHead>Category</TableHead>
                                            <TableHead>Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Beef Burger</TableCell>
                                            <TableCell>Juicy beef patty, lettuce, tomato, onion</TableCell>
                                            <TableCell className="text-right">$12.99</TableCell>
                                            <TableCell>Burgers</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="outline" size="icon">
                                                        <FilePenIcon className="h-4 w-4" />
                                                        <span className="sr-only">Edit</span>
                                                    </Button>
                                                    <Button variant="outline" size="icon" className="text-red-500">
                                                        <TrashIcon className="h-4 w-4" />
                                                        <span className="sr-only">Delete</span>
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Margherita Pizza</TableCell>
                                            <TableCell>Tomato sauce, mozzarella, basil</TableCell>
                                            <TableCell className="text-right">$14.99</TableCell>
                                            <TableCell>Pizza</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="outline" size="icon">
                                                        <FilePenIcon className="h-4 w-4" />
                                                        <span className="sr-only">Edit</span>
                                                    </Button>
                                                    <Button variant="outline" size="icon" className="text-red-500">
                                                        <TrashIcon className="h-4 w-4" />
                                                        <span className="sr-only">Delete</span>
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Caesar Salad</TableCell>
                                            <TableCell>Romaine lettuce, croutons, parmesan, caesar dressing</TableCell>
                                            <TableCell className="text-right">$9.99</TableCell>
                                            <TableCell>Salads</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="outline" size="icon">
                                                        <FilePenIcon className="h-4 w-4" />
                                                        <span className="sr-only">Edit</span>
                                                    </Button>
                                                    <Button variant="outline" size="icon" className="text-red-500">
                                                        <TrashIcon className="h-4 w-4" />
                                                        <span className="sr-only">Delete</span>
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Chicken Teriyaki</TableCell>
                                            <TableCell>Grilled chicken, teriyaki sauce, steamed rice</TableCell>
                                            <TableCell className="text-right">$13.99</TableCell>
                                            <TableCell>Entrees</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="outline" size="icon">
                                                        <FilePenIcon className="h-4 w-4" />
                                                        <span className="sr-only">Edit</span>
                                                    </Button>
                                                    <Button variant="outline" size="icon" className="text-red-500">
                                                        <TrashIcon className="h-4 w-4" />
                                                        <span className="sr-only">Delete</span>
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Chocolate Cake</TableCell>
                                            <TableCell>Rich chocolate cake with chocolate frosting</TableCell>
                                            <TableCell className="text-right">$6.99</TableCell>
                                            <TableCell>Desserts</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="outline" size="icon">
                                                        <FilePenIcon className="h-4 w-4" />
                                                        <span className="sr-only">Edit</span>
                                                    </Button>
                                                    <Button variant="outline" size="icon" className="text-red-500">
                                                        <TrashIcon className="h-4 w-4" />
                                                        <span className="sr-only">Delete</span>
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table> */}
                                <div>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Name</TableHead>
                                                <TableHead>Description</TableHead>
                                                <TableHead>Price</TableHead>
                                                <TableHead>Category</TableHead>
                                                <TableHead>Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {menuItems.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell className="font-medium">{item.name}</TableCell>
                                                    <TableCell>{item.description}</TableCell>
                                                    <TableCell className="text-right">{item.price}</TableCell>
                                                    <TableCell>{item.category}</TableCell>
                                                    <TableCell>
                                                        <div className="flex items-center gap-2">
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                onClick={() => handleEditMenuItem(item)}
                                                            >
                                                                <FilePenIcon className="h-4 w-4" />
                                                                <span className="sr-only">Edit {item.name}</span>
                                                            </Button>
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="text-red-500"
                                                                onClick={() => handleDeleteMenuItem(item.id)}
                                                            >
                                                                <TrashIcon className="h-4 w-4" />
                                                                <span className="sr-only">Delete {item.name}</span>
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardContent>
                        </Card>
                        {/* Form for creating a new menu item or editing an existing one */}
                        <Card className="my-10 border-white">
                            <CardHeader>
                                <CardTitle>Menu Item</CardTitle>
                                <CardDescription>Create or edit a menu item.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Enter menu item name" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            id="description"
                                            placeholder="Enter a description for the menu item"
                                            className="min-h-[100px]"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="price">Price</Label>
                                            <Input id="price" type="number" placeholder="Enter price" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="category">Category</Label>
                                            <Select id="category">
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="appetizer">Appetizer</SelectItem>
                                                    <SelectItem value="entree">Entree</SelectItem>
                                                    <SelectItem value="dessert">Dessert</SelectItem>
                                                    <SelectItem value="beverage">Beverage</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-end gap-2">
                                <Button variant="outline">Cancel</Button>
                                <Button>Save</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
}

function CommandIcon(props: any) {
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
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
        </svg>
    );
}

function FilePenIcon(props: any) {
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
            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
        </svg>
    );
}

function MenuIcon(props: any) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

function PlusIcon(props: any) {
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    );
}

function SettingsIcon(props: any) {
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
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

function TrashIcon(props: any) {
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
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
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

function ViewIcon(props: any) {
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
            <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
            <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
            <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
        </svg>
    );
}
