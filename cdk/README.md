# Amplify Setup

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `npx cdk deploy`      deploy this stack to your default AWS account/region
 * `npx cdk diff`        compare deployed stack with current state
 * `npx cdk synth`       emits the synthesized CloudFormation template


## Further required

Create an AWS secret for access to GitHub in the used account.
Current secret name/id = alextoop-github
Current key = token

From the directory of this readme, run the following to deploy this infrastructure:
```
npm run build
cdk deploy
```