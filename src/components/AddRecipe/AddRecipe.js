import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Original options arrays remain the same
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

  // All handlers remain the same as before, just updating the return JSX
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  // Other handlers remain unchanged...
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
    if (isFormValid) {
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
    }
  };

  const isFormValid = recipe.title && recipe.prepTime && recipe.cookTime && recipe.servings && recipe.difficulty && recipe.cuisine && recipe.ingredients.length > 0 && recipe.instructions.length > 0;

  return (
    <div className="container py-4">
      <h2 className="mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="row g-3">
          <div className="col-12">
            <label className="form-label">ID (Auto-generated):</label>
            <input 
              className="form-control bg-light" 
              name="id" 
              value={recipe.id} 
              readOnly 
              disabled
              style={{ cursor: 'not-allowed' }}
            />
          </div>

          <div className="col-12">
            <label className="form-label">Title:</label>
            <input 
              type="text" 
              className="form-control" 
              name="title" 
              value={recipe.title} 
              onChange={handleChange} 
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Prep Time:</label>
            <select className="form-select" name="prepTime" value={recipe.prepTime} onChange={handleChange}>
              <option value="">Select prep time</option>
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Cook Time:</label>
            <select className="form-select" name="cookTime" value={recipe.cookTime} onChange={handleChange}>
              <option value="">Select cook time</option>
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Servings:</label>
            <select className="form-select" name="servings" value={recipe.servings} onChange={handleChange}>
              <option value="">Select servings</option>
              {servingOptions.map((serving, index) => (
                <option key={index} value={serving}>{serving}</option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Difficulty:</label>
            <select className="form-select" name="difficulty" value={recipe.difficulty} onChange={handleChange}>
              <option value="">Select a difficulty</option>
              {difficultyOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Cuisine:</label>
            <select className="form-select" name="cuisine" value={recipe.cuisine} onChange={handleChange}>
              <option value="">Select a cuisine</option>
              {cuisineOptions.map((cuisine, index) => (
                <option key={index} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>

          <div className="col-12">
            <label className="form-label">Ingredients:</label>
            <IngredientList
              ingredients={recipe.ingredients}
              onAdd={handleIngredientAdd}
              onRemove={handleIngredientRemove}
              measurementOptions={measurementOptions}
            />
          </div>

          <div className="col-12">
            <label className="form-label">Instructions:</label>
            <InstructionList
              instructions={recipe.instructions}
              onAdd={handleInstructionAdd}
              onRemove={handleInstructionRemove}
              onReorder={handleInstructionReorder}
            />
          </div>

          <div className="col-12">
            <label className="form-label">Tags:</label>
            <TagList
              tags={recipe.tags}
              onAdd={handleTagAdd}
              onRemove={handleTagRemove}
            />
          </div>

          <div className="col-12">
            <button 
              type="submit" 
              className="btn btn-primary w-100" 
              disabled={!isFormValid}
            >
              Add Recipe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const IngredientItem = ({ ingredient, onRemove }) => (
  <div className="d-flex align-items-center mb-2">
    <span className="me-2">{ingredient.amount} {ingredient.unit}</span>
    <span className="me-auto">{ingredient.name}</span>
    <button className="btn btn-outline-danger btn-sm" onClick={onRemove}>Remove</button>
  </div>
);

const IngredientList = ({ ingredients, onAdd, onRemove, measurementOptions }) => {
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientAmount, setIngredientAmount] = useState('');
  const [ingredientUnit, setIngredientUnit] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (isValidInput()) {
        handleButtonClick();
      }
    }
  };

  const isValidInput = () => {
    return ingredientName.trim() && !isNaN(ingredientAmount) && ingredientUnit;
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || (!isNaN(value) && value.match(/^\d*\.?\d*$/))) {
      setIngredientAmount(value);
    }
  };

  const handleButtonClick = () => {
    if (isValidInput()) {
      onAdd({
        name: ingredientName.trim(),
        amount: parseFloat(ingredientAmount),
        unit: ingredientUnit
      });
      setIngredientName('');
      setIngredientAmount('');
      setIngredientUnit('');
    }
  };

  return (
    <div className="mb-3">
      <div className="row g-2 mb-3">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            value={ingredientName}
            onChange={(e) => setIngredientName(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ingredient name"
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            className="form-control"
            value={ingredientAmount}
            onChange={handleAmountChange}
            onKeyDown={handleKeyDown}
            placeholder="Amount"
          />
        </div>
        <div className="col-3">
          <select
            className="form-select"
            value={ingredientUnit}
            onChange={(e) => setIngredientUnit(e.target.value)}
          >
            <option value="">Unit</option>
            {measurementOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="col-2">
          <button 
            className="btn btn-primary w-100" 
            onClick={handleButtonClick}
            disabled={!isValidInput()}
          >
            Add
          </button>
        </div>
      </div>
      <div className="list-group">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="list-group-item">
            <IngredientItem
              ingredient={ingredient}
              onRemove={() => onRemove(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const InstructionItem = ({ instruction, index, onRemove }) => (
  <Draggable draggableId={`instruction-${index}`} index={index}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`list-group-item d-flex align-items-center ${snapshot.isDragging ? 'bg-light' : ''}`}
        style={{
          ...provided.draggableProps.style,
          cursor: 'grab'
        }}
      >
        <span className="me-auto">{instruction}</span>
        <button className="btn btn-outline-danger btn-sm" onClick={() => onRemove(index)}>Remove</button>
      </div>
    )}
  </Draggable>
);

const InstructionList = ({ instructions, onAdd, onRemove, onReorder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="mb-3">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter an instruction"
        />
        <button 
          className="btn btn-primary" 
          onClick={handleAdd}
          disabled={!inputValue.trim()}
        >
          Add Instruction
        </button>
      </div>
      <DragDropContext onDragEnd={onReorder}>
        <Droppable droppableId="instructions">
          {(provided) => (
            <div 
              className="list-group" 
              {...provided.droppableProps} 
              ref={provided.innerRef}
              style={{ minHeight: '50px' }}
            >
              {instructions.map((instruction, index) => (
                <InstructionItem
                  key={`instruction-${index}`}
                  index={index}
                  instruction={`${index + 1}. ${instruction}`}
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
  <span className="badge bg-secondary me-2 mb-2">
    {tag}
    <button
      type="button"
      className="btn-close ms-2"
      onClick={onRemove}
      aria-label="Remove tag"
      style={{ fontSize: '0.5rem' }}
    ></button>
  </span>
);

const TagList = ({ tags, onAdd, onRemove }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="mb-3">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a tag"
        />
        <button className="btn btn-primary" onClick={handleAdd}>Add Tag</button>
      </div>
      <div className="d-flex flex-wrap">
        {tags.map((tag, index) => (
          <TagItem
            key={index}
            tag={tag}
            onRemove={() => onRemove(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminAddRecipe;