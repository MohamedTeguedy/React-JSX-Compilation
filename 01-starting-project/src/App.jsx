import {CORE_CONCEPTS} from './data.js'
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';
import { useState } from 'react';

function App() {

const [selectedTopic,setSelectedTopic]=useState()

  function HeandelSelect(SelectButton){
    setSelectedTopic(SelectButton)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core concept</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptImte)=>
            (<CoreConcept key={conceptImte.title} {...conceptImte}   />)
         )}
          
        </ul>
        </section>
       <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic==='components'} onSelect={()=> HeandelSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=> HeandelSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic==='props'} onSelect= {()=> HeandelSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic==='state'} onSelect={()=> HeandelSelect('state')}>State</TabButton>


        </menu>
        {!selectedTopic && <p>Please selet topic</p> }
        {selectedTopic && (<div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title} </h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
            {EXAMPLES[selectedTopic].code}
            </code>
          </pre>

        </div>)}
        
       </section>
      </main>
    </div>
  );
}

export default App;
