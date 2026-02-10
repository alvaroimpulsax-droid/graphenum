// Importar todos los archivos JSON de subvenciones
const subvencionesModules = import.meta.glob('../content/subvenciones/*.json', { eager: true });

export interface CuantiaItem {
  concepto: string;
  importe: string;
  descripcion?: string;
}

export interface LineaAyuda {
  nombre: string;
  descripcion?: string;
  cuantiaMinima?: string;
  cuantiaMaxima?: string;
  porcentaje?: string;
  requisitos?: string[];
}

export interface ActuacionSubvencionable {
  linea: string;
  porcentaje?: string;
  descripcion?: string;
  items: {
    nombre: string;
    importeMax?: string;
    descripcion?: string;
  }[];
}

export interface Subvencion {
  id: string;
  codigo: string;
  nombre: string;
  comunidad: string;
  categoria: string;
  organismo: string;
  estado: 'abierta' | 'proxima' | 'cerrada';

  // Plazos
  plazoInicio?: string;
  plazoFin?: string;
  plazoTexto: string;
  plazoEjecucion?: string;

  // Tipo de ayuda
  tipoAyuda?: string;
  regimen?: string;

  // Descripción
  objeto: string;
  objetoDetallado?: string;

  // Beneficiarios
  beneficiarios?: string;
  beneficiariosDetalle?: string[];
  beneficiariosExcluidos?: string[];

  // Requisitos
  requisitos?: string[];
  requisitosEspecificos?: string[];
  condicionesContratacion?: string[];

  // Cuantías
  cuantias?: CuantiaItem[];
  inversionMinima?: string;
  inversionMaxima?: string;
  ayudaMaxima?: string;
  porcentajeBase?: string;

  // Incrementos
  incrementos?: CuantiaItem[];
  colectivosPrioritarios?: string[];

  // Líneas de ayuda
  lineas?: LineaAyuda[];

  // Gastos subvencionables
  gastosSubvencionables?: string[];
  gastosSubvencionablesDetalle?: ActuacionSubvencionable[];
  gastosNoSubvencionables?: string[];

  // Actuaciones (para subvenciones tipo comercio)
  actuacionesSubvencionables?: ActuacionSubvencionable[];

  // Obligaciones
  obligacionesBeneficiario?: string[];
  mantenimientoEmpleo?: string;

  // Documentación
  documentacionRequerida?: string[];

  // Compatibilidades
  compatibilidades?: string[];
  incompatibilidades?: string[];

  // Información adicional
  notasAdicionales?: string[];
  enlaceOficial?: string;

  // Ámbito territorial (para LEADER)
  ambitoTerritorial?: string[];
  zonasExcluidas?: string[];

  // Tecnologías (para IA, digitalización)
  tecnologiasPrioritarias?: string[];
  sectoresElegibles?: string[];

  // Imagen y destacado
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
