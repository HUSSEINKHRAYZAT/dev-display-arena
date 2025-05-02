
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectList from '@/components/ProjectList';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProjectList />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
