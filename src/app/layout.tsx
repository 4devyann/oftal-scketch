import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, ThemeConfig } from 'antd';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oftal Sketch',
  description: 'Oftal Sketch',
};

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
  },
  components: {
    Card: {
      boxShadowTertiary: 'none',
      borderRadius: 0,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
