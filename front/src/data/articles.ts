export type Article = {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  publishedAt: string;
  author: string;
  tags: string[];
};

export const articles: Article[] = [
  {
    id: '1',
    title: 'Como lidar com a ansiedade no dia a dia',
    summary:
      'Estratégias práticas para reconhecer sinais de ansiedade e criar rotinas saudáveis que ajudam a recuperar o equilíbrio.',
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    publishedAt: '2025-11-12',
    author: 'Julia Alves',
    tags: ['Ansiedade', 'Rotina', 'Bem-estar'],
  },
  {
    id: '2',
    title: 'Mindfulness para iniciantes',
    summary:
      'Um guia direto para começar a praticar atenção plena, com exercícios simples que podem caber na sua agenda.',
    imageUrl:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    publishedAt: '2025-10-03',
    author: 'Julia Alves',
    tags: ['Mindfulness', 'Hábitos', 'Foco'],
  },
  {
    id: '3',
    title: 'Relacionamentos saudáveis começam por você',
    summary:
      'Reflexões sobre como autocuidado e comunicação consciente criam bases mais sólidas nas relações.',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
    publishedAt: '2025-09-14',
    author: 'Julia Alves',
    tags: ['Relacionamentos', 'Autocuidado'],
  },
];