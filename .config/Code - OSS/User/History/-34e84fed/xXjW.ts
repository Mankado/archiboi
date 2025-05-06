import { App } from "astal/gtk3"; // For app and widget-related components
//import { exec, execAsync, } from "gi://AstalUtils"; // For utilities
//import { monitorFile, ensureDirectory } from "gi://AstalFile";

const entry = `${App.configDir}/widgets/main.ts`;
const outdir = "/tmp/ags/main.js";
const scss = `${App.configDir}/style/style.scss`;
const css = "/tmp/ags/style.css";

// Ensure the temporary output directory exists
ensureDirectory("/tmp/ags");

// Function to reload CSS
function reloadCss() {
    App.resetCss();
    exec(`sassc ${scss} ${css}`);
    App.applyCss(css);
}

// Apply CSS initially
reloadCss();

// Monitor SCSS changes and reapply CSS dynamically
monitorFile(`${App.configDir}/style`, () => {
    reloadCss();
});

// Build the main application using Bun and dynamically load it
(async () => {
    try {
        await execAsync([
            "bun",
            "build",
            entry,
            "--outfile",
            outdir,
            "--external",
            "resource://",
            "--external",
            "gi://*",
            "--external",
            "file://*",
        ]);

        const main = await import(`file://${outdir}`);
        App.start(main.default); // Start the app with the default exported module
    } catch (error) {
        console.error("Error during app initialization:", error);
    }
})();
