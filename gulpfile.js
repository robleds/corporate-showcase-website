const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function() {
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Bassi Marfrig Website - v1.0.0
=========================================================

* Copyright 2021 Farmazon Brasil
* Coded by Farmazon Brasil

=========================================================

* O aviso de direitos autorais acima e este aviso de permissão devem ser incluídos em todas as cópias ou partes substanciais do Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* Bassi Marfrig Website - v1.0.0
=========================================================

* Copyright 2021 Farmazon Brasil
* Coded by Farmazon Brasil

=========================================================

* O aviso de direitos autorais acima e este aviso de permissão devem ser incluídos em todas as cópias ou partes substanciais do Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Bassi Marfrig Website - v1.0.0
=========================================================

* Copyright 2021 Farmazon Brasil
* Coded by Farmazon Brasil

=========================================================

* O aviso de direitos autorais acima e este aviso de permissão devem ser incluídos em todas as cópias ou partes substanciais do Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
