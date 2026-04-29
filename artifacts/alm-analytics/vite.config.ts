import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const DEFAULT_ALLOWED_HOSTS = [
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  ".replit.dev",
  ".repl.co",
];

function parseCsvEnv(value: string | undefined): string[] {
  return value
    ? value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];
}

export default defineConfig(async({ command }) => {
  const rawPort = process.env.PORT;
  const port = rawPort ? Number(rawPort) : 5173;

  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }

  const basePath = process.env.BASE_PATH ?? "/";
  const allowedHosts =
    parseCsvEnv(process.env.VITE_ALLOWED_HOSTS).length > 0
      ? parseCsvEnv(process.env.VITE_ALLOWED_HOSTS)
      : DEFAULT_ALLOWED_HOSTS;

  return {
    base: basePath,
    plugins: [
      react(),
      tailwindcss(),
      ...(command !== "build" ? [runtimeErrorOverlay()] : []),
      ...(command !== "build" &&
      process.env.NODE_ENV !== "production" &&
      process.env.REPL_ID !== undefined
        ? [
            await import("@replit/vite-plugin-cartographer").then((m) =>
              m.cartographer({
                root: path.resolve(import.meta.dirname, ".."),
              }),
            ),
            await import("@replit/vite-plugin-dev-banner").then((m) =>
              m.devBanner(),
            ),
          ]
        : []),
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(
          import.meta.dirname,
          "..",
          "..",
          "attached_assets",
        ),
      },
      dedupe: ["react", "react-dom"],
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      port,
      strictPort: true,
      host: "0.0.0.0",
      allowedHosts,
      fs: {
        strict: true,
      },
    },
    preview: {
      port,
      host: "0.0.0.0",
      allowedHosts,
    },
  };
});
