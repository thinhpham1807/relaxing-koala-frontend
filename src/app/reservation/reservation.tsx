'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { format, set } from 'date-fns';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

export default function Reservation() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [formattedDate, setFormattedDate] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('7:00 PM');
    const [selectedGuests, setSelectedGuests] = useState<string>('2');
    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState<boolean>(false);
    const [isDatePopoverOpen, setIsDatePopoverOpen] = useState<boolean>(false); // State for controlling Popover

    // Update formattedDate whenever selectedDate changes
    useEffect(() => {
        if (selectedDate) {
            setFormattedDate(format(selectedDate, 'MM/dd/yyyy'));
        } else {
            setFormattedDate('Select Date');
        }
    }, [selectedDate]);

    const setDate = (range: DateRange) => {
        const [start, end] = range;
        alert('Date selected: ' + start);
        setSelectedDate(start);
    };

    const handleTimeChange = (time: string) => {
        setSelectedTime(time);
    };

    const handleGuestsChange = (guests: string) => {
        setSelectedGuests(guests);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!selectedDate || !selectedTime) {
            alert('Please select a valid date and time.');
            return;
        }

        setIsSuccessDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsSuccessDialogOpen(false);
    };

    return (
        <div className="w-full">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-16 md:px-6">
                    <div className="flex flex-col items-start justify-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Make a Reservation
                        </h2>
                        <p className="max-w-[500px] text-muted-foreground md:text-xl/relaxed">
                            Reserve your table at Relaxing Koala Restaurant and enjoy an unforgettable dining
                            experience.
                        </p>
                    </div>
                    <Card>
                        <CardContent className="space-y-4">
                            <form className="grid gap-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="guests">Guests</Label>
                                        <Select id="guests" value={selectedGuests} onValueChange={handleGuestsChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select number of guests" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {[...Array(10).keys()].map((i) => (
                                                    <SelectItem key={i + 1} value={(i + 1).toString()}>
                                                        {i + 1} {i + 1 === 1 ? 'Guest' : 'Guests'}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <Popover open={isDatePopoverOpen} onOpenChange={setIsDatePopoverOpen}>
                                        <PopoverTrigger asChild>
                                            <div className="grid gap-2">
                                                <Label htmlFor="date">Date</Label>
                                                <Button
                                                    variant="outline"
                                                    className="h-auto w-full flex-col items-start"
                                                    type="button"
                                                    onClick={() => setIsDatePopoverOpen(true)} // Open Popover
                                                >
                                                    <span className="text-[0.65rem] font-semibold uppercase">
                                                        Select Date
                                                    </span>
                                                    <span className="font-normal">{formattedDate}</span>
                                                </Button>
                                            </div>
                                        </PopoverTrigger>
                                        <PopoverContent className="max-w-[276px] p-0">
                                            <Calendar
                                                mode="single"
                                                selected={selectedDate}
                                                onSelect={setSelectedDate}
                                                disabled={(date: any) => date < new Date()} // Disable past dates
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <div className="grid gap-2">
                                            <Label htmlFor="time">Time</Label>
                                            <Button
                                                variant="outline"
                                                className="h-auto w-full flex-col items-start"
                                                type="button"
                                            >
                                                <span className="text-[0.65rem] font-semibold uppercase">
                                                    Select Time
                                                </span>
                                                <span className="font-normal">{selectedTime}</span>
                                            </Button>
                                        </div>
                                    </PopoverTrigger>
                                    <PopoverContent className="max-w-[276px] p-0">
                                        <div className="grid grid-cols-3 gap-2 p-4">
                                            {['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'].map(
                                                (time) => (
                                                    <Button
                                                        key={time}
                                                        variant="ghost"
                                                        className="rounded-md"
                                                        onClick={() => handleTimeChange(time)}
                                                        type="button"
                                                    >
                                                        {time}
                                                    </Button>
                                                ),
                                            )}
                                        </div>
                                    </PopoverContent>
                                </Popover>
                                <Button type="submit" className="w-full">
                                    Reserve Table
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Dialog open={isSuccessDialogOpen} onOpenChange={handleCloseDialog}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Reservation Successful</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <p>Your reservation has been confirmed.</p>
                        <p>Date: {formattedDate}</p>
                        <p>Time: {selectedTime}</p>
                        <p>Guests: {selectedGuests}</p>
                    </div>
                    <DialogFooter>
                        <Button variant="link" onClick={handleCloseDialog}>
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
