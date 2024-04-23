import {BedrockRuntimeClient, InvokeModelCommand} from "@aws-sdk/client-bedrock-runtime";
import {fromCognitoIdentityPool} from "@aws-sdk/credential-providers";
import { CognitoIdentityProviderClient, RespondToAuthChallengeCommand, InitiateAuthCommand } from '@aws-sdk/client-cognito-identity-provider';
import { EC2Client, DescribeInstancesCommand } from "@aws-sdk/client-ec2"; 


export { 
    BedrockRuntimeClient, 
    InvokeModelCommand, 
    fromCognitoIdentityPool,
    CognitoIdentityProviderClient,
    InitiateAuthCommand,
    RespondToAuthChallengeCommand,
    EC2Client,
    DescribeInstancesCommand
};