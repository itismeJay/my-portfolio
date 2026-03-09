import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	server: {
		host: "::",
		port: 8080,
		hmr: {
			overlay: false,
		},
	},
	plugins: [
		react(),
		// lovable-tagger removed
		mode === "production" && visualizer({ filename: "dist/stats.html", open: false, gzipSize: true }),
	].filter(Boolean),
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		chunkSizeWarningLimit: 1200,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (!id) return;
					if (id.includes('node_modules')) {
						if (id.includes('three-globe')) return 'vendor_three_globe';
						if (id.includes('@react-three') || id.includes('@react-three/fiber') || id.includes('@react-three')) return 'vendor_react_three';
						if (id.includes('three')) return 'vendor_three';
						if (id.includes('drei') || id.includes('@react-three/drei')) return 'vendor_drei';
						if (id.includes('react') || id.includes('react-dom')) return 'vendor_react';
						return 'vendor';
					}
				}
			}
		}
	}
}));
