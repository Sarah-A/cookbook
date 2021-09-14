import { FunctionComponent } from "react";

export interface RecipeForDisplayType {
    id: string;
    name: string;
    rating?: number | null;
    prepTimeInMinutes?: number | null;
    cookTimeInMinutes?: number | null;
    image?: string | null;
}

const Recipe: FunctionComponent<RecipeForDisplayType> = (props: RecipeForDisplayType) => {
    const {id, name, rating, prepTimeInMinutes, cookTimeInMinutes, image} = props;

    // TODO: Add a link to the recipe details (once I add them)
    console.log(`Add details for recipe ${id}`);

    return(
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                {image 
                    && <img data-testid="recipe-card-image" className="card-img-top" src={image} alt={name} />                       
                } 
                <div className="card-body text-align-left">
                    <h5 className="card-title" data-testid="recipe-card-title">{name}</h5>
                    <p data-testid="recipe-card-rating">Rating: {rating ? rating : ""}</p>
                    {prepTimeInMinutes 
                        && <p data-testid="recipe-card-prep-time">Prep time (min): {prepTimeInMinutes} </p> 
                    }
                    {cookTimeInMinutes 
                        && <p data-testid="recipe-card-cook-time">Cook time (min): {cookTimeInMinutes} </p> 
                    }
                </div>
            </div>
        </div>
    );

}

export default Recipe;