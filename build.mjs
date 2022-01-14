import esbuild from "esbuild";
import vuePlugin from "esbuild-plugin-vue3";


esbuild.build({
	//watch: true,
    entryPoints: ["src/app.js"],
    bundle: true,
    outfile: "dist/out.js",
    plugins: [vuePlugin()],	
	logLevel: "info",
});