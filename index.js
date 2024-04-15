import {BedrockRuntimeClient, InvokeModelCommand} from "@aws-sdk/client-bedrock-runtime";

console.log("Loading EmmaChatBot Libraries");

window.BedrockRuntimeClient = BedrockRuntimeClient;
window.InvokeModelCommand = InvokeModelCommand;