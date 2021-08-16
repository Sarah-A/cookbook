import Recipe from "./Recipe";

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

type Params = {
    TableName: string | undefined,
    Key: string | {},
    ExpressionAttributeValues: any,
    ExpressionAttributeNames: any,
    UpdateExpression: string,
    ReturnValues: string
}

async function updateRecipe(recipeId: string, recipe: any) {
    let params : Params = {
        TableName: process.env.RECIPES_TABLE,
        Key: {
            id: recipeId
        },
        ExpressionAttributeValues: {},
        ExpressionAttributeNames: {},
        UpdateExpression: "",
        ReturnValues: "UPDATED_NEW"
    };
    let prefix = "set";
    let attributes = Object.keys(recipe);
    for(let i = 0; i<attributes.length ; i++) {
        let attribute = attributes[i];
        if (attribute !== "id") {
            params["UpdateExpression"] += prefix + "#" + attribute + " = :" + attribute;
            params["ExpressionAttributeValues"][":" + attribute] = recipe[attribute];
            params["ExpressionAttributeNames"]["#" + attribute] = attribute;
            prefix = ", ";
        }
    }
    console.log('params: ', params)
    try {
        await docClient.update(params).promise();
        return recipe;
    } catch (err) {
        console.log("DynamoDB error: ", err);
        return null;
    }
}

export default updateRecipe;