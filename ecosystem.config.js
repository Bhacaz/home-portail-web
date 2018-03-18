module.exports = {
  apps : [{
	name : "web",
	script : "/usr/bin/http-server",
	args : "-p 4200",
	cwd : "dist/"
  }]
 }
