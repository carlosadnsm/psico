import { useMemo } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Avatar } from 'primereact/avatar';
import { Chip } from 'primereact/chip';
import { articles } from './data/articles';
import juliaProfile from './images/juliaprofile.jpg';
import './App.css';

function App() {
  const highlights = useMemo(
    () => [
      'Psicanálise com foco em jovens adultos',
      'Online ou presencial, como você preferir',
      'Escuta profunda para ansiedade e relações',
      'Espaço seguro, sem julgamentos',
    ],
    [],
  );

  return (
    <div className="page">
      <header className="hero">
        <div className="hero__content">
          <Chip label="In Dizer Psicanálise" icon="pi pi-heart" className="hero__pill" />
          <h1 className="hero__title">Psicanálise acolhedora para jovens adultos que buscam clareza emocional.</h1>
          <p className="hero__subtitle">
            Atendimento psicanalítico com escuta profunda e acolhimento real, para jovens adultos que desejam
            compreender suas emoções e transformar suas relações. Online ou presencial.
          </p>
          <div className="hero__actions">
            <Button label="Agendar sessão" icon="pi pi-calendar" size="large" severity="primary" />
            <Button label="Entender a abordagem" icon="pi pi-book" size="large" className="p-button-outlined" />
          </div>
          <div className="hero__highlights">
            {highlights.map((item) => (
              <div key={item} className="hero__highlight">
                <i className="pi pi-check" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__card">
          <Card className="profile-card">
            <div className="profile-card__header">
              <Avatar
                image={juliaProfile}
                shape="circle"
                size="xlarge"
              />
              <div>
                <h3>Julia Alves</h3>
                <p>Psicanalista | CRP 00/0000</p>
              </div>
            </div>
            <p className="profile-card__text">
              Trabalho com psicanálise voltada para jovens adultos, ajudando a explorar conflitos internos,
              ansiedade e relações com profundidade e sem pressa.
            </p>
            <div className="profile-card__meta">
              <div>
                <strong>+250</strong>
                <span>Sessões realizadas</span>
              </div>
              <div>
                <strong>6 anos</strong>
                <span>De experiência</span>
              </div>
            </div>
          </Card>
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
          <Button label="E-mail" icon="pi pi-envelope" className="p-button-outlined" />
        </div>
      </footer>
    </div>
  );
}

export default App;