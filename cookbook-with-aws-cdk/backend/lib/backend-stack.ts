import * as cdk from '@aws-cdk/core';
import * as appsync from '@aws-cdk/aws-appsync';
import * as ddb from '@aws-cdk/aws-dynamodb';
import * as lambda from '@aws-cdk/aws-lambda';

export class BackendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create the GraphQL API using AppSync API:
    const api = new appsync.GraphqlApi(this, "Api", {
      name: "cdk-recipes-appsync-api",
      schema: appsync.Schema.fromAsset("graphql/schema.graphql"),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
          apiKeyConfig: {
            expires: cdk.Expiration.after(cdk.Duration.days(365))
          }
        },
      },
      xrayEnabled: true,
    });

    // Print out the AppSync GraphQL endpoint to the terminal:
    new cdk.CfnOutput(this, "GraphQLAPIURL", {
      value: api.graphqlUrl
    });

    // Prints out the AppSync GraphQL API key to the terminal
    new cdk.CfnOutput(this, "GraphQLAPIKey", {
      value: api.apiKey || ''
    });

    // Prints out the stack region to the terminal
    new cdk.CfnOutput(this, "Stack Region", {
      value: this.region
    });

    // Add Lambda function for resolving GraphQL Queries/mutations:
    const recipesLambda = new lambda.Function(this, "AppSyncRecipesHandler", {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: "main.handler",
      code: lambda.Code.fromAsset("lambda-fns"),
      memorySize: 1024
    });

    // Set the new Lambda function as a data source for the AppSync API:
    const lambdaDs = api.addLambdaDataSource("lambdaDatasource", recipesLambda);

    // connect the GraphQL Resolvers to the LambdaDatasource we created above:

    lambdaDs.createResolver({
      typeName: "Query",
      fieldName: "getAllRecipes"
    });

    lambdaDs.createResolver({
      typeName: "Query",
      fieldName: "getRecipeById"
    });

    lambdaDs.createResolver({
      typeName: "Mutation",
      fieldName: "createRecipe"
    });

    lambdaDs.createResolver({
      typeName: "Mutation",
      fieldName: "updateRecipe"
    });

    lambdaDs.createResolver({
      typeName: "Mutation",
      fieldName: "deleteRecipe"
    }); 
    
    
    // Add a DynamoDB Table:
    const recipesTable = new ddb.Table(this, "CDKRecipesTable", {
      billingMode: ddb.BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: "id",
        type: ddb.AttributeType.STRING
      }
    });

    // enable the Lambda function to access the DynamoDB table (using IAM)
    recipesTable.grantFullAccess(recipesLambda);

    // create an environment variable that we will use in the function code:
    recipesLambda.addEnvironment("RECIPES_TABLE", recipesTable.tableName);

  }
}
