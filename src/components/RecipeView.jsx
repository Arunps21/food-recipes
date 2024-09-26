import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Ingredients from "./Ingredients";

//image imports
import PumpkinBread from './images/Pumpkin Bread Loaf incredient.jpg'
import MeatlessVeggieSoup from './images/Meatless Veggie Soup Ingredient.jpg'
import BakedPorkChops from './images/Baked Pork Chops Ingredient.jpg'
import AirFryerAcornSquash from './images/Air Fryer Acorn Squash Ingredient.jpg'
import WarmGoatCheeseDip from './images/Warm Goat Cheese Dip Ingredient.jpg'
import SalmonCakes from './images/Salmon Cakes Ingredient.jpg'

function RecipeView() {
  const params = useParams();
  console.log(params.id);

  const recipe = [
    {
      id: 1,
      title: "Pumpkin Bread Loaf",
      incredients: [
        {
          incredientTitle: "Ingredients:",
          incredient1: "•   1 ¾ cups all-purpose flour",
          incredient2: "• 1 teaspoon baking soda",
          incredient3: "• ½ teaspoon baking powder",
          incredient4: "• 1 teaspoon ground cinnamon",
          incredient5: "• ½ teaspoon ground nutmeg",
          incredient6: "• ½ teaspoon ground ginger",
          incredient7: "• ¼ teaspoon ground cloves",
          incredient8: "• ½ teaspoon salt",
          incredient9: "• 1 ½ cups granulated sugar",
          incredient10: "• 1 cup pumpkin puree (canned or fresh)",
          incredient11: "• ½ cup vegetable oil (or melted butter)",
          incredient12: "• 2 large eggs",
          incredient13: "• ¼ cup milk or water",
          incredient14: "• 1 teaspoon vanilla extract",
          incredient15: "• ½ cup chopped nuts (like walnuts or pecans)",
          incredient16: "• ½ cup chocolate chips or raisins",
        },
      ],
      image:PumpkinBread,
      make: "To prepare the **Pumpkin Bread Loaf**, begin by preheating your oven to 350°F (175°C) and greasing a 9x5-inch loaf pan or lining it with parchment paper. In a large bowl, whisk together the dry ingredients, including flour, baking soda, baking powder, cinnamon, nutmeg, ginger, cloves, salt, and sugar, until well combined. In a separate bowl, mix the wet ingredients: pumpkin puree, vegetable oil, eggs, milk, and vanilla extract. Once the wet ingredients are thoroughly combined, gently fold them into the dry ingredients, stirring just until no streaks of flour remain. If desired, fold in optional add-ins like chopped nuts or chocolate chips. Pour the batter into the prepared loaf pan and smooth the top. Bake for 50 to 60 minutes, or until a toothpick inserted into the center comes out clean. Allow the bread to cool in the pan for 10-15 minutes before transferring it to a wire rack to cool completely. Enjoy your delicious homemade pumpkin bread!",
    },
    {
      id: 2,
      title: "Meatless Veggie Soup",
      incredients: [
        {
          incredientTitle: "Ingredients:",
          incredient1: "• 2 tablespoons olive oil",
          incredient2: "• 1 medium onion, diced",
          incredient3: "• 2 cloves garlic, minced",
          incredient4: "• 2 medium carrots, sliced",
          incredient5: "• 2 celery stalks, sliced",
          incredient6: "• 1 medium zucchini, diced",
          incredient7: "• 1 medium potato, peeled and diced",
          incredient8: "• 1 cup green beans, trimmed and cut into 1-inch pieces",
          incredient9: "• 1 can (14.5 oz) diced tomatoes, with juice",
          incredient10: "• 6 cups vegetable broth",
          incredient11: "• 1 teaspoon dried thyme",
          incredient12: "• 1 teaspoon dried basil",
          incredient13: "• 1 bay leaf",
          incredient14: "• Salt and pepper, to taste",
          incredient15: "• 1 cup spinach or kale leaves, chopped",
          incredient16: "• 1 tablespoon lemon juice (optional, for added brightness)",
        },
      ],
      image:MeatlessVeggieSoup,
      make: "To prepare the Meatless Veggie Soup, begin by heating olive oil in a large pot over medium heat. Add the diced onion and sauté for about 3-4 minutes until it becomes translucent. Stir in the minced garlic and cook for another minute until fragrant. Next, add the sliced carrots, celery, zucchini, and potato, and cook for 5-6 minutes, stirring occasionally to soften the vegetables slightly. Afterward, incorporate the green beans and canned diced tomatoes, including the juice, into the pot. Pour in the vegetable broth and bring the mixture to a boil. Once boiling, reduce the heat to a simmer and season the soup with dried thyme, basil, bay leaf, salt, and pepper to taste. Let the soup simmer uncovered for about 20-25 minutes, or until the vegetables are tender. Towards the end of cooking, stir in the chopped spinach or kale and allow it to wilt in the hot soup for an additional 2-3 minutes. For a touch of brightness, you can add a tablespoon of lemon juice before serving. Remove the bay leaf and enjoy your flavorful and hearty Meatless Veggie Soup!",
    },
    {
      id: 3,
      title: "Baked Pork Chops",
      incredients: [
        {
          incredientTitle: "Ingredients:",
          incredient1: "• 4 bone-in or boneless pork chops",
          incredient2: "• 2 tablespoons olive oil",
          incredient3: "• 1 teaspoon garlic powder",
          incredient4: "• 1 teaspoon onion powder",
          incredient5: "• 1 teaspoon paprika",
          incredient6: "• 1 teaspoon dried thyme",
          incredient7: "• 1 teaspoon dried oregano",
          incredient8: "• 1 teaspoon salt (adjust to taste)",
          incredient9: "• ½ teaspoon black pepper",
          incredient10: "• ¼ cup grated Parmesan cheese (optional)",
          incredient11: "• ½ cup breadcrumbs (optional, for a crispy coating)",
          incredient12: "• Fresh parsley (for garnish)",
          incredient13: "• Lemon wedges (optional, for serving)",
          incredient14: "• 1 cup chicken broth",
          incredient15: "• ½ teaspoon salt",
          incredient16: "• ½ teaspoon dried basil",
        },
      ],
      image:BakedPorkChops,
      make: "To prepare Baked Pork Chops, preheat your oven to 375°F (190°C). Start by seasoning the pork chops on both sides with a mix of garlic powder, onion powder, paprika, thyme, oregano, basil, salt, black pepper, and cayenne pepper (if you prefer a bit of heat). In a large oven-safe skillet, heat the olive oil over medium heat and sear the pork chops for 2-3 minutes on each side until they turn golden brown. Remove the chops from the skillet and set them aside. In the same skillet, whisk together Dijon mustard, honey, and chicken broth, scraping up any brown bits left from the pork. Allow this mixture to simmer for a couple of minutes to thicken slightly. Return the pork chops to the skillet and spoon the sauce over them. Sprinkle the grated Parmesan cheese on top of each chop. Transfer the skillet to the oven and bake for 20-25 minutes until the pork reaches an internal temperature of 145°F (63°C). Once done, remove from the oven and let the pork chops rest for 5 minutes. Garnish with freshly chopped parsley before serving. Enjoy these juicy and flavorful baked pork chops!",
    },
    {
      id: 4,
      title: "Air Fryer Acorn Squash",
      incredients: [
        {
          incredientTitle: "Ingredients:",
          incredient1: "• 1 medium acorn squash",
          incredient2: "• 1 tablespoon olive oil",
          incredient3: "• 1 tablespoon maple syrup (optional for sweetness)",
          incredient4: "• 1 tablespoon brown sugar (optional for caramelization)",
          incredient5: "• 1/2 teaspoon cinnamon",
          incredient6: "• 1/4 teaspoon nutmeg",
          incredient7: "• 1/4 teaspoon ground ginger",
          incredient8: "• 1/4 teaspoon paprika (optional for a smoky flavor)",
          incredient9: "• 1/2 teaspoon garlic powder",
          incredient10: "• 1/2 teaspoon onion powder",
          incredient11: "• 1/4 teaspoon cayenne pepper (optional for heat)",
          incredient12: "• 1 tablespoon butter (melted)",
          incredient13: "• Salt (to taste)",
          incredient14: "• Black pepper (to taste)",
          incredient15: "• Chopped fresh parsley (for garnish)",
          incredient16: "• Pomegranate seeds (optional for serving)",
        },
      ],
      image:AirFryerAcornSquash,
      make: "To prepare Air Fryer Acorn Squash, start by cutting the acorn squash in half and scooping out the seeds. Then, slice it into 1-inch thick wedges. In a bowl, mix olive oil, maple syrup (if using), brown sugar, cinnamon, nutmeg, ground ginger, paprika, garlic powder, onion powder, cayenne pepper, salt, and black pepper to create a flavorful coating. Toss the squash wedges in the mixture, ensuring they're well coated. Preheat the air fryer to 375°F (190°C) and arrange the squash slices in a single layer in the basket. Cook for 12-15 minutes, flipping halfway through, until the squash is tender and caramelized. Once done, drizzle with melted butter and garnish with chopped parsley and pomegranate seeds for a burst of color and freshness. Serve immediately and enjoy!",
    },
    {
      id: 5,
      title: "Warm Goat Cheese Dip",
      incredients: [
        {
          incredientTitle: "Ingredients:",
          incredient1: "• 8 oz goat cheese (softened)",
          incredient2: "• 4 oz cream cheese (softened)",
          incredient3: "• 1/4 cup sour cream",
          incredient4: "• 1/4 cup mayonnaise",
          incredient5: "• 2 cloves garlic (minced)",
          incredient6: "• 1 tablespoon fresh thyme (chopped)",
          incredient7: "• 1 tablespoon fresh rosemary (chopped)",
          incredient8: "• 1/4 cup sun-dried tomatoes (chopped)",
          incredient9: "• 2 tablespoons olive oil",
          incredient10: "• 1/4 cup Parmesan cheese (grated)",
          incredient11: "• 1/2 teaspoon red pepper flakes (optional)",
          incredient12: "• Salt (to taste)",
          incredient13: "• Black pepper (to taste)",
          incredient14: "• 2 tablespoons honey",
          incredient15: "• 1/4 cup walnuts (chopped, toasted)",
          incredient16: "• 1 tablespoon fresh parsley (for garnish)",
        },
      ],
      image:WarmGoatCheeseDip,
      make: "To prepare this **Warm Goat Cheese Dip**, start by preheating your oven to 375°F (190°C). In a medium-sized bowl, blend together the softened goat cheese, cream cheese, sour cream, and mayonnaise until the mixture is smooth and creamy. Next, stir in the minced garlic, fresh thyme, rosemary, chopped sun-dried tomatoes, olive oil, and grated Parmesan cheese, adding a pinch of red pepper flakes if you prefer a hint of heat. Season the mixture with salt and black pepper to your taste. Once combined, transfer the dip to a small oven-safe dish and bake it for 15 to 20 minutes, or until the top is golden and bubbling. After baking, drizzle honey over the top and sprinkle with toasted walnuts and fresh parsley for a touch of sweetness and crunch. Serve the warm dip with crackers, toasted bread, or fresh vegetables for dipping, and enjoy!",
    },
    {
      id: 6,
      title: "Salmon Cakes",
      incredients: [
        {
          incredientTitle: "Ingredients:",
          incredient1: "• 1 lb canned salmon (drained and flaked)",
          incredient2: "• 1/2 cup breadcrumbs",
          incredient3: "• 1/4 cup finely chopped onion",
          incredient4: "• 1/4 cup finely chopped celery",
          incredient5: "• 1/4 cup finely chopped red bell pepper",
          incredient6: "• 2 cloves garlic (minced)",
          incredient7: "• 1 egg (beaten)",
          incredient8: "• 2 tablespoons mayonnaise",
          incredient9: "• 1 tablespoon Dijon mustard",
          incredient10: "• 1 tablespoon lemon juice",
          incredient11: "• 1/4 teaspoon paprika",
          incredient12: "• 1/4 teaspoon salt",
          incredient13: "• 1/4 teaspoon black pepper",
          incredient14: "• 2 tablespoons fresh parsley (chopped)",
          incredient15: "• 1 tablespoon olive oil (for frying)",
          incredient16: "• Lemon wedges (for serving)",
        },
      ],
      image:SalmonCakes,
      make: "To prepare Salmon Cakes, start by draining and flaking the canned salmon in a large bowl. Add breadcrumbs, finely chopped onion, celery, and red bell pepper, along with minced garlic. In a separate small bowl, whisk together the beaten egg, mayonnaise, Dijon mustard, and lemon juice. Pour this mixture into the salmon mixture, stirring to combine. Season with paprika, salt, black pepper, and fresh parsley. Form the mixture into small patties, making sure they hold their shape. Heat olive oil in a large skillet over medium heat and fry the salmon cakes for 3-4 minutes on each side until golden brown and crispy. Serve with lemon wedges on the side for a fresh citrusy finish. Enjoy these flavorful Salmon Cakes as a delicious meal or appetizer!",
    },
  ];

  return (
    <>
      <Container>
        <Row>
          {recipe.length > 0 &&
            recipe
              .filter((comp) => comp.id == params.id)
              .map((list) => (
                <>
                <h1 className="text-center text-light mt-4">{list.title}</h1>
                  <Col lg={6} className="mt-4">
                  <img src={list.image} alt="" style={{width:"100%" ,height:"700px"}}/></Col>
                  <Col lg={6}>
                    <Ingredients shareIngredient={list.incredients}/>
                  </Col>
                  <Col className="mb-4 text-white" lg={12}>
                  <h2 className="text-center text-light mt-4">Preparation</h2>
                  {list.make}
                  </Col>
                </>
              ))}
        </Row>
      </Container>
    </>
  );
}

export default RecipeView;
