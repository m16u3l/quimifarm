export const metadata = {
  title: "My App",
  description: "ERP para Farmacia",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
