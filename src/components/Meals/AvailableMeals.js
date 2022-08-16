import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Paracetemol',
    description: 'A strip of 10 tablets',
    price: 100,
  },
  {
    id: 'm2',
    name: 'Bandages',
    description: 'One box',
    price: 75,
  },
  {
    id: 'm3',
    name: 'Acetomenophen',
    description: 'A Strip of 10 Pills',
    price: 80,
  },
  {
    id: 'm4',
    name: 'Mask',
    description: 'A box of 25 pieces',
    price: 200,
  },
  {
    id: 'm5',
    name: 'Cough Syrup',
    description: 'A bottle',
    price: 150,
  },
  {
    id: 'm6',
    name: 'Horlics',
    description: 'A box ',
    price: 300,
  },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal)=><MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />)
    return (
        <section className={classes.meals}>
           <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;