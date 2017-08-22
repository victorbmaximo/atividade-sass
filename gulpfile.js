var gulp 		= require("gulp");
var sass 		= require("gulp-sass");
var notify 	= require("gulp-notify");
var rename = require("gulp-rename");

/*

  Task responsável por recuperar todos arquivos no formato .scss e .sass
  e retornar para pasta css que será criada automaticamente.

*/

gulp.task("sass", function(){
	return gulp.src('./scss/style.scss')
				.pipe(sass())
				.on("error", notify.onError({title:"erro ao compilar", message:"<%= error.message %>"}))
                .pipe(rename({ suffix: '.min' }))
				.pipe(gulp.dest("./dist"))
});

/*

	Task responsável por executar de fundo todas a mudanças que houver nos arquivos

*/

gulp.task("sass:watch", function(){
	gulp.watch("./scss/style.scss", ['sass']);
});

/*
  Task default para iniciar apenas com o comando "gulp" no terminal
*/

gulp.task("default",['sass', 'sass:watch']);