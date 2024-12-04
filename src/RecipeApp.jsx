import React, { useState } from 'react';

const RecipeApp = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const recipes = [
    { name: 'Spaghetti Carbonara', ingredients: 'Spaghetti, eggs, cheese, pancetta, pepper.', imgSrc: '/images/recipe 1.jpg' },
    { name: 'Chicken Curry', ingredients: 'Chicken, curry powder, coconut milk, garlic, onion.', imgSrc: '/images/recipe 2.jpg' },
    { name: 'Pancakes', ingredients: 'Flour, eggs, milk, sugar, baking powder.', imgSrc: '/images/recipe 3.jpg' },
    { name: 'Chocolate Cake', ingredients: 'Flour, sugar, cocoa powder, eggs, butter.', imgSrc: '/images/recipe 4.jpg' },
    { name: 'Tacos', ingredients: 'Tortillas, beef, cheese, lettuce, salsa.', imgSrc: '/images/recipe 5.jpg' },
    { name: 'Caesar Salad', ingredients: 'Romaine, croutons, parmesan, Caesar dressing.', imgSrc: '/images/recipe 6.jpg' },
    { name: 'Beef Stroganoff', ingredients: 'Beef, mushrooms, onions, sour cream, egg noodles.', imgSrc: '/images/recipe 7.jpg' },
    { name: 'Vegetable Stir Fry', ingredients: 'Mixed vegetables, soy sauce, garlic, ginger.', imgSrc: '/images/recipe 8.jpg' },
    { name: 'Margarita Pizza', ingredients: 'Pizza dough, tomatoes, mozzarella, basil.', imgSrc: '/images/recipe 9.jpg' },
    { name: 'Lentil Soup', ingredients: 'Lentils, carrots, onions, celery, spices.', imgSrc: '/images/recipe 10.jpg' },
    { name: 'BBQ Ribs', ingredients: 'Pork ribs, BBQ sauce, Eggs, spices.', imgSrc: '/images/recipe 11.jpg' },
    { name: 'Shrimp Scampi', ingredients: 'Shrimp, garlic, butter, lemon, pasta.', imgSrc: '/images/recipe 12.jpg' },
    { name: 'Stuffed Peppers', ingredients: 'Bell peppers, rice, ground meat, spices.', imgSrc: '/images/recipe 13.jpg' },
    { name: 'Baked Salmon', ingredients: 'Salmon, lemon, herbs, Eggs, garlic.', imgSrc: '/images/recipe 14.jpg' },
    { name: 'Fried Rice', ingredients: 'Rice, vegetables, eggs, soy sauce.', imgSrc: '/images/recipe 15.jpg' },
    { name: 'Chili', ingredients: 'Ground beef, beans, tomatoes, spices.', imgSrc: '/images/recipe 16.jpg' },
    { name: 'Quiche', ingredients: 'Eggs, cream, cheese, vegetables, pie crust.', imgSrc: '/images/recipe 17.jpg' },
    { name: 'Pesto Pasta', ingredients: 'Pasta, basil pesto, parmesan, pine nuts.', imgSrc: '/images/recipe 18.jpg' },
    { name: 'Apple Pie', ingredients: 'Apples, sugar, cinnamon, pie crust.', imgSrc: '/images/recipe 19.jpg' },
  ];

  const addToFavorites = (recipeName) => {
    if (!favorites.includes(recipeName)) {
      setFavorites([...favorites, recipeName]);
    } else {
      alert(`${recipeName} is already in favorites!`);
    }
  };

  const removeFromFavorites = (recipeName) => {
    setFavorites(favorites.filter(fav => fav !== recipeName));
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'purple', textAlign: 'center' }}>
        Re<span style={{ color: 'aliceblue' }}>cipe</span> App
      </h1>
      
      <div className="search" style={{ textAlign: 'center' }}>
        <input
          type="text"
          placeholder="search here...."
          value={searchQuery}
          onChange={handleSearch}
          style={{
            width: '60%',
            padding: '5px 16px',
            background: 'black',
            border: '2px solid purple',
            fontSize: '20px',
            color: 'gray',
            textTransform: 'capitalize',
            outline: 'none',
          }}
        />
      </div>

      <div className="favorites" style={{ marginTop: '20px', borderTop: '5px solid purple', paddingTop: '10px' }}>
        <h2 style={{ color: 'aliceblue' }}>Favo<span style={{ color: 'purple' }}>rites(❤️)</span></h2>
        <ul id="favorites">
          {favorites.map(recipe => (
            <li key={recipe} style={{ marginBottom: '10px', color: 'gray' }}>
              {recipe}
              <button
                className="remove-button"
                style={{
                  marginLeft: '10px',
                  cursor: 'pointer',
                  border: '1px solid purple',
                  color: 'purple',
                  backgroundColor: 'black',
                  padding: '5px 10px',
                  borderRadius: '3px',
                }}
                onClick={() => removeFromFavorites(recipe)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="recipe-container" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        {filteredRecipes.map(recipe => (
          <div className="recipe" key={recipe.name} style={{ border: '2px solid purple', borderRadius: '10px', padding: '20px', background: 'black', textAlign: 'center', margin: '10px 0', color: 'gray', width: 'calc(30% - 20px)', boxSizing: 'border-box' }}>
            <img
              src={recipe.imgSrc}
              alt={recipe.name}
              style={{
                width: '230px',
                height: '200px',
                borderRadius: '15px',
                marginRight: '10px',
              }}
            />
            <div className="recipe-info" style={{ flexGrow: '1' }}>
              <h2 style={{ fontSize: '20px' }}>{recipe.name}</h2>
              <p>{recipe.ingredients}</p>
              <button
                className="button"
                style={{
                  cursor: 'pointer',
                  backgroundColor: 'purple',
                  color: 'lightgray',
                  fontWeight: 'bold',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '3px',
                }}
                onClick={() => addToFavorites(recipe.name)}
              >
                Add to Favorites
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer>
        <div className="border" style={{ borderBottom: '2px solid purple', width: '180px', borderRadius: '10px', height: '4px', margin: 'auto', marginBottom: '15px' }}></div>
        <h3 style={{ textAlign: 'center', color: 'gray', fontSize: '18px', marginBottom: '10px' }}>
          @ CopyRight. Designed by Katheejathul Kubra.v
        </h3>
        <div className="border" style={{ borderBottom: '2px solid purple', width: '180px', borderRadius: '10px', height: '4px', margin: 'auto', marginBottom: '15px' }}></div>
      </footer>
    </div>
  );
};

export default RecipeApp;
