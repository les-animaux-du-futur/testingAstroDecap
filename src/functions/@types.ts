export interface Specie {
  biome: string;
  height: string;
  name: string;
  EvolutionDescripption: string;
  weight: string;
  type: string;
  life: string;
  discoveryDate: string;
  speciesImage: string;
}

export type SpeciesByBiomes = Record<string, Specie[]>;

export interface Biome {
  name: string;
  color: string;
}
