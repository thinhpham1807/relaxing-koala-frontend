"use client"

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export default function Reservation() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | undefined>("7:00 PM");

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-16 md:px-6">
          <div className="flex flex-col items-start justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Make a Reservation</h2>
            <p className="max-w-[500px] text-muted-foreground md:text-xl/relaxed">
              Reserve your table at Relaxing Koala Restaurant and enjoy an unforgettable dining experience.
            </p>
          </div>
          <Card>
            <CardContent className="space-y-4">
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="guests">Guests</Label>
                    <Select id="guests">
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5 Guests</SelectItem>
                        <SelectItem value="6">6 Guests</SelectItem>
                        <SelectItem value="7">7 Guests</SelectItem>
                        <SelectItem value="8">8 Guests</SelectItem>
                        <SelectItem value="9">9 Guests</SelectItem>
                        <SelectItem value="10">10 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="grid gap-2">
                        <Label htmlFor="date">Date</Label>
                        <Button variant="outline" className="flex-col items-start w-full h-auto">
                          <span className="font-semibold uppercase text-[0.65rem]">Select Date</span>
                          <span className="font-normal">{selectedDate ? format(selectedDate, "MM/dd/yyyy") : "Select Date"}</span>
                        </Button>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 max-w-[276px]">
                      <Calendar selected={selectedDate} onChange={handleDateChange} />
                    </PopoverContent>
                  </Popover>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="grid gap-2">
                      <Label htmlFor="time">Time</Label>
                      <Button variant="outline" className="flex-col items-start w-full h-auto">
                        <span className="font-semibold uppercase text-[0.65rem]">Select Time</span>
                        <span className="font-normal">{selectedTime}</span>
                      </Button>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 max-w-[276px]">
                    <div className="grid grid-cols-3 gap-2 p-4">
                      {["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"].map((time) => (
                        <Button key={time} variant="ghost" className="rounded-md" onClick={() => handleTimeChange(time)}>
                          {time}
                        </Button>
                      ))}
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
    </div>
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
