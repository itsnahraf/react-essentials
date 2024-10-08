import componentsImg from './assets/components.png/';
import {CORE_CONCEPTS} from './data.js';
// named exports not default exports in js we put {} around the thing we exporting 
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import {EXAMPLES} from './data.js';


function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton){
    // selectedButtons => components, jsx, props, state
    setSelectedTopic(selectedButton);
    console.log("selectedTopic");
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
         <h2>Core Concepts</h2>
         <ul>
         { CORE_CONCEPTS.map((conceptItem) => (
           < CoreConcept key = {conceptItem.title} {...conceptItem} />
          )
          )}
          {/* below code will break if any entry changes. map will not break and will output whatever available.
           Also with map it is less code. */}
           {/* <CoreConcept 
           title = {CORE_CONCEPTS[0].title}
           description = {CORE_CONCEPTS[0].description}
           image = {CORE_CONCEPTS[0].image}
           />
           <CoreConcept {...CORE_CONCEPTS[1]} />
           <CoreConcept {...CORE_CONCEPTS[2]} />
           <CoreConcept {...CORE_CONCEPTS[3]} /> */}
         </ul>
         <h2>Time to get started!</h2>
         </section>
         <section id='examples'>
          <h2>Examples</h2>
          <menu>
           <TabButton isSelected={selectedTopic==='components'} onSelect={() => handleSelect('components')}>Components</TabButton>
           <TabButton isSelected={selectedTopic==='jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
           <TabButton isSelected={selectedTopic==='props'} onSelect={() => handleSelect('props')}>Props</TabButton>
           <TabButton isSelected={selectedTopic==='state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
            </div>

          )}
         </section>
      </main>
    </div>
  );
}

export default App;
