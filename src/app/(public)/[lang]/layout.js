// src/app/(public)/[lang]/layout.js
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import { getDictionary } from '@/lib/dictionaries';

export default async function LangLayout({ children, params: { lang } }) {
  const dict = await getDictionary(lang); // dict contiene todo (navbar, footer, etc.)

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header recibe solo la parte navbar del dict */}
      <Header lang={lang} dict={dict.navbar} />
      <main className="flex-grow">
        {children}
      </main>
      {/* Footer recibe el dict COMPLETO */}
      <Footer lang={lang} dict={dict} />
    </div>
  );
}