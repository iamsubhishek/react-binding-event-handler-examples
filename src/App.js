import logo from './logo.svg';
import './App.css';
import EventBindingInRender from './components/EventBindingInRender';
import EventBindingInRenderWithArrowFunction from './components/EventBindingInRenderWithArrowFunction';
import EventBindingWithClassConstructors from './components/EventBindingWithClassConstructors';
import EventBindingWithClassProperty from './components/EventBindingWithClassProperty';

function App() {
  return (
    <div className="App">
{/* <EventBindingInRender></EventBindingInRender>      */}
{/* <EventBindingInRenderWithArrowFunction></EventBindingInRenderWithArrowFunction> */}
{/* <EventBindingWithClassConstructors></EventBindingWithClassConstructors> */}
<EventBindingWithClassProperty></EventBindingWithClassProperty>
    </div>
  );
}

export default App;
