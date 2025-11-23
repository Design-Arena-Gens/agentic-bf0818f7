import "./globals.css";

export const metadata = {
  title: "منتجات رابحة في أمازون الإمارات",
  description: "خمس أفكار منتجات جديدة ذات طلب مرتفع ومنافسة منخفضة في سوق أمازون الإمارات."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
