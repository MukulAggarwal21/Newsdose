import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SummaryPage from './components/SummaryPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={5} country="in" category="general" />} />
            <Route exact path="/business" element={<News key="businesss" pageSize={5} country="in" category="businesss" />} />7
             <Route exact  path="/entertainment" element={<News  key= "entertainment"  pageSize={5} country="in" category="entertainment"  />}/>
          <Route exact  path="/general" element={<News  key= "general"  pageSize={5} country="in" category="general"  />}/>
          <Route exact  path="/health" element={<News  key= "health"  pageSize={5} country="in" category="health"  />}/>
          <Route exact  path="/science" element={<News  key= "science"  pageSize={5} country="in" category="science"  />}/>
          <Route exact  path="/sports" element={<News  key= "sports"  pageSize={5} country="in" category="sports"  />}/>
          <Route exact  path="/technology" element={<News  key= "technology"  pageSize={5} country="in" category="technology"  />}/>
          <Route exact  path="/students" element={<News  key= "students"  pageSize={5}  category="students"  />}/>
          <Route exact  path="/teachers" element={<News  key= "teachers"  pageSize={5}  category="teachers"  />}/>
          <Route exact  path="/professor" element={<News  key= "professor"  pageSize={5}  category="professor"  />}/>
          <Route exact  path="/UttarPradesh" element={<News  key= "uttarpradesh"  pageSize={5}  category="uttarpradesh"  />}/>
          <Route exact  path="/madhyapradesh" element={<News  key= "madhyapradesh"  pageSize={5}  category="madhyapradesh"  />}/>
          <Route exact  path="/andhrapradesh" element={<News  key= "andhrapradesh"  pageSize={5}  category="andhrapradesh"  />}/>
          <Route exact  path="/arunachalpradesh" element={<News  key= "arunachalpradesh"  pageSize={5}  category="arunachalpradesh"  />}/>
          <Route exact  path="/assam" element={<News  key= "assam"  pageSize={5}  category="assam"  />}/>
          <Route exact  path="/bihar" element={<News  key= "bihar"  pageSize={5}  category="bihar"  />}/>
          <Route exact  path="/chhattisgarh" element={<News  key= "chhattisgarh"  pageSize={5}  category="chhattisgarh"  />}/>
          <Route exact  path="/goa" element={<News  key= "goa"  pageSize={5}  category="goa"  />}/>
          <Route exact  path="/gujarat" element={<News  key= "gujarat"  pageSize={5}  category="gujarat"  />}/>
          <Route exact  path="/haryana" element={<News  key= "haryana"  pageSize={5}  category="haryana"  />}/>
          <Route exact  path="/himachalpradesh" element={<News  key= "himachalpradesh"  pageSize={5}  category="himachalpradesh"  />}/>
          <Route exact  path="/jharkhand" element={<News  key= "jharkhand"  pageSize={5}  category="jharkhand"  />}/>
          <Route exact  path="/karnataka" element={<News  key= "karnataka"  pageSize={5}  category="karnataka"  />}/>
          <Route exact  path="/kerala" element={<News  key= "kerala"  pageSize={5}  category="kerala"  />}/>
          <Route exact  path="/maharashtra" element={<News  key= "maharashtra"  pageSize={5}  category="maharashtra"  />}/>
          <Route exact  path="/manipur" element={<News  key= "manipur"  pageSize={5}  category="manipur"  />}/>
          <Route exact  path="/meghalaya" element={<News  key= "meghalaya"  pageSize={5}  category="meghalaya"  />}/>
          <Route exact  path="/mizoram" element={<News  key= "mizoram"  pageSize={5}  category="mizoram"  />}/>
          <Route exact  path="/nagaland" element={<News  key= "nagaland"  pageSize={5}  category="nagaland"  />}/>
          <Route exact  path="/odisha" element={<News  key= "odisha"  pageSize={5}  category="odisha"  />}/>
          <Route exact  path="/punjab" element={<News  key= "punjab"  pageSize={5}  category="punjab"  />}/>
          <Route exact  path="/rajasthan" element={<News  key= "rajasthan"  pageSize={5}  category="rajasthan"  />}/>
          <Route exact  path="/sikkim" element={<News  key= "sikkim"  pageSize={5}  category="sikkim"  />}/>
          <Route exact  path="/tamilnadu" element={<News  key= "tamilnadu"  pageSize={5}  category="tamilnadu"  />}/>
          <Route exact  path="/telangana" element={<News  key= "telangana"  pageSize={5}  category="telangana"  />}/>
          <Route exact  path="/tripura" element={<News  key= "tripura"  pageSize={5}  category="tripura"  />}/>
          <Route exact  path="/uttrakhand" element={<News  key= "uttrakhand"  pageSize={5}  category="uttrakhand"  />}/>
          <Route exact  path="/bengal" element={<News  key= "bengal"  pageSize={5}  category="bengal"  />}/>
          <Route exact  path="/delhi" element={<News  key= "delhi"  pageSize={5}  category="delhi"  />}/>
          <Route exact  path="/chandigarh" element={<News  key= "chandigarh"  pageSize={5}  category="chandigarh"  />}/>
          <Route exact  path="/exams" element={<News  key= "exams"  pageSize={5}  category="exams"  />}/>
         <Route path="/summary/:url" element={<SummaryPage />} />

           
          </Routes>
        </Router>
      </div>
    );
  }
}
