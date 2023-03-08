import LargePersonListItem from "./people/LargePersonListItem";
import SmallPersonListItem from "./people/SmallPersonListItem";
import RegularList from "./Lists/RegularList";
import SplitScreen from "./SplitScreen";
import NumberedList from "./Lists/NumberedList";
import SmallProductListItem from "./products/SmallProductListItem";
import LargeProductListItem from "./products/LargeProductListItem";
import Modal from "./Modal/Modal";

const LeftComponent = ({name}) => {
  return <h1 style={{ backgroundColor: 'blue', color: 'white' }}>Left! {name}</h1>
}

const RightComponent = ({message}) => {
  return <h1 style={{ backgroundColor: 'red', color: 'white' }}>Right! {message}</h1>
}

const people = [{
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'biking', 'video game']
}, {
  name: 'Brenda Smith',
  age: 33,
  hairColor: 'black',
  hobbies: ['golf', 'math']
}, {
  name: 'Jane Garcia',
  age: 27,
  hairColor: 'blonde',
  hobbies: ['biology', 'medicine', 'gymnastics']
}]

const products = [{
  name: 'Flat-Screen TV',
  price: '$300',
  description: 'Huge LCD screen, a great deal',
  rating: 4.5,
}, {
  name: 'Basketball',
  price: '$10',
  description: 'Just like the pros use',
  rating: 3.8,
}, {
  name: 'Running Shoes',
  price: '$120',
  description: 'State-of-the-art technology for optimum running',
  rating: 4.2,
}]

function App() {
    return (
        <div className="App">
            <SplitScreen
                leftWeight={1}
                rightWeight={3}
            >
                <LeftComponent name='Shaun'/>
                <RightComponent message='This is my message'/>
            </SplitScreen>

            <div>
              <RegularList 
                items={people}
                resourceName='person'
                itemComponent={SmallPersonListItem}
              />

              <NumberedList 
                items={people}
                resourceName='person'
                itemComponent={LargePersonListItem}
              />
            </div>
            <div>
              <RegularList 
                items={products}
                resourceName='product'
                itemComponent={SmallProductListItem}
              />

              <NumberedList 
                items={products}
                resourceName='product'
                itemComponent={LargeProductListItem}
              />
            </div>
            
            <Modal>
              <LargePersonListItem person={people[0]}/>
            </Modal>

            <Modal>
              <LargeProductListItem product={products[0]}/>
            </Modal>
        </div>
    );
}

export default App;
