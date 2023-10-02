import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import PrimaryNavBar from '@/components/layout/nav-bar';
import { Providers } from '@/store/provider';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Tyre Agency',
  description: 'For the love of tyres',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <PrimaryNavBar />
          <div className="">
            {/* <div className="px-4 py-2 w-40 h-screen bg-indigo-100 text-indigo-600 font-medium text-lg fixed">
              SideBar
            </div> */}
            <div className="w-full main-background-img flex justify-center">
              <div className="max-w-7xl px-6 md:px-10 lg:px-20">{children}</div>
            </div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
