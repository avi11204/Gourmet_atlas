

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';  // Import the useParams hook
import './RecipePage.css'; // Custom styling for the recipe page

const RecipeDetailPage = () => {
    const { id } = useParams();  // Use the useParams hook to get the `id` from the URL
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        // Fetch recipe details from the backend based on the recipe ID
        axios
            .get(`http://localhost:5000/api/recipes/${id}`)
            .then((response) => {
                setRecipe(response.data);
            })
            .catch((error) => {
                console.error('Error fetching recipe details:', error);
            });
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <Container style={{ marginTop: '50px' }}>
            <Row>
                <Col md={6}>
                    <h1 style={{ color: '#A10115' }}>{recipe.title}</h1>
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        style={{ width: '100%', borderRadius: '15px' }}
                    />
                </Col>
                <Col md={6}>
                    <h3 style={{ color: '#A10115' }}>Ingredients:</h3>
                    <ul style={{ listStyleType: 'circle' }}>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>

                    <h3 style={{ color: '#A10115' }}>Instructions:</h3>
                    <ol style={{ lineHeight: '1.8' }}>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                    {/* <Button variant="primary" style={{ backgroundColor: '#A10115', borderColor: '#A10115' }}>
                        Try this recipe
                    </Button> */}
                    <Button
    variant="primary"
    style={{ backgroundColor: '#A10115', borderColor: '#A10115' }}
    onClick={() => window.open('https://youtu.be/W-x4ut1HJsg?si=xWFS-afeCa74Z3Xz', '_blank')}
>
    click here for video
</Button>

                </Col>
            </Row>
        </Container>
    );
};

export default RecipeDetailPage;
