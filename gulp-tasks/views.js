"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import pug from "gulp-pug";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";

var data = require("gulp-data");

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("views", () => {
    return gulp.src(paths.views.src)
        .pipe(data(function (file) {
            return {
                filename: file.history[0].replace(file.base, "").slice(0, -4).slice(1),
                filenameCatalog: file.history[0].replace(file.base, "").slice(0, -4).slice(1).split("\\")[0]
            };
        }))
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulpif(production, replace(".css", ".min.css")))
        .pipe(gulpif(production, replace(".js", ".min.js")))
        .pipe(gulp.dest(paths.views.dist))
        .pipe(browsersync.stream());
});