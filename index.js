import * as AWS from "@aws-sdk/client-bedrock-runtime";
const client = new AWS.BedrockRuntime({ region: "us-west-2" });

// async/await.
try {
  const data = await client.invokeModel(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .invokeModel(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.invokeModel(params, (err, data) => {
  // process err and data.
});