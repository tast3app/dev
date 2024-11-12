// AdminAddRecipe.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const cuisineOptions = [
  'American', 'Italian', 'Chinese', 'Mexican', 'Japanese', 'Indian', 'Thai', 
  'Mediterranean', 'French', 'Greek', 'Spanish', 'Vietnamese', 'Brazilian', 
  'Caribbean', 'Korean'
];

const difficultyOptions = ['Easy', 'Medium', 'Hard'];

const measurementOptions = [
  'cups', 'tablespoons', 'teaspoons', 'grams', 'ounces', 'pounds', 
  'milliliters', 'liters', 'pinch', 'dash'
];

const timeOptions = Array.from({ length: 49 }, (_, i) => `${i * 15} mins`);
const servingOptions = Array.from({ length: 8 }, (_, i) => i + 1);

const AdminAddRecipe = ({ onAddRecipe }) => {
  const [recipe, setRecipe] = useState({
    id: uuidv4(),
    title: '',
    image: '/default-recipe-image.jpg',
    prepTime: '',
    cookTime: '',
    servings: '',
    difficulty: '',
    cuisine: '',
    ingredients: [],
    instructions: [],
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleIngredientAdd = (ingredient) => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: [...prevRecipe.ingredients, ingredient],
    }));
  };

  const handleIngredientRemove = (index) => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: prevRecipe.ingredients.filter((_, i) => i !== index),
    }));
  };

  const handleInstructionAdd = (instruction) => {
    if (instruction) {
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        instructions: [...prevRecipe.instructions, instruction],
      }));
    }
  };

  const handleInstructionRemove = (index) => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      instructions: prevRecipe.instructions.filter((_, i) => i !== index),
    }));
  };

  const handleInstructionReorder = (result) => {
    if (!result.destination) return;
    const items = Array.from(recipe.instructions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      instructions: items,
    }));
  };

  const handleTagAdd = (tag) => {
    if (tag) {
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        tags: [...prevRecipe.tags, tag],
      }));
    }
  };

  const handleTagRemove = (index) => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      tags: prevRecipe.tags.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe(recipe);
    setRecipe({
      id: uuidv4(),
      title: '',
      image: '/default-recipe-image.jpg',
      prepTime: '',
      cookTime: '',
      servings: '',
      difficulty: '',
      cuisine: '',
      ingredients: [],
      instructions: [],
      tags: [],
    });
  };

  const isFormValid = recipe.title && recipe.prepTime && recipe.cookTime && recipe.servings && recipe.difficulty && recipe.cuisine && recipe.ingredients.length > 0 && recipe.instructions.length > 0;

  return (
    <div>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields */}
        <label>ID:</label>
        <input name="id" value={recipe.id} readOnly />

        <label>Title:</label>
        <input name="title" value={recipe.title} onChange={handleChange} required />

        <label>Prep Time:</label>
        <select name="prepTime" value={recipe.prepTime} onChange={handleChange} required>
          <option value="">Select prep time</option>
          {timeOptions.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label>Cook Time:</label>
        <select name="cookTime" value={recipe.cookTime} onChange={handleChange} required>
          <option value="">Select cook time</option>
          {timeOptions.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label>Servings:</label>
        <select name="servings" value={recipe.servings} onChange={handleChange} required>
          <option value="">Select servings</option>
          {servingOptions.map((serving, index) => (
            <option key={index} value={serving}>
              {serving}
            </option>
          ))}
        </select>

        <label>Difficulty:</label>
        <select name="difficulty" value={recipe.difficulty} onChange={handleChange} required>
          <option value="">Select a difficulty</option>
          {difficultyOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label>Cuisine:</label>
        <select name="cuisine" value={recipe.cuisine} onChange={handleChange} required>
          <option value="">Select a cuisine</option>
          {cuisineOptions.map((cuisine, index) => (
            <option key={index} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>

        <label>Ingredients:</label>
        <IngredientList
          ingredients={recipe.ingredients}
          onAdd={handleIngredientAdd}
          onRemove={handleIngredientRemove}
          measurementOptions={measurementOptions}
        />

        <label>Instructions:</label>
        <InstructionList
          instructions={recipe.instructions}
          onAdd={handleInstructionAdd}
          onRemove={handleInstructionRemove}
          onReorder={handleInstructionReorder}
        />

        <label>Tags:</label>
        <TagList
          tags={recipe.tags}
          onAdd={handleTagAdd}
          onRemove={handleTagRemove}
        />

        <button type="submit" disabled={!isFormValid}>
          Add Recipe
        </button>
      </form>
    </div>
  );
};

const IngredientItem = ({ ingredient, onRemove }) => (
  <div>
    <span>{ingredient.amount} {ingredient.unit}</span> <span>{ingredient.name}</span>
    <button onClick={onRemove}>Remove</button>
  </div>
);

const IngredientList = ({ ingredients, onAdd, onRemove, measurementOptions }) => {
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientAmount, setIngredientAmount] = useState('');
  const [ingredientUnit, setIngredientUnit] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onAdd({ name: ingredientName, amount: ingredientAmount, unit: ingredientUnit });
      setIngredientName('');
      setIngredientAmount('');
      setIngredientUnit('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={ingredientName}
        onChange={(e) => setIngredientName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ingredient name"
      />
      <input
        type="text"
        value={ingredientAmount}
        onChange={(e) => setIngredientAmount(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Amount"
      />
      <select
        value={ingredientUnit}
        onChange={(e) => setIngredientUnit(e.target.value)}
        onKeyDown={handleKeyDown}
      >
        <option value="">Unit</option>
        {measurementOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={handleKeyDown}>Add Ingredient</button>
      {ingredients.map((ingredient, index) => (
        <IngredientItem
          key={index}
          ingredient={ingredient}
          onRemove={() => onRemove(index)}
        />
      ))}
    </div>
  );
};

const InstructionItem = ({ instruction, index, onRemove }) => (
  <Draggable draggableId={`instruction-${index}`} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <span>{instruction}</span>
        <button onClick={() => onRemove(index)}>Remove</button>
      </div>
    )}
  </Draggable>
);

const InstructionList = ({ instructions, onAdd, onRemove, onReorder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    onAdd(inputValue.trim());
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  const handleDragEnd = (result) => {
    onReorder(result);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter an instruction"
      />
      <button onClick={handleAdd}>Add Instruction</button>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="instructions">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {instructions.map((instruction, index) => (
                <InstructionItem
                  key={`instruction-${index}`}
                  index={index}
                  instruction={instruction}
                  onRemove={onRemove}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

const TagItem = ({ tag, onRemove }) => (
  <div>
    <span>{tag}</span>
    <button onClick={onRemove}>Remove</button>
  </div>
);

const TagList = ({ tags, onAdd, onRemove }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    onAdd(inputValue.trim());
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a tag"
      />
      <button onClick={handleAdd}>Add Tag</button>
      {tags.map((tag, index) => (
        <TagItem
          key={index}
          tag={tag}
          onRemove={() => onRemove(index)}
        />
      ))}
    </div>
  );
};

export default AdminAddRecipe;