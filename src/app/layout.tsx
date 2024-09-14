export const metadata = {
  title: 'My Next.js App',
  description: 'Created with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className="w-screen h-screen bg-white text-black ">
        <main>{children}</main>
      </body>
    </html>
  );
}