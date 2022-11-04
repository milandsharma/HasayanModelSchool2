import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from "./component/Nav";
import Slider from "./component/slider";
import Events from "./component/EventContanor";
import Administration from "./component/Administration";
import Addmission from "./component/Addmission";
import Event from "./component/event"
import Footer from "./component/Footer";
import {BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom"
import {GyanUtsav,sports,Award,Librarye,Ptm,harGharTrianga,identiyCardDistribution,TeacherDay,TrafficRules,UniformDistribution,YogDiwas,GandhiJyanti,Drawing} from "./component/Arrays"
import Back from './component/back';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
  <Switch>
    <Route exact path="/" element={<div><Nav/><Slider/><Events/><Administration/><Addmission/><Footer/></div>} />
    <Route exact path="/events" element={<div className="EventMainContainor">
    <Back/>
      <Event array={GyanUtsav} heading="Gyant Utsav" />
      <Event array={sports} heading="Sports"/>
      <Event array={Award} heading="Award"/>
      <Event array={Librarye} heading="Library"/>
      <Event array={Ptm} heading="Ptm"/>
      <Event array={harGharTrianga} heading="Har Ghar Trianga"/>
      <Event array={identiyCardDistribution} heading="Identiy Card Distribution"/>
      <Event array={TeacherDay} heading="Teacher Day"/>
      <Event array={TrafficRules} heading="Traffic Rules"/>
      <Event array={UniformDistribution} heading="Uniform Distribution"/>
      <Event array={YogDiwas} heading="Yog Diwas"/>
      <Event array={GandhiJyanti} heading="Gandhi Jyanti"/>
      <Event array={Drawing} heading="Drawing"/>


    </div>}/>
  </Switch>
</Router>
);


