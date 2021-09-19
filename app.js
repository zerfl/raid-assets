"use strict";

const path = require("path");
const fs = require("fs");
""
const outputDir = path.resolve(__dirname, "dist");

try {
    let heroTypes = JSON.parse(fs.readFileSync("./hero_types.json", "utf8"));
    let staticData = JSON.parse(fs.readFileSync("./static_data.json", "utf8"));

    for (let i = heroTypes.length - 1; i >= 0; i--) {
        let heroId = heroTypes[i].baseId;
        heroTypes[i].name = staticData.StaticDataLocalization[`l10n:hero-type/name?id=${heroId}#static`];
    }

    fs.writeFileSync(path.resolve(outputDir, "hero_types.json"), JSON.stringify(heroTypes, null, "\t"), "utf8");
} catch (e) {
    console.log(e);
} finally {
    console.log("done");
}