/* jshint esversion:6 */

/*
	This is our extensible storage object. We've written it so that we can
	replace any parts of it in the future with calls to file system or mongo
	without too much effort.
*/
function Storage() {
	var projects = [];
	var users = [];

	this.addProject = (project, cb)  => {
		// cb = callback
		projects.push(project);
		if (cb) {
			cb();
		}
	};

	this.getAllProjects = (cb) => {
		// cb = callback
		cb(projects);
	};

	this.getProjectByName = (name, cb) => {
		var project;

		for (var i of projects) {
			if (i.name === name) {
				project = i;
			}
		}

		cb(project);
	};
}

module.exports = Storage;
