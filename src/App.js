import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomepageComponent from './components/HomepageComponent';
import PageOneComponent from './components/PageOneComponent';
import PageTwoComponent from './components/PageTwoComponent';
import PageThreeComponent from './components/PageThreeComponent';
import PageFourComponent from './components/PageFourComponent';
import PageFiveComponent from './components/PageFiveComponent';
import PageSixComponent from './components/PageSixComponent';
import PageSevenComponent from './components/PageSevenComponent';
import PageEightComponent from './components/PageEightComponent';
import PageNineComponent from './components/PageNineComponent';
import PageTenComponent from './components/PageTenComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomepageComponent />} />
        <Route path='pageOne' element={<PageOneComponent />}/>
        <Route path='pageTwo' element={<PageTwoComponent />}/>
        <Route path='pageThree' element={<PageThreeComponent />}/>
        <Route path='pageFour' element={<PageFourComponent />}/>
        <Route path='pageFive' element={<PageFiveComponent />}/>
        <Route path='pageSix' element={<PageSixComponent />}/>
        <Route path='pageSeven' element={<PageSevenComponent />}/>
        <Route path='pageEight' element={<PageEightComponent />}/>
        <Route path='pageNine' element={<PageNineComponent />}/>
        <Route path='pageTen' element={<PageTenComponent />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
