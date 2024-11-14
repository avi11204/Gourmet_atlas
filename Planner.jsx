
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import './Planner.css';
import logo from '../logo_ga.jpg';

const dietOptions = [
    { id: 1, title: 'Weight Loss', description: 'Reduce calories and lose weight', targetCalories: 1800, macronutrients: '40% Protein, 30% Carbs, 30% Fats' },
    { id: 2, title: 'Muscle Gain', description: 'Increase calories and build muscle', targetCalories: 2500, macronutrients: '50% Protein, 30% Carbs, 20% Fats' },
    { id: 3, title: 'Maintenance', description: 'Maintain your current weight', targetCalories: 2200, macronutrients: '40% Protein, 40% Carbs, 20% Fats' },
    { id: 4, title: 'Keto Diet', description: 'Low-carb, high-fat diet to burn fat', targetCalories: 2000, macronutrients: '5% Carbs, 70% Fats, 25% Protein' },
];

const Planner = () => {
    const [selectedDiet, setSelectedDiet] = useState(null);
    const [mealPlan, setMealPlan] = useState([]);
    const [progress, setProgress] = useState({ calories: 0, protein: 0, carbs: 0, fats: 0 });
    const [activeLink, setActiveLink] = useState('planner');

    const handleNavClick = (link) => {
        setActiveLink(link);
    };

    const handleDietSelect = (diet) => {
        setSelectedDiet(diet);
        const generatedMealPlan = generateMealPlan(diet);
        setMealPlan(generatedMealPlan);
        resetProgress();
    };

    const generateMealPlan = (diet) => [
        { meal: 'Breakfast', calories: 400, protein: 25, carbs: 40, fats: 15 },
        { meal: 'Lunch', calories: 600, protein: 40, carbs: 50, fats: 20 },
        { meal: 'Dinner', calories: 700, protein: 50, carbs: 60, fats: 25 },
        { meal: 'Snack', calories: 300, protein: 15, carbs: 20, fats: 15 },
    ];

    const resetProgress = () => {
        setProgress({ calories: 0, protein: 0, carbs: 0, fats: 0 });
    };

    const trackProgress = (meal) => {
        setProgress(prevProgress => ({
            calories: prevProgress.calories + meal.calories,
            protein: prevProgress.protein + meal.protein,
            carbs: prevProgress.carbs + meal.carbs,
            fats: prevProgress.fats + meal.fats,
        }));
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Implement search functionality here if required
        alert("Error in searching plan.");
    };

    return (
        <div className="planner-container">
            <Navbar expand="lg" style={{ backgroundColor: '#F0EFEA' }} fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#" style={{ color: '#A10115' }}>
                        <img src={logo} alt="Recipe Finder Logo" style={{ height: '60px', marginRight: '10px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link as={Link} to="/home" style={{ color: activeLink === 'home' ? '#A10115' : '#4d4f56' }} onClick={() => handleNavClick('home')}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/recipes" style={{ color: activeLink === 'recipes' ? '#A10115' : '#4d4f56' }} onClick={() => handleNavClick('recipes')}>Recipes</Nav.Link>
                            <Nav.Link as={Link} to="/planner" style={{ color: activeLink === 'planner' ? '#A10115' : '#4d4f56' }} onClick={() => handleNavClick('planner')}>Planner</Nav.Link>
                            <Nav.Link as={Link} to="/community" style={{ color: activeLink === 'community' ? '#A10115' : '#4d4f56' }} onClick={() => handleNavClick('community')}>Community</Nav.Link>
                        </Nav>
                        <Form className="d-flex me-2" onSubmit={handleSearchSubmit}>
                            <Form.Control
                                type="search"
                                name="search"
                                placeholder="Search for diet paln"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-danger" type="submit">
                                Search
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br /><br /><br /><br />

            <h1>Nutrition Planner</h1>
            <div className="diet-selection">
                <h2>Select Your Diet</h2>
                <div className="diet-cards">
                    {dietOptions.map(diet => (
                        <div
                            key={diet.id}
                            className={`diet-card ${selectedDiet && selectedDiet.id === diet.id ? 'selected' : ''}`}
                            onClick={() => handleDietSelect(diet)}
                        >
                            <h3>{diet.title}</h3>
                            <p>{diet.description}</p>
                            <p>Calories: {diet.targetCalories} kcal</p>
                            <p>Macros: {diet.macronutrients}</p>
                        </div>
                    ))}
                </div>
            </div>

            {selectedDiet && (
                <div className="meal-plan">
                    <h2>Your Meal Plan ({selectedDiet.title})</h2>
                    <div className="meal-list">
                        {mealPlan.map((meal, index) => (
                            <div key={index} className="meal-item">
                                <h3>{meal.meal}</h3>
                                <p>Calories: {meal.calories} kcal</p>
                                <p>Protein: {meal.protein} g</p>
                                <p>Carbs: {meal.carbs} g</p>
                                <p>Fats: {meal.fats} g</p>
                                <button onClick={() => trackProgress(meal)}>Track this Meal</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedDiet && (
                <div className="progress-tracker">
                    <h3>Your Progress</h3>
                    <p>Calories: {progress.calories} / {selectedDiet.targetCalories} kcal</p>
                    <p>Protein: {progress.protein} g</p>
                    <p>Carbs: {progress.carbs} g</p>
                    <p>Fats: {progress.fats} g</p>
                </div>
            )}
        </div>
    );
};

export default Planner;
