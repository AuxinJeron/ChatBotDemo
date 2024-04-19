import {BedrockRuntimeClient, InvokeModelCommand} from "@aws-sdk/client-bedrock-runtime";
import {fromCognitoIdentityPool} from "@aws-sdk/credential-providers";

export { BedrockRuntimeClient, InvokeModelCommand, fromCognitoIdentityPool};