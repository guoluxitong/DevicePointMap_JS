const webpack = require("webpack");
const path = require("path");
const pkg = require("../package");

const rootpath = path.resolve(__dirname,"../");

const config = {
    entry:path.resolve(rootpath,"src","index.js"),
    devtool:'inline-source-map',
    output:{
        filename:"devicePointMap.min.js",
        path:path.resolve(rootpath,"min"),
        library:"devicePointMap",
        libraryTarget:"umd"
    }
};

module.exports = config;
