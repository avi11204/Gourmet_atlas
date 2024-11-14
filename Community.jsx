import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import './CommunityPage.css';
import logo from '../logo_ga.jpg';

const recipeFeedImages = [
    'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-googleFourByThree-v2.jpg',
    'https://media-cdn2.greatbritishchefs.com/media/na2pq3dp/gbc-allinsons-133-lowres.whqc_768x512q80.jpg',
    'https://www.allrecipes.com/thmb/BIMX_PChQD0xvRn4hLsaPyv9PH4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1124818-156e56b4500b4a3aae1eabe5004850c9.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgZ7jdWpV7WwhKgq4-4HHqN-qPDe7z1R6Ig&s',
    'https://thecozycook.com/wp-content/uploads/2022/08/Stuffed-Bell-Peppers-f.jpg',
    'https://www.recipetineats.com/tachyon/2017/06/Soft-Chocolate-Chip-Cookies-3.jpg?resize=500%2C500',
];

const recipeTitles = [
    'Spaghetti Carbonara',
    'Classic Margherita Pizza',
    'Avocado Salad',
    'Lemon Garlic Salmon',
    'Stuffed Bell Peppers',
    'Chocolate Chip Cookies',
];

const usernames = [
    '@chef_mario',
    '@pizza_lover',
    '@green_goodness',
    '@seafood_guru',
    '@veggie_vibes',
    '@baker_jane',
];

const forumPosts = [
    { question: 'What’s the best way to cook pasta al dente?', username: '@pasta_enthusiast' },
    { question: 'Any tips for making crispy pizza crust?', username: '@crusty_chef' },
    { question: 'How to balance spices in a curry?', username: '@spice_master' },
];

const CommunityPage = () => {
    const [activeLink, setActiveLink] = useState('community');

    const handleNavClick = (link) => {
        setActiveLink(link);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        alert("Error fetching recipes.");
    };

    return (
        <div className="community-page">
            {/* Navbar */}
            <Navbar expand="lg" style={{ backgroundColor: '#F0EFEA' }} fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#" style={{ color: '#A10115' }}>
                        <img src={logo} alt="Recipe Finder Logo" style={{ height: '60px', marginRight: '10px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
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
                            <Button type="submit" variant="outline-danger">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <br /><br /><br /><br />

            {/* Page Title */}
            <div style={{ textAlign: 'center', margin: '40px 0', color: '#A10115' }}>
                <h2>Welcome to the Food Lovers' Hub!</h2>
                <p style={{ color: '#6D6E71' }}>Explore, share, and connect with other food lovers!</p>
            </div>

            <section className="community-content">
                {/* Recipe Feed */}
                <div className="recipe-feed">
                    <h2>Community Recipes</h2>
                    <div className="recipes">
                        {recipeFeedImages.map((imageUrl, index) => (
                            <div className="recipe-card" key={index}>
                                <img src={imageUrl} alt={recipeTitles[index]} />
                                <div className="recipe-info">
                                    <h3>{recipeTitles[index]}</h3>
                                    <p>by {usernames[index]}</p>
                                    <button>View Recipe</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Discussion Forum */}
                <div className="discussion-forum">
                    <h2>Discussion Forum</h2>
                    <div className="forum-posts">
                        {forumPosts.map((post, index) => (
                            <div className="forum-post" key={index}>
                                <h3>{post.question}</h3>
                                <p>by {post.username}</p>
                                <button>Join Discussion</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CommunityPage;
