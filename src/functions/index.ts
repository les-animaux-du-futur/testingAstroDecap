import { readdirSync, readFileSync } from "fs";

import type { Biome, Specie, SpeciesByBiomes } from "./@types";

export function getSpecies() {
  let speciesByBiomes: SpeciesByBiomes = {};
  let species: Specie[] = [];

  const speciesFolder = readdirSync("src/pages/species");

  speciesFolder.map((fileName) => {
    const data = readFileSync(`src/pages/species/${fileName}`, {
      encoding: "utf-8",
    });
    const jsData = JSON.parse(data) as Specie;

    const biomeName = jsData.biome;

    if (speciesByBiomes[biomeName]) {
      speciesByBiomes[biomeName].push(jsData); // Ajouter l'espèce au biome existant
    } else {
      speciesByBiomes[biomeName] = [jsData]; // Créer un nouveau tableau pour le biome et y ajouter l'espèce
    }
    species.push(jsData);
  });
  return { speciesByBiomes, species };
}

export function getBiomes() {
  const biomes: Biome[] = [];

  const biomesFolder = readdirSync("src/pages/biomes");

  biomesFolder.map((fileName) => {
    const data = readFileSync(`src/pages/biomes/${fileName}`, {
      encoding: "utf-8",
    });
    const jsData = JSON.parse(data) as Biome;

    biomes.push(jsData);
  });
  return { biomes };
}
