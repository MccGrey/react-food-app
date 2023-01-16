import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Nigerian jollof",
    description: "Finest grainny party jollof",
    price: 22.99,
  },
  {
    id: "m2",
    name: "vegetable soup",
    description: "thick leafy whole meal",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Nkwobi",
    description: "Tasty sauced cow leg",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Fish Barbecue",
    description: "Healthy...and spicy...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
