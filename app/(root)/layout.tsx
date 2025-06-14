import { Link } from 'lucide-react';
import { ReactNode } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';

const RootLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();
    if(!isUserAuthenticated) redirect('/sign-in');

    return (

        <div className='root-layout'>
            <nav>
                <NextLink href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="logo" height={32} width={38} />
                    <h2 className="text-primary-11">PrepWise</h2>
                </NextLink>
            </nav>
            {children}
        </div>

    );
}

export default RootLayout;   