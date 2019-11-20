const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  var request = require("request");
  var api = "https://api.beaglesecurity.com/v1/test/start";
  var requestData = {
    "access_token": "ikfoh0fpdluw0rvglrtonipe46ctu7bc",
    "application_token": "8y81s7e3d88zqp4lzdllq0nacfao3i21"
};
  request({
      url: api,
      method: "POST",
      json: requestData
  }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
          console.log(body);
      }
      else {
          console.log("response.statusCode: " + response.statusCode);
          console.log("response.statusText: " + response.statusText);
      }
  });
} catch (error) {
  core.setFailed(error.message);
}
