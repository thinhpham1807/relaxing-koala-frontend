import { useCheckoutStore } from '@/stores/checkout-store';
import { Button } from '@/components/ui/button';
import { generateMessage } from '@/lib/generate-message';
import { Input } from '../ui/input';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { CheckoutSteps } from '@/types/checkout-steps';
import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';

const formSchema = z.object({
    number: z.string().min(10, 'Preencha o número corretamente'),
});

type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>;
};

export const StepFinish = ({ setStep }: Props) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const { name } = useCheckoutStore((state) => state);

    const message = generateMessage();

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const link = `https://wa.me//${values.number}?text=${encodeURI(message)}`;
        window.open(link, '_blank');
    };

    return (
        <div className="flex flex-col gap-5 text-center">
            <p>
                Hey <strong>{name}</strong>!
            </p>
            <p>
                Now we are sending your order to your email to complete. Our restaurant will inform you about the status
                of your order.
            </p>
            <Form {...form}>
                <form action="" onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <div className="w-full">
                        <FormField
                            control={form.control}
                            name="number"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Fill in Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Ex.: johndoe@gmail.com" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                    </div>

                    <div className="mt-4 flex justify-between">
                        <Button onClick={() => setStep('address')} variant="link">
                            Go back
                        </Button>
                        <Button
                            onClick={() => {
                                const router = useRouter();
                                router.push('/payment');
                            }}
                        >
                            Send to Email
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};
