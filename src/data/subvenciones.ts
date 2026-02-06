// Importar todos los archivos JSON de subvenciones
const subvencionesModules = import.meta.glob('../content/subvenciones/*.json', { eager: true });

export interface Subvencion {
  id: string;
  codigo: string;
  nombre: string;
  comunidad: string;
  categoria: string;
  organismo: string;
  estado: 'abierta' | 'proxima' | 'cerrada';
  plazoInicio?: string;
  plazoFin?: string;
  plazoTexto: string;
  tipoAyuda?: string;
  objeto: string;
  beneficiarios?: string;
  beneficiariosDetalle?: string[];
  actuacionesSubvencionables?: {
    linea: string;
    porcentaje?: string;
    items: {
      nombre: string;
      importeMax?: string;
    }[];
  }[];
  plazoEjecucion?: string;
  requisitos?: string[];
  imagen?: string;
  destacada?: boolean;
}

// Cargar todas las subvenciones desde los archivos JSON
export const subvenciones: Subvencion[] = Object.values(subvencionesModules).map(
  (mod: any) => mod.default || mod
);

// Helper functions
export function getSubvencionesByComunidad(comunidadSlug: string): Subvencion[] {
  return subvenciones.filter(s => s.comunidad === comunidadSlug);
}

export function getSubvencionesByComunidadYCategoria(comunidadSlug: string, categoriaId: string): Subvencion[] {
  return subvenciones.filter(s => s.comunidad === comunidadSlug && s.categoria === categoriaId);
}

export function getSubvencionById(id: string): Subvencion | undefined {
  return subvenciones.find(s => s.id === id);
}

export function getSubvencionByCodigo(comunidadSlug: string, codigo: string): Subvencion | undefined {
  return subvenciones.find(s => s.comunidad === comunidadSlug && s.codigo.toLowerCase() === codigo.toLowerCase());
}
