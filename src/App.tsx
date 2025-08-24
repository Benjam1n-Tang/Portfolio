import Nav from './components/Nav';
import * as Page from './pages';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="w-full bg-primary-800 pg-padX">
      <Page.Hero />
    </section>
    <section className="w-full bg-primary-50 pg-padX">
      <Page.About />
    </section>
    <section className="w-full bg-primary-50 pg-padX">
      <Page.Skills />
    </section>
    <section className="w-full bg-primary-50 pg-padX">
      <Page.Projects />
    </section>
    <section className="w-full bg-primary-50 pg-padX">
      <Page.Contact />
    </section>
    <section className="w-full bg-primary-50 pg-padX">
      <Page.Footer />
    </section>


  </main>
);

export default App
