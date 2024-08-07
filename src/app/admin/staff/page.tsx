/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XEq3zEYlGsT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { CheckboxGroup, CheckboxItem } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

export default function Component() {
    const [staff, setStaff] = useState([
        {
            id: 1,
            name: 'John Doe',
            role: 'Manager',
            email: 'john.doe@restaurant.com',
            phone: '555-1234',
            permissions: ['view', 'edit', 'delete'],
            image: '/images/avatar1',
            notes: 'Has 5 years of experience in the industry.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'Server',
            email: 'jane.smith@restaurant.com',
            phone: '555-5678',
            permissions: ['view', 'edit'],
            image: '/images/avatar2.jpg',
            notes: 'Excellent customer service skills.',
        },
        {
            id: 3,
            name: 'Bob Johnson',
            role: 'Chef',
            email: 'bob.johnson@restaurant.com',
            phone: '555-9012',
            permissions: ['view', 'edit'],
            image: '/images/avatar3.jpg',
            notes: 'Specializes in Italian cuisine.',
        },
    ]);
    const [newStaff, setNewStaff] = useState({
        name: '',
        role: '',
        email: '',
        phone: '',
        permissions: [],
        image: '',
        notes: '',
    });
    const [editingStaff, setEditingStaff] = useState<any>(null);
    const handleCreateStaff = () => {
        setStaff([...staff, { ...newStaff, id: staff.length + 1 }]);
        setNewStaff({
            name: '',
            role: '',
            email: '',
            phone: '',
            permissions: [],
            image: '',
            notes: '',
        });
    };
    const handleUpdateStaff = () => {
        const updatedStaff = staff.map((s) => (s.id === editingStaff.id ? editingStaff : s));
        setStaff(updatedStaff);
        setEditingStaff(null);
    };
    const handleDeleteStaff = (id: any) => {
        setStaff(staff.filter((s) => s.id !== id));
    };
    const handleEditStaff = (staff: any) => {
        setEditingStaff(staff);
    };
    const handleNewStaffChange = (field: any, value: any) => {
        setNewStaff({ ...newStaff, [field]: value });
    };
    const handleEditingStaffChange = (field: any, value: any) => {
        setEditingStaff({ ...editingStaff, [field]: value });
    };
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="mb-6 text-3xl font-bold text-black">Staff Management</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {staff.map((s) => (
                        <Card key={s.id} className="rounded-lg bg-white text-black shadow-md">
                            <div className="flex items-center p-4">
                                <img
                                    src="/placeholder.svg"
                                    alt={s.name}
                                    width={64}
                                    height={64}
                                    className="mr-4 rounded-full"
                                    style={{ aspectRatio: '64/64', objectFit: 'cover' }}
                                />
                                <div>
                                    <h2 className="text-lg font-bold">{s.name}</h2>
                                    <p className="text-gray-500">{s.role}</p>
                                </div>
                                <div className="ml-auto">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="bg-white"
                                        onClick={() => handleEditStaff(s)}
                                    >
                                        <FilePenIcon className="h-5 w-5" />
                                        <span className="sr-only">Edit {s.name}</span>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="bg-white"
                                        onClick={() => handleDeleteStaff(s.id)}
                                    >
                                        <TrashIcon className="h-5 w-5" />
                                        <span className="sr-only">Delete {s.name}</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="border-t p-4">
                                <p className="mb-2 text-gray-500">
                                    <MailIcon className="mr-2 h-5 w-5" />
                                    {s.email}
                                </p>
                                <p className="text-gray-500">
                                    <PhoneIcon className="mr-2 h-5 w-5" />
                                    {s.phone}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="mt-8">
                    <h2 className="mb-4 text-2xl font-bold text-black">
                        {editingStaff ? 'Edit Staff' : 'Add New Staff'}
                    </h2>
                    <Card className="rounded-lg bg-white p-6 shadow-md">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                editingStaff ? handleUpdateStaff() : handleCreateStaff();
                            }}
                        >
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <Label htmlFor="name" className="text-black">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        value={editingStaff?.name || newStaff.name}
                                        onChange={(e) =>
                                            editingStaff
                                                ? handleEditingStaffChange('name', e.target.value)
                                                : handleNewStaffChange('name', e.target.value)
                                        }
                                        className="bg-white text-black"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="role" className="text-black">
                                        Role
                                    </Label>
                                    <Input
                                        id="role"
                                        value={editingStaff?.role || newStaff.role}
                                        onChange={(e) =>
                                            editingStaff
                                                ? handleEditingStaffChange('role', e.target.value)
                                                : handleNewStaffChange('role', e.target.value)
                                        }
                                        className="bg-white text-black"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="text-black">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={editingStaff?.email || newStaff.email}
                                        onChange={(e) =>
                                            editingStaff
                                                ? handleEditingStaffChange('email', e.target.value)
                                                : handleNewStaffChange('email', e.target.value)
                                        }
                                        className="bg-white text-black"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="phone" className="text-black">
                                        Phone
                                    </Label>
                                    <Input
                                        id="phone"
                                        value={editingStaff?.phone || newStaff.phone}
                                        onChange={(e) =>
                                            editingStaff
                                                ? handleEditingStaffChange('phone', e.target.value)
                                                : handleNewStaffChange('phone', e.target.value)
                                        }
                                        className="bg-white text-black"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="permissions" className="text-black">
                                        Permissions
                                    </Label>
                                    <div className="text-black">
                                        <div>View</div>
                                        <div>Edit</div>
                                        <div>Delete</div>
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="image" className="text-black">
                                        Profile Picture
                                    </Label>
                                    <Input
                                        id="image"
                                        type="file"
                                        onChange={(e: any) =>
                                            editingStaff
                                                ? handleEditingStaffChange('image', e?.target.files[0])
                                                : handleNewStaffChange('image', e?.target.files[0])
                                        }
                                        className="bg-white text-black"
                                    />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="notes" className="text-black">
                                    Notes
                                </Label>
                                <Textarea
                                    id="notes"
                                    value={editingStaff?.notes || newStaff.notes}
                                    onChange={(e) =>
                                        editingStaff
                                            ? handleEditingStaffChange('notes', e.target.value)
                                            : handleNewStaffChange('notes', e.target.value)
                                    }
                                    className="bg-white text-black"
                                />
                            </div>
                            <div className="mt-6 flex justify-end">
                                {editingStaff && (
                                    <Button variant="outline" className="mr-2" onClick={() => setEditingStaff(null)}>
                                        Cancel
                                    </Button>
                                )}
                                <Button type="submit" className="bg-red-200">
                                    {editingStaff ? 'Update Staff' : 'Add Staff'}
                                </Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
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

function MailIcon(props: any) {
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
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

function PhoneIcon(props: any) {
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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
