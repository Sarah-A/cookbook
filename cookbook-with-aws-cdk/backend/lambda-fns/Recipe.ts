type Recipe = {
    id: string;
    name: string;
    description: string;
    image: string;
    serves: number;
    ingredients: string[];
    method: string;
}

export default Recipe;