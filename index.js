import {BedrockRuntimeClient, InvokeModelCommand} from "@aws-sdk/client-bedrock-runtime";

window.BedrockRuntimeClient = BedrockRuntimeClient;
window.InvokeModelCommand = InvokeModelCommand;

export function testFunc() {
    console.log("Loading EmmaChatBot Libraries");
}
