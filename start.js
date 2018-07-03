if (process.argv.join(" ").includes("confirm-started")) {
  console.log("pwd: ", process.cwd())
 setTimeout(function(){
  var fs = require("fs")
  var out = fs.readFileSync("start.out").toString()
  if (out.length > 0) {
    console.error(out)
    process.exit(1)
  } else {
    process.exit(0)
  }
 }, 1000)
} else {
  const server=require('node-http-server');
 
  server.deploy({
    port: 8000,
    root: __dirname + "/todomvc"
  });
}
