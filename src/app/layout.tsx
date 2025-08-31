
// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RMPI（Romantic Mode Personality Indicator）| 恋愛分人理論診断',
  description: '分人理論に基づく恋愛特化型MBTI診断システム。あなたの恋愛パーソナリティを16タイプで分析し、理想のパートナーシップ構築をサポートします。',
  keywords: '恋愛診断, MBTI, 分人理論, パーソナリティ, 相性診断, 恋愛心理学',
  authors: [{ name: 'RMPI Team' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' }
    ]
  },
  themeColor: '#d946ef',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  openGraph: {
    title: 'RMPI（Romantic Mode Personality Indicator）',
    description: '分人理論に基づく恋愛特化型MBTI診断システム',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'RMPI'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RMPI（Romantic Mode Personality Indicator）',
    description: '分人理論に基づく恋愛特化型MBTI診断システム'
  }
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

