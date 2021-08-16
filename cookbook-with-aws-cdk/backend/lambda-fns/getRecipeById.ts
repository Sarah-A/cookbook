const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

async function getRecipeById(recipeId:string) {
    const params = {
        TableName: process.env.RECIPES_TABLE,
        Key: {
            id: recipeId
        }
    }
    try {
        const { Item } = await docClient.get(params).promise();
        return Item;
    } catch (err) {
        console.log("DynamoDB error: ", err);
        return null;
    }
}

export default getRecipeById;