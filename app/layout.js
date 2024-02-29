import "./globals.css";

export const metadata = {
  title: "Library System",
  description: "Library system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
