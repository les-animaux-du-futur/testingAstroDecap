import { defineConfig } from "astro/config";
import DecapCMS from "astro-decap-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [
    DecapCMS({
      config: {
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        backend: {
          name: "git-gateway",
          branch: "latest",
        },

        // Configure where our media assets are stored & served from
        media_folder: "public/assets/blog",
        public_folder: "/assets/blog",
        // Configure the content collections
        collections: [
          {
            extension: "json",
            name: "species",
            label: "Espèces",
            label_singular: "Espèce",
            folder: "src/pages/species",
            create: true,
            delete: true,
            identifier_field: "name",
            fields: [
              { name: "name", widget: "string", label: "Nom" },
              {
                name: "speciesImage",
                widget: "image",
                label: "Image de la nouvelle espèce",
              },
              {
                name: "discoveryDate",
                widget: "datetime",
                format: "DD MMM YYYY",
                date_format: "DD MMM YYYY",
                time_format: true,
                label: "Date de la découverte",
              },
              {
                name: "type",
                label: "Type",
                widget: "select",
                default: "plant",
                options: [
                  { label: "Plante", value: "plant" },
                  { label: "Animale", value: "animal" },
                ],
              },
              {
                name: "biome",
                label: "Biome",
                widget: "select",
                default: "desert",
                options: [
                  { label: "désert", value: "desert" },
                  { label: "Forêt", value: "forest" },
                  { label: "Montagne", value: "montagne" },
                  { label: "Océan", value: "ocean" },
                  { label: "Tropical", value: "tropical" },
                ],
              },
              {
                name: "height",
                widget: "string",
                value_type: "string",
                label: "Taille",
                required: true,
              },
              {
                name: "weight",
                widget: "string",
                value_type: "string",
                label: "poids",
                required: false,
              },
              {
                name: "life",
                widget: "string",
                label: "Durée de vie",
                required: false,
              },

              {
                name: "EvolutionDescripption",
                widget: "markdown",
                label: "Description détaillée de son évolution",
                required: false,
              },
            ],
          },
        ],
      },
      previewStyles: ["/src/styles/blog.css"],
    }),
  ],
});
