import { FunctionComponent } from "react";

interface RecipeType {
    id: string;
    name: string;
    rating?: number | null;
    prepTimeInMinutes?: number | null;
    cookTimeInMinutes?: number | null;
    image?: string | null;
}

const Recipe: FunctionComponent<RecipeType> = (props: RecipeType) => {
    const {id, name, rating, prepTimeInMinutes, cookTimeInMinutes, image} = props;

    // TODO: Add a link to the recipe details (once I add them)
    console.log(`Add details for recipe ${id}`);

    return(
        <div>
            <h2>{name}</h2>
            <p>Rating: {rating ? rating : ""}</p>
            {prepTimeInMinutes 
                && <p>Prep time (min): {prepTimeInMinutes} </p> 
            }
            {cookTimeInMinutes 
                && <p>Cook time (min): {cookTimeInMinutes} </p> 
            }
            {image 
                && <div className="image-container">
                        <img src={image} alt={name} />
                    </div>
            }            
        </div>
    );

}

export default Recipe;