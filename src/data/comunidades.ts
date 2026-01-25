export interface Comunidad {
  nombre: string;
  slug: string;
  abreviatura: string;
  color: string;
}

export const comunidades: Comunidad[] = [
  { nombre: 'Andalucía', slug: 'andalucia', abreviatura: 'AND', color: '#00954A' },
  { nombre: 'Aragón', slug: 'aragon', abreviatura: 'ARA', color: '#FCDD09' },
  { nombre: 'Asturias', slug: 'asturias', abreviatura: 'AST', color: '#0066B3' },
  { nombre: 'Baleares', slug: 'baleares', abreviatura: 'BAL', color: '#D81E05' },
  { nombre: 'Canarias', slug: 'canarias', abreviatura: 'CAN', color: '#FECB00' },
  { nombre: 'Cantabria', slug: 'cantabria', abreviatura: 'CNT', color: '#DB0030' },
  { nombre: 'Castilla-La Mancha', slug: 'castilla-la-mancha', abreviatura: 'CLM', color: '#C8102E' },
  { nombre: 'Castilla y León', slug: 'castilla-y-leon', abreviatura: 'CYL', color: '#9B2743' },
  { nombre: 'Cataluña', slug: 'cataluna', abreviatura: 'CAT', color: '#FCDD09' },
  { nombre: 'Comunidad Valenciana', slug: 'comunidad-valenciana', abreviatura: 'VAL', color: '#D81E05' },
  { nombre: 'Extremadura', slug: 'extremadura', abreviatura: 'EXT', color: '#00954A' },
  { nombre: 'Galicia', slug: 'galicia', abreviatura: 'GAL', color: '#0066B3' },
  { nombre: 'La Rioja', slug: 'la-rioja', abreviatura: 'RIO', color: '#C8102E' },
  { nombre: 'Madrid', slug: 'madrid', abreviatura: 'MAD', color: '#C8102E' },
  { nombre: 'Murcia', slug: 'murcia', abreviatura: 'MUR', color: '#C8102E' },
  { nombre: 'Navarra', slug: 'navarra', abreviatura: 'NAV', color: '#C8102E' },
  { nombre: 'País Vasco', slug: 'pais-vasco', abreviatura: 'PVA', color: '#009B48' },
];
