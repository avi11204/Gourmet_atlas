import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const IndianRecipePage = () => {
    const [recipes, setRecipes] = useState([]);

    // Static data for Indian recipes
    const indianRecipesData = [
        {
            title: 'Butter Chicken',
            description: 'A rich and creamy chicken curry from India.',
            image: 'https://example.com/butter-chicken.jpg'
        },
        {
            title: 'Paneer Tikka',
            description: 'A vegetarian Indian appetizer made with marinated paneer.',
            image: 'https://example.com/paneer-tikka.jpg'
        },
        // Add more recipes here
    ];

    useEffect(() => {
        // In a real scenario, you could fetch this data from an API
        setRecipes(indianRecipesData);
    }, []);

    return (
        <Container>
            <h2 className="text-center" style={{ margin: '20px 0', color: '#A10115' }}>
                Indian Recipes
            </h2>
            <Row className="justify-content-center">
                {recipes.map((recipe, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
                        <Card style={{ width: '100%', backgroundColor: '#F0EFEA', borderColor: '#A10115', borderRadius: '15px' }}>
                            <Card.Img
                                variant="top"
                                src={recipe.image}
                                alt={recipe.title}
                                style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                            />
                            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '200px' }}>
                                <div>
                                    <Card.Title>{recipe.title}</Card.Title>
                                    <Card.Text>{recipe.description}</Card.Text>
                                </div>
                                <Button variant="primary" style={{ backgroundColor: '#A10115', borderColor: '#A10115', marginTop: '10px' }}>
                                    Explore Recipe
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default IndianRecipePage;
