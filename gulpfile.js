var gulp = require('gulp');

gulp.task('default', function() {
	var walk = function(dir) {
		var results = []
		var list = fs.readdirSync(dir)
		list.forEach(function(file) {
			file = dir + '/' + file
			var stat = fs.statSync(file)
			if (stat && stat.isDirectory()) results = results.concat(walk(file))
			else results.push(file)
		})
		return results
	}
	var fs = require('fs');
	var files = walk('base');
	files.push('framework/uibase.js');
    files.push('common/color.js');

	var names = [];
	var filecnt = "";
	filecnt += files.filter((f) => {
		return f.endsWith(".js")
	}).map((f) => {
		var name = f.split(".").slice(0, -1).join("").split("/");
		name = name[name.length - 1];
		names.push(name);
		return `var ${name} = require('./${f}');`
	}).join("\n");

	filecnt += "\n\nmodule.exports = {" + names.join(",") + "}";
	fs.writeFile("index.js", filecnt);
});
