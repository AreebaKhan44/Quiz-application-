// import{BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
// import React,{Fragment} from 'react';
// import Settings from './pages/Settings';
// import Questions from './pages/Questions';
// import FinalScreen from './pages/FinalScreen';
// import { Container,Typography } from "@mui/material";
// import { Box } from "@mui/system";

// function App(){
//   return(
//     <Router>
//       <Fragment>
//       <Container maxwidth="sm">
//         <Box textAlign="center" mt={5}>

//       <Routes>
//         <Route exact path="/" >element={}
//           <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
//           <Settings />

//           </Route>

//           <Route path="/Questions">element={<Questions />}
//             <Questions />
//             </Route>
//             <Route path="/FinalScreen">element={<FinalScreen />}
//               <FinalScreen />
//             </Route>

//             </Routes>
//             </Box>
//             </Container>
//             </Fragment>
//             </Router>  
//   );
// }
// export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import FinalScreen from './pages/FinalScreen';
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

function App() {
  return (
    <Router>
      <Fragment>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Routes>
              <Route exact path="/">
                <Fragment>
                  <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
                  <Settings />
                </Fragment>
              </Route>
              <Route path="/Questions">
                <Questions />
              </Route>
              <Route path="/FinalScreen">
                <FinalScreen />
              </Route>
            </Routes>
          </Box>
        </Container>
      </Fragment>
    </Router>
  );
}

export default App;