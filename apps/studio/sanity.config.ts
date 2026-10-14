// ./schemaTypes.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "c4p05qfe";
const prodDataset = process.env.SANITY_STUDIO_PROD_DATASET || process.env.SANITY_STUDIO_DATASET || "production";
const devDataset = process.env.SANITY_STUDIO_DEV_DATASET || "development";

export default defineConfig([
    {
        name: "production",
        title: "YATT (Production)",
        basePath: "/prod",
        projectId,
        dataset: prodDataset,
        plugins: [
            structureTool()
        ],
        schema: {
            types: schemaTypes,
        },
    },
    {
        name: "development",
        title: "YATT (Development)",
        basePath: "/dev",
        projectId,
        dataset: devDataset,
        plugins: [
            structureTool()
        ],
        schema: {
            types: schemaTypes,
        },
    }
]);