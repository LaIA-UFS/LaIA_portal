export type Language = 'pt' | 'en';

export const members = [
  { name: 'Péricles Leite', image: 'pericles-leite.jpg', group: 'administracao', roles: ['Presidente'], roleEn: ['President'] },
  { name: 'Nayara Oliveira', image: 'nayara-oliveira.jpg', group: 'administracao', roles: ['Vice-presidente', 'Diretora de Eventos'], roleEn: ['Vice President', 'Director of Events'] },
  { name: 'Helen Bispo', image: 'helen_bispo-DDSXY7lv.webp', group: 'administracao', roles: ['Secretária Geral'], roleEn: ['General Secretary'] },
  { name: 'Bruno Carvalho', image: 'bruno-carvalho.jpg', group: 'diretoria', roles: ['Diretor de Desenvolvimento Humano e Organizacional'], roleEn: ['Director of Human and Organizational Development'] },
  { name: 'Filipe Ciríaco', image: 'filipe-ciriaco.jpg', group: 'diretoria', roles: ['Diretor de Pesquisas'], roleEn: ['Director of Research'] },
  { name: 'Caio Mendonça', image: 'caio-mendonca.jpg', group: 'diretoria', roles: ['Diretor de Projetos'], roleEn: ['Director of Projects'] },
  { name: 'Raissa Cavalcante', image: 'raissa-cavalcante.jpg', group: 'diretoria', roles: ['Diretora de Inovação'], roleEn: ['Director of Innovation'] },
  { name: 'João Vitor Viana', image: 'joao-vitor-viana.jpg', group: 'diretoria', roles: ['Diretor de Ensino'], roleEn: ['Director of Education'] },
  { name: 'Arthur Barreto', image: 'arthur-barreto.jpg', group: 'diretoria', roles: ['Diretor de Finanças'], roleEn: ['Director of Finance'] },
  { name: 'Luan Amaro', image: 'luan-amaro.jpg', group: 'diretoria', roles: ['Diretor de Marketing'], roleEn: ['Director of Marketing'] },
] as const;

export type Member = (typeof members)[number];
export type MemberGroup = Member['group'];
