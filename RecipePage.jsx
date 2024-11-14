import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import { Navbar, Container, Row, Nav, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../logo_ga.jpg';
import './RecipeStylles.css';

const RecipePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchResults, setSearchResults] = useState([]);  // New state for search results
    const [isSearching, setIsSearching] = useState(false);   // To track if a search is active
    const [activeLink, setActiveLink] = useState('recipes');
    const navigate = useNavigate();

    // Fetch recipes on component mount
    useEffect(() => {
        axios.get('http://localhost:5000/api/recipes')
            .then((response) => setRecipes(response.data))
            .catch((error) => console.error('Error fetching recipes:', error));
    }, []);

    const handleNavClick = (link) => setActiveLink(link);

    // Handle search form submission
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const query = event.target.search.value.trim();  // Get the search query from the input field

        if (query) {
            axios.get(`http://localhost:5000/api/recipes/search?query=${query}`)
                .then(response => {
                    setSearchResults(response.data);  // Update search results state
                    setIsSearching(true);  // Set the flag to show search results
                })
                .catch(error => {
                    console.error("Error fetching search results:", error);
                    alert("There was an error fetching the search results.");
                });
        }
    };

    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: '#F0EFEA' }} fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#" style={{ color: '#A10115' }}>
                        <img src={logo} alt="Recipe Finder Logo" style={{ height: '60px', marginRight: '10px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto" navbarScroll>
                            <Nav.Link as={Link} to="/home" style={{ color: activeLink === 'home' ? '#A10115' : '#4d4f56' }} onClick={() => handleNavClick('home')}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/recipes" style={{ color: activeLink === 'recipes' ? '#A10115' : '#4d4f56' }} onClick={() => handleNavClick('recipes')}>Recipes</Nav.Link>
                            <Nav.Link as={Link} to="/planner" style={{ color: activeLink === 'planner' ? '#A10115' : '#4d4f56' }} onClick={() => handleNavClick('planner')}>Planner</Nav.Link>
                            <Nav.Link as={Link} to="/community" style={{ color: activeLink === 'community' ? '#A10115' : '#4d4f56' }} onClick={() => handleNavClick('community')}>Community</Nav.Link>
                        </Nav>
                        <Form className="d-flex me-2" onSubmit={handleSearchSubmit}>
                            <Form.Control
                                type="search"
                                name="search"
                                placeholder="Search for recipes"
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

            <br />
            <br />
            <br />
            <br />
            <br />

            <Container style={{ marginTop: '20px' }}> {/* Adjust top margin for fixed navbar offset */}
                <div className="recipe-card-container">
                    {(isSearching ? searchResults : recipes).map((recipe) => (
                        <RecipeCard key={recipe._id} recipe={recipe} />
                    ))}
                </div>
            </Container>
        </>
    );
};

export default RecipePage;
