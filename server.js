// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');
// // const authRoutes = require('./routes/auth'); // Signup routes
// // const loginRoutes = require('./routes/loginauth'); // Login routes
// // const Recipe = require('./models/Recipe'); // Import Recipe model

// // const app = express();
// // const PORT = 5000;

// // // Middleware
// // app.use(cors());
// // app.use(bodyParser.json());

// // // Routes
// // app.use('/api/signup', authRoutes); // Signup routes
// // app.use('/api/login', loginRoutes); // Login routes

// // // MongoDB Connection
// // mongoose.connect('mongodb://127.0.0.1:27017/GourmetAtlasDB', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // })
// // .then(() => console.log('Connected to MongoDB'))
// // .catch((error) => console.error('Connection error:', error));

// // // Recipe search route
// // app.get('/api/recipes', async (req, res) => {
// //     try {
// //         const query = req.query.query;

// //         if (!query) {
// //             return res.status(400).json({ message: 'Search query is missing.' });
// //         }

// //         // Perform a case-insensitive search on the 'name' field of recipes
// //         const results = await Recipe.find({ name: { $regex: query, $options: 'i' } });
// //         res.json(results);
// //     } catch (error) {
// //         console.error('Error during search operation:', error);
// //         res.status(500).json({ message: 'Internal server error' });
// //     }
// // });

// // // Start the server
// // app.listen(PORT, () => {
// //     console.log(`Server is running on http://localhost:${PORT}`);
// // });
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const authRoutes = require('./routes/auth');
// const loginRoutes = require('./routes/loginauth');
// const recipeRoutes = require('./routes/reciperoute');  // Import the recipe routes

// const app = express();
// const PORT = 5000;
// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/auth', loginRoutes);
// app.use('/api/recipes', recipeRoutes);  // Mount the recipe routes

// // MongoDB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/GourmetAtlasDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((error) => console.error('Connection error:', error));

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(Server running on port ${PORT});
// });

// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const loginRoutes = require('./routes/loginauth');
const recipeRoutes = require('./routes/reciperoute');  // Import the recipe routes

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/auth', loginRoutes);
app.use('/api/recipes', recipeRoutes);  // Mount the recipe routes

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/GourmetAtlasDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Connection error:', error));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
