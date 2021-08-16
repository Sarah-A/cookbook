const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
import Recipe from "./Recipe";

async function createRecipe(recipe: Recipe) {            
    const params = {
        TableName: process.env.RECIPES_TABLE,
        Item: recipe
    }
    try {
        await docClient.put(params).promise();
        return recipe;
    } catch (err) {
        console.log("DynamoDB error: ", err);
        return null;
    }
}

export default createRecipe;