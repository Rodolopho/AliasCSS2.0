var gulp=require("gulp");
// var browserify=require("browserify");
var concat=require("gulp-concat");
var uglify=require("gulp-uglify");

gulp.task("default",function(){
	
});

gulp .task("concat", function(){
	 var compressed=gulp.src(["./components/staticClassNames.js",
				"./components/propertyAlias.js",
				"./components/deviceAlias.js",
				"./extension/mediaquery.js",
				"./extension/clone.js",
				"./components/propertyAliasUpdate.js",
				"./components/compilerUpdate.js",
				"./components/printerUpdate.js",
				"./components/acssRibbionBar.js"
				 ])
	.pipe(concat('acss.js'))
	.pipe(gulp.dest("./builds/distribution/"))
	.pipe(concat('acss.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest("./builds/distribution/"))
	.pipe(gulp.dest("public/lib/"));
})

gulp.watch("./components/*.js", ['concat']);