import "./globals.css";

export const metadata = {
  title: "Chat App",
  description: "Chat App"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
