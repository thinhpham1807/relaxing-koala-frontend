import { Header } from '@/components/nav-bar';
import { Footer } from '@/components/footer';

const LandingPage = () => {
    return (
        <div className="mx-auto w-full max-w-4xl">
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-center text-center">
                <h1 className="mb-4 text-4xl font-bold">Welcome to Our Restaurant!</h1>
                <p className="mb-8 text-lg">Enjoy our delicious menu and make reservations easily.</p>
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
