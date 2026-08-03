const core = require("@actions/core");
const github = require("@actions/github");

try{

core.debug("debug");
core.error("error");
core.warning("warning");

const who_to_greet = core.getInput("who_to_greet");

console.log(`hello ${who_to_greet}`);

const time = new Date();
core.setOutput("time", time.toTimeString());

core.exportVariable("TIME", time);

core.startGroup("logging the github context");
console.log(JSON.stringify(github.context, null, 2));
core.endGroup();

}catch(error){
    core.setFailed(error.message);
}
