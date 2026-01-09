import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { articles } from './data/articles';
import juliaProfile from './images/juliaprofile.jpg';
import './App.css';

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__image">
          <img src={juliaProfile} alt="Julia Alves" />
        </div>
        <div className="hero__content">
          <h1 className="hero__title">Julia Alves</h1>
          <p className="hero__subtitle">Psicanalista</p>
          <p className="hero__description">
            Psicanálise para jovens adultos. Escuta profunda, sem pressa.
            Online ou presencial.
          </p>
        </div>
      </header>

      <main className="content">
        <section className="section">
          <div className="section__header">
            <div>
              <p className="eyebrow">Artigos</p>
              <h2>Conteúdos para apoiar sua jornada</h2>
              <p>Leituras curtas e diretas para você aplicar no dia a dia.</p>
            </div>
            <Button label="Ver todos" icon="pi pi-arrow-right" className="p-button-text" />
          </div>

          <div className="grid articles">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="article-card"
                header={<img src={article.imageUrl} alt={article.title} />}
                title={article.title}
                subTitle={`Por ${article.author}`}
              >
                <p>{article.summary}</p>
                <div className="article-card__footer">
                  <div className="article-card__tags">
                    {article.tags.map((tag) => (
                      <Tag key={tag} value={tag} severity="secondary" />
                    ))}
                  </div>
                  <span className="article-card__date">
                    <i className="pi pi-calendar" />
                    {new Date(article.publishedAt).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p className="eyebrow">Contato</p>
          <h3>Pronta para conversar?</h3>
          <p>Envie uma mensagem e marcamos um horário.</p>
        </div>
        <div className="footer__actions">
          <Button label="WhatsApp" icon="pi pi-whatsapp" severity="success" />
        </div>
      </footer>
    </div>
  );
}

export default App;