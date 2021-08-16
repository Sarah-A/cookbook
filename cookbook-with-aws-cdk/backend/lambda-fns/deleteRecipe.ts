const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
import Recipe from "./Recipe";

async function deleteRecipe(recipeId:string) {
    const params = {
        TableName: process.env.RECIPES_TABLE,
        Key: {
            id: recipeId
        }
    }
    try {
        await docClient.delete(params).promise();
        return recipeId;
    } catch (err) {
        console.log("DynamoDB error: ", err);
        return null;
    }
}

export default deleteRecipe;