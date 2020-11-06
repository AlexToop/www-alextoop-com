import * as cdk from '@aws-cdk/core';
import * as amplify from "@aws-cdk/aws-amplify";
import * as codebuild from '@aws-cdk/aws-codebuild';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApp = new amplify.App(this, "cdkwwwalextoopcom", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'AlexToop',
        repository: 'www-alextoop-com',
        oauthToken: cdk.SecretValue.secretsManager("alextoop-github", {
          jsonField: "token",
        })
      }),
      buildSpec: codebuild.BuildSpec.fromObject({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'npm ci'
              ]
            },
            build: {
              commands: [
                'npm run build'
              ]
            }
          },
          artifacts: {
            baseDirectory: 'build',
            files: '**/*'
          },
          cache: {
            paths: [
              'node_modules/**/*'
            ]
          }
        }
      })
    });
    
    const masterBranch = amplifyApp.addBranch("master");
  }
}
