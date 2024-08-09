import { Header } from '@/components/nav-bar';

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}
