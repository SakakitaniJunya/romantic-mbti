
// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '恋愛特化型MBTIライク診断',
  description: '恋愛診断、相性診断、16タイプ一覧、恋愛相談室',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

