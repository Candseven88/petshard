import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  showBackButton?: boolean;
}

export default function Layout({ children, title, showBackButton = false }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title={title} showBackButton={showBackButton} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
} 