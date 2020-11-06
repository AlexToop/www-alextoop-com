import * as cdk from '@aws-cdk/core';
import * as amplify from "@aws-cdk/aws-amplify";

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const amplifyApp = new amplify.App(this, "cdkwwwalextoopcom ", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'AlexToop',
        repository: 'www-alextoop-com',
        oauthToken: cdk.SecretValue.secretsManager("alextoop-github", {
          jsonField: "token",
        })
      }),
    });
    
    const masterBranch = amplifyApp.addBranch("master");
  }
}
