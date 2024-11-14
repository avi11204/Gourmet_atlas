// // // // // // //app.jsx safe
// // // // // import React from 'react';
// // // // //  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//  // Ensure this file exists
// // // // // // import RecipePage from './pages/RecipePage'; // Ensure this file exists
// // // // // // import RecipeList from './pages/RecipeList'; // Ensure this file exists
// // // // // // import IndianRecipePage from './pages/IndianRecipes'; // Use only this import
// // // // // // import R1 from './pages/R1'; // Ensure these files exist
// // // // // // import R2 from './pages/R2'; // Ensure these files exist
// // // // // // import R4 from './pages/R4'; // Ensure these files exist
// // // // // // import R5 from './pages/R5'; // Ensure these files exist
// import Planner from './pages/Planner'; // Import the new Planner component
// import CommunityPage from './pages/Community';
// // // // //  import RecipeListt from './pages/RecipeListt';
// // // // //  import AddRecipe from './pages/AddRecipe';



// // // // //  function App() {
// // // // //      return (
// // // // //          <Router>
// // // // //              <Routes>
// // // // //                {/* <Route path="/" element={<EnterPage />} />*/}
// // // // //                 <Route path="/signup" element={<Signup />} />
// // // // //                  <Route path="/login" element={<Login />} />
// // // // // {/*/ //                 <Route path="/home" element={<Home />} />
// // // // // //                 <Route path="/community" element={<CommunityPage />} />
// // // // // //                 <Route path="/recipes" element={<RecipePage />} /> {/* General recipe page */}
// // // // // {/*//                 <Route path="/recipe-list" element={<RecipeList />} /> {/* Recipe list page */}
// // // // // {/*//                 <Route path="/recipes/indian" element={<IndianRecipePage />} /> {/* Indian recipe page */}
// // // // // {/*//                 <Route path="/recipes/indian/R1" element={<R1 />} />
// // // // // //                 <Route path="/recipes/indian/R2" element={<R2 />} />   
// // // // // //                 <Route path="/recipes/indian/R4" element={<R4 />} />
// // // // // //                 <Route path="/recipes/indian/R5" element={<R5 />} />  */}
// // // // //                  <Route path="/add" element={<AddRecipe />} />
// // // // //                  <Route path="/test" element={<RecipeListt />} />


// // // // // {/*/                 <Route path="/planner" element={<Planner />} /> {/* Nutrition planner page */}
// // // // //              </Routes>
// // // // //          </Router>
// // // // //      );
// // // // //  }

// // // // //  export default App;
// // // // import React from 'react';
// // // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // // import AddRecipe from './pages/AddRecipe';  // Make sure the path is correct
// // // // import RecipeList from './pages/RecipeListt'; // Ensure correct path for other components

// // // // function App() {
// // // //     return (
// // // //         <Router>
// // // //             <Routes>
// // // //                 <Route path="/add" element={<AddRecipe />} />
// // // //                 <Route path="/recipes" element={<RecipeList />} />  {/* Adjust path for RecipeList */}
// // // //             </Routes>
// // // //         </Router>
// // // //     );
// // // // }

// // // // export default App;
// // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // import RecipePage from './pages/RecipePage';
// // // import AddRecipe from './pages/AddRecipe';
// // // import RecipeDetailPage from './pages/RecipeDetailpage';

// // // function App() {
// // //     return (
// // //         <Router>
// // //             <Routes>
// // //             <Route path="/add" element={<AddRecipe />} />
// // //                 <Route path="/recipes" element={<RecipePage />} />
// // //                 <Route path="/recipes/:id" element={<RecipeDetailPage />} />
// // //             </Routes>
// // //         </Router>
// // //     );
// // // }

// // // export default App;
// // // frontend/App.jsx
// // import React from 'react';
// // import { BrowserRouter as Router,  Switch , Route} from 'react-router-dom';
// // import RecipePage from './pages/RecipePage';
// // import RecipeDetailPage from './pages/RecipeDetailpage';

// // const App = () => {
// //   return (
// //     <Router>
// //       <Switch>
// //         <Route path="/recipes" component={RecipePage} />
// //         <Route path="/recipe/:id" component={RecipeDetailPage} />
// //       </Switch>
// //     </Router>
// //   );
// // };

// // export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Homepage'; // Ensure this file exists
// import EnterPage from './pages/Enterpage'; // Ensure this file exists
// import Signup from './pages/Signup'; // Ensure this file exists
// import Login from './pages/Login';
// import Planner from './pages/Planner'; // Import the new Planner component
// import CommunityPage from './pages/Community';
// import RecipePage from './pages/RecipePage';
// import RecipeDetailPage from './pages/RecipeDetailpage';

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<EnterPage />}/>
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/home" element={<Home />}/>
//                  <Route path="/recipes" element={<RecipePage />} />
//                 <Route path="/recipe/:id" element={<RecipeDetailPage />} />
//                 <Route path="/planner" element={<Planner />} />
//                 <Route path="/community" element={<CommunityPage />}

//             </Routes>
//         </Router>
//     );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import EnterPage from './pages/Enterpage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Planner from './pages/Planner';
import CommunityPage from './pages/Community';
import RecipePage from './pages/RecipePage';
import RecipeDetailPage from './pages/RecipeDetailpage';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EnterPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/recipes" element={<RecipePage />} />
                <Route path="/recipe/:id" element={<RecipeDetailPage />} />
                <Route path="/planner" element={<Planner />} />
                <Route path="/community" element={<CommunityPage />} /> {/* Fixed closing tag */}
            </Routes>
        </Router>
    );
};

export default App;
