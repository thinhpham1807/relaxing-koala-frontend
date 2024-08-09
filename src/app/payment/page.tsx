'use client';
import { useState } from 'react';
import { useRouter } from 'next/router'; // Ensure you're importing from the correct package
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Component() {
    const [expirationMonth, setExpirationMonth] = useState<string>('01');
    const [expirationYear, setExpirationYear] = useState<string>('2031');

    const [cvc, setCvc] = useState('');
    const [isCvcValid, setIsCvcValid] = useState(true);

    const [cardNumber, setCardNumber] = useState('');
    const [isCardValid, setIsCardValid] = useState(true);

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setCardNumber(value);

        // Validate the card number using the Luhn algorithm
        if (value.length >= 13 && value.length <= 19) {
            setIsCardValid(luhnCheck(value));
        } else {
            setIsCardValid(false);
        }
    };

    const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setCvc(value);

        // Validate CVC length (3 or 4 digits)
        setIsCvcValid(value.length === 3 || value.length === 4);
    };

    // Luhn algorithm to validate card number
    const luhnCheck = (num: string) => {
        let sum = 0;
        let shouldDouble = false;

        for (let i = num.length - 1; i >= 0; i--) {
            let digit = parseInt(num.charAt(i), 10);

            if (shouldDouble) {
                if ((digit *= 2) > 9) digit -= 9;
            }

            sum += digit;
            shouldDouble = !shouldDouble;
        }

        return sum % 10 === 0;
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Payment</CardTitle>
                    <CardDescription>Complete your order</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <div className="font-medium">Order Summary</div>
                        <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                            <div>2 x Margherita Pizza</div>
                            <div className="text-right">$24.00</div>
                            <div>1 x Caesar Salad</div>
                            <div className="text-right">$10.00</div>
                            <div>Delivery</div>
                            <div className="text-right">$5.00</div>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex items-center justify-between font-medium">
                            <div>Total</div>
                            <div>$39.00</div>
                        </div>
                    </div>
                    <form className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="card-number">Card Number</Label>
                            <Input
                                id="card-number"
                                type="tel"
                                placeholder="0000 0000 0000 0000"
                                maxLength={19}
                                value={cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ')} // Format as 0000 0000 0000 0000
                                onChange={handleCardNumberChange}
                                className={isCardValid ? '' : 'border-red-500'}
                            />
                            {!isCardValid && (
                                <div className="text-sm text-red-500">Please enter a valid card number.</div>
                            )}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="expiration">Expiration</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    <Select value={expirationMonth ?? ''} onValueChange={setExpirationMonth}>
                                        <SelectTrigger id="expiration-month">
                                            <SelectValue placeholder="MM" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 12 }, (_, i) => (
                                                <SelectItem key={i + 1} value={String(i + 1).padStart(2, '0')}>
                                                    {String(i + 1).padStart(2, '0')}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Select value={expirationYear ?? ''} onValueChange={setExpirationYear}>
                                        <SelectTrigger id="expiration-year">
                                            <SelectValue placeholder="YY" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 10 }, (_, i) => (
                                                <SelectItem key={i + 2023} value={String(i + 2023)}>
                                                    {i + 2023}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="cvc">CVC</Label>
                                <Input
                                    id="cvc"
                                    type="tel"
                                    placeholder="123"
                                    maxLength={4}
                                    value={cvc}
                                    onChange={handleCvcChange}
                                    className={isCvcValid ? '' : 'border-red-500'}
                                />
                                {!isCvcValid && <div className="text-sm text-red-500">Please enter a valid CVC.</div>}
                            </div>
                        </div>
                        <Link href="/payment/succeed" passHref>
                            <Button className="w-full">Pay</Button>
                        </Link>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
