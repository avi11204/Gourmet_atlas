

import React, { useState } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Carousel, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ExampleCarouselImage from '../ExampleCarouselImage';
import logo from '../logo_ga.jpg';

function Homepage() {
    const [activeLink, setActiveLink] = useState('');

    const handleNavClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <div>
            {/* Navbar */}
            <Navbar expand="lg" style={{ backgroundColor: '#F0EFEA' }} fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#" style={{ color: '#A10115' }}>
                        <img src={logo} alt="Recipe Finder Logo" style={{ height: '60px', marginRight: '10px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#home" style={{ color: activeLink === 'home' ? '#4d4f56' : '#A10115' }} onClick={() => handleNavClick('home')}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/recipes" style={{ color: activeLink === 'recipes' ? '#A10115' : '#4d4f56' }} onClick={() => handleNavClick('recipes')}>
                                Recipes
                            </Nav.Link>

                            <Nav.Link href="#about" style={{ color: activeLink === 'about' ? '#A10115' : '#4d4f56' }} onClick={() => handleNavClick('about')}>
                                Planner
                            </Nav.Link>
                            <Nav.Link href="#about" style={{ color: activeLink === 'about' ? '#A10115' : '#4d4f56' }} onClick={() => handleNavClick('about')}>
                                Community
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex me-2">
                            <Form.Control type="search" placeholder="Search for recipes" className="me-2" aria-label="Search" />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
               <br></br> <br></br> <br></br> <br></br> <br></br>
            {/* Carousel */}
            <Carousel
                style={{ marginTop: '100px', margin: '0 10%', maxWidth: '80%', borderRadius: '15px', overflow: 'hidden' }}
                interval={3000}
                controls={true}
                indicators={true}
            >
                <Carousel.Item>
                    <ExampleCarouselImage
                        imageUrl="https://static01.nyt.com/images/2023/04/23/multimedia/23WELL-HEALTHY-BREAKFAST9-lgwc/23WELL-HEALTHY-BREAKFAST9-lgwc-videoSixteenByNineJumbo1600.jpg"
                        altText="Healthy Breakfast"
                    />
                    <Carousel.Caption
                        style={{
                            backgroundColor: 'rgba(240, 239, 234, 0.8)',
                            width: '60%',
                            left: '20%',
                            borderRadius: '15px',
                            padding: '10px'
                        }}
                    >
                        <h3 style={{ color: '#A10115' }}>Healthy Breakfast</h3>
                        <p style={{ color: '#A10115' }}>Kickstart your day with nutritious breakfast recipes to fuel your morning.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <ExampleCarouselImage

                        imageUrl="https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=2048x2048&w=is&k=20&c=0UD2e_KMbkkMcx4j9ZaxGf-z1nMHxch9hi3_0BQmuAo="
                        altText="Savory Lunch"
                    />
                    <Carousel.Caption
                        style={{
                            backgroundColor: 'rgba(240, 239, 234, 0.8)', // 20% opacity for the background color
                            width: '60%', // Adjust width as needed
                            left: '20%', // Centering the caption
                            borderRadius: '15px', // Rounded edges
                            padding: '10px' // Add padding for spacing
                        }}
                    >
                        <h3 style={{ color: '#A10115' }}>Savory Lunch Ideas</h3>
                        <p style={{ color: '#A10115' }}>Discover delicious and easy-to-make lunch recipes for every taste.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <ExampleCarouselImage
                        imageUrl="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg"
                        altText="Delicious Dinner"
                    />
                    <Carousel.Caption
                        style={{
                            backgroundColor: 'rgba(240, 239, 234, 0.8)', // 20% opacity for the background color
                            width: '60%', // Adjust width as needed
                            left: '20%', // Centering the caption
                            borderRadius: '15px', // Rounded edges
                            padding: '10px' // Add padding for spacing
                        }}
                    >
                        <h3 style={{ color: '#A10115' }}>Delicious Dinner Recipes</h3>
                        <p style={{ color: '#A10115' }}>End your day with mouthwatering dinner recipes that everyone will love.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage
                        imageUrl="https://png.pngtree.com/background/20230613/original/pngtree-various-snack-food-and-snack-foods-picture-image_3379345.jpg"
                        altText="Tasty Snacks"
                    />
                    <Carousel.Caption
                        style={{
                            backgroundColor: 'rgba(240, 239, 234, 0.8)', // 20% opacity for the background color
                            width: '60%', // Adjust width as needed
                            left: '20%', // Centering the caption
                            borderRadius: '15px', // Rounded edges
                            padding: '10px' // Add padding for spacing
                        }}
                    >
                        <h3 style={{ color: '#A10115' }}>Tasty Snacks</h3>
                        <p style={{ color: '#A10115' }}>Perfect snacks to enjoy anytime, whether you’re at home or on the go.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <ExampleCarouselImage
                        imageUrl="https://images5.alphacoders.com/390/thumb-1920-390370.jpg"
                        altText="Scrumptious Desserts"
                    />
                    <Carousel.Caption
                        style={{
                            backgroundColor: 'rgba(240, 239, 234, 0.8)', // 20% opacity for the background color
                            width: '60%', // Adjust width as needed
                            left: '20%', // Centering the caption
                            borderRadius: '15px', // Rounded edges
                            padding: '10px' // Add padding for spacing
                        }}
                    >
                        <h3 style={{ color: '#A10115' }}>Scrumptious Desserts</h3>
                        <p style={{ color: '#A10115' }}>Delight in a variety of desserts that are perfect for any celebration.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            {/* Explore Cuisines Card */}
            <div style={{ textAlign: 'center', margin: '40px 0', color: '#A10115' }}>
                <h2>Explore Cuisines from Around the World</h2>
                <p style={{ color: '#COB2B5' }}>Embark on a culinary journey and discover a variety of recipes from different cultures and traditions.</p>
            </div>

            <Card style={{ width: '80%', maxWidth: '1000px', backgroundColor: '#F0EFEA', border: '1px solid #A10115', borderRadius: '15px', margin: '0 auto', overflow: 'hidden' }}>
                <Row noGutters>
                    {/* Text Section (Left) */}
                    <Col md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px' }}>
                        <Card.Body>
                            <Card.Title style={{ color: '#A10115', paddingTop: '30px', fontSize: '2.5rem' }}>Worldly Flavors Await</Card.Title>
                            <Card.Text style={{ color: '#4d4f56' }}>
                                Whether you're craving Italian pasta, spicy Mexican dishes, or a comforting bowl of Japanese ramen, we've got it all! Our app lets you explore a wide range of cuisines from every corner of the globe. Discover new flavors, try something new, and get inspired by recipes from around the world.
                            </Card.Text>
                        </Card.Body>
                    </Col>

                    {/* Image Section (Right) */}
                    <Col md={6}>
                        <Card.Img variant="top" src="https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=2048x2048&w=is&k=20&c=0UD2e_KMbkkMcx4j9ZaxGf-z1nMHxch9hi3_0BQmuAo=" style={{ height: '350px', objectFit: 'cover' }} />
                    </Col>
                </Row>
            </Card>

            {/* About Gourmet Atlas Card */}
            <div style={{ textAlign: 'center', margin: '40px 0', color: '#A10115' }}>
                <h2>About Gourmet Atlas</h2>
                <p style={{ color: '#COB2B5' }}>Discover the world of recipes, culinary traditions, and the stories behind them with Gourmet Atlas.</p>
            </div>

            <Card style={{ width: '80%', maxWidth: '1000px', backgroundColor: '#F0EFEA', border: '1px solid #A10115', borderRadius: '15px', margin: '0 auto', overflow: 'hidden' }}>
                <Row noGutters>
                    {/* Image Section (Left) */}
                    <Col md={6}>
                        <Card.Img variant="top" src="https://img.freepik.com/premium-photo/assorted-bowls-food-ingredients-arranged-kitchen-countertop-concept-food-photography-culinary-art-kitchen-setup-ingredient-display-recipe-preparation_864588-55953.jpg" style={{ height: '350px', objectFit: 'cover' }} />
                    </Col>

                    {/* Text Section (Right) */}
                    <Col md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px' }}>
                        <Card.Body>
                            <Card.Title style={{ color: '#A10115', paddingTop: '30px', fontSize: '2.5rem' }}>The Journey of Flavors</Card.Title>
                            <Card.Text style={{ color: '#4d4f56' }}>
                                Gourmet Atlas is your ultimate guide to discovering recipes from around the world. Our mission is to bring together a variety of culinary traditions, providing easy-to-follow recipes for everyone. From novice cooks to seasoned chefs, our platform allows you to explore, create, and enjoy new dishes that reflect the beauty of global cuisine.
                            </Card.Text>
                           
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

            {/* New Feature: Recipe Planner Card */}
            <div style={{ textAlign: 'center', margin: '40px 0', color: '#A10115' }}>
                <h2>Recipe Planner</h2>
                <p style={{ color: '#COB2B5' }}>Plan your meals with ease and keep track of your favorite recipes.</p>
            </div>


            <Card style={{ width: '80%', maxWidth: '1000px', backgroundColor: '#F0EFEA', border: '1px solid #A10115', borderRadius: '15px', margin: '0 auto', overflow: 'hidden' }}>
                <Row noGutters>
                    {/* Text Section (Left) */}
                    <Col md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px' }}>
                        <Card.Body>
                            <Card.Title style={{ color: '#A10115', paddingTop: '30px', fontSize: '2.5rem' }}>Plan Your Meals</Card.Title>
                            <Card.Text style={{ color: '#4d4f56' }}>
                                Our Recipe Planner allows you to organize and plan meals ahead of time. With a personal recipe collection, you can track ingredients, save recipes for later, and create the perfect meal plan tailored to your needs. Never run out of ideas for dinner again!
                            </Card.Text>
                        </Card.Body>
                    </Col>

                    {/* Image Section (Right) */}
                    <Col md={6}>
                        <Card.Img variant="top" src="https://type7.in/cdn/shop/files/IMG_9785.jpg?v=1697547164&width=2656" style={{ height: '350px', objectFit: 'cover' }} />
                    </Col>
                </Row>
            </Card>




            {/* New Feature: Community Connection Card */}
            <div style={{ textAlign: 'center', margin: '40px 0', color: '#A10115' }}>
                <h2>Join the Community</h2>
                <p style={{ color: '#COB2B5' }}>Share your recipes, get feedback, and connect with other food lovers.</p>
            </div>

            <Card style={{ width: '80%', maxWidth: '1000px', backgroundColor: '#F0EFEA', border: '1px solid #A10115', borderRadius: '15px', margin: '0 auto', overflow: 'hidden' }}>
                <Row noGutters>
                    {/* Image Section (Left) */}
                    <Col md={6}>
                        <Card.Img variant="top" src="https://static.wixstatic.com/media/402913_48a67215742f44179ca2f87adf37a116~mv2.jpg/v1/fill/w_1000,h_800,al_c,q_85,usm_0.66_1.00_0.01/402913_48a67215742f44179ca2f87adf37a116~mv2.jpg" style={{ height: '350px', objectFit: 'cover' }} />
                    </Col>

                    {/* Text Section (Right) */}
                    <Col md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px' }}>
                        <Card.Body>
                            <Card.Title style={{ color: '#A10115', paddingTop: '30px', fontSize: '2.5rem' }}>Foodie Community</Card.Title>
                            <Card.Text style={{ color: '#4d4f56' }}>
                                Join our growing foodie community where you can share recipes, get advice, and meet like-minded individuals who love cooking as much as you do. Discover new ideas, exchange cooking tips, and participate in fun challenges. Your culinary journey is even better when you share it with others.
                            </Card.Text>
                            <div style={{ textAlign: 'center' }}>
                                <Link to="/community" className="btn btn-primary" style={{ backgroundColor: '#A10115' }}>Join Now</Link>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>


            {/* Footer */}
            <footer style={{ backgroundColor: '#F0EFEA', color: '#A10115', padding: '20px', textAlign: 'center', marginTop: '40px' }}>
                <p>&copy; 2024 Gourmmet Atlas. All rights reserved.</p>
                <p>
                    <Link to="/privacy" style={{ color: '#A10115' }}>Privacy Policy</Link> |{' '}
                    <Link to="/terms" style={{ color: '#A10115' }}>Terms of Service</Link>
                </p>
            </footer>
        </div>
    );
}

export default Homepage;

