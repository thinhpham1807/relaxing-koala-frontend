import { Header } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <Header />
            <main className="flex flex-col items-center justify-center min-h-screen text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Restaurant!</h1>
                <p className="text-lg mb-8">Enjoy our delicious menu and make reservations easily.</p>
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
