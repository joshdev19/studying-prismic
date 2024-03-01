import type { Metadata, ResolvedMetadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { createClient } from "@/prismicio"; 

type Props = {
  params: { id: string };
  searchParams: { [ key: string ]: string | string[] | undefined }
}

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
});

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle('settings');

  return {
    title: page.data.site_title || "Your Title Here",
    description: page.data.meta_description || "Your description here..",
    openGraph: {
      images: [ page.data.og_image.url || "" ]
    }
  }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(nunito.variable, nunitoSans.variable)}>
        <header></header>
        {children}
      </body>
    </html>
  );
}
