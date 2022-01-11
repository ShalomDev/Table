import React , {useState} from "react";
import './App.css';
import data from './mock-data.json';


const App = () => {
const [contacts, setContacts] = useState(data.courses);
const [addFormData, setAddformData] = useState({
  name:'',
  code:'',
  overview:'',
  duration:'',
  startDate:'',
  time:'',
  deliveryMode:'',
  price:'',
  totalSlot:'',
  bookedSlots:'',
  dateCreated:''

})

const handleAddFormChange = (event) => {
  event.preventDefault(); 
  
  const fieldName = event.target.getAttribute('name'); /* Gets name of the input the user has changed. Whicch then asiigns it to the fieldName variable*/
  const fieldValue = event.target.value; /* gets value the user has entered into the input*/

  const newFormData = { ...addFormData }; /* Make a copy of the existing form data so that we can make changes to it by mutating the state */
  newFormData[fieldName] = fieldValue;

  setAddformData(newFormData);

}
  return ( <div className= "app-container">
  <table>
    
    <thead>
      <tr>
<th>name</th>
<th>code</th>
<th>overview</th>
<th>duration</th>
<th>startDate</th>
<th>time</th>
<th>deliveryMode</th>
<th>price</th>
<th>totalSlots</th>   
<th>bookedSlots</th>
<th>dateCreated</th>
      </tr>
</thead>
 <tbody>
  {contacts.map( (contact) => (
<tr>
<td>{contact.name}</td>
<td>{contact.code}</td>
<td>{contact.overview}</td>
<td>{contact.duration}</td>
<td>{contact.startDate}</td>
<td>{contact.time}</td>
<td>{contact.deliveryMode}</td>
<td>{contact.price}</td>
<td>{contact.totalSlots}</td>
<td>{contact.bookedSlots}</td>
<td>{contact.dateCreated}</td>
</tr>
))}
    </tbody> 
  
  </table>
  <h2> Form to add a contact </h2>
       <form>
<input 
           type= "text"
           name= "name"
           required="required"
           placeholder = "Enter a name..."
           onChange={handleAddFormChange}
            />

<input 
           type= "text"
           name= "code"
           required="required"
           placeholder = "Enter the code..."
           onChange={handleAddFormChange}
           />


<input 
           type= "text"
           name= "overview"
           required="required"
           placeholder = "Any Comments..."
           onChange={handleAddFormChange}
            />

 <input 
           type= "text"
           name= "duration"
           required="required"
           placeholder = "Enter a duraction..."
           onChange={handleAddFormChange}
            />

<input 
           type= "text"
           name= "startDate"
           required="required"
           placeholder = "Enter a startDate..."
           onChange={handleAddFormChange}
            />

<input 
           type= "text"
           name= "time"
           required="required"
           placeholder = "Enter time..."
           onChange={handleAddFormChange}
            />


<input 
           type= "text"
           name= "deliveryMode"
           required="required"
           placeholder = "Enter deliveryMode..."
           onChange={handleAddFormChange}
            />

<input 
           type= "text"
           name= "price"
           required="required"
           placeholder = "Enter the price..."
           onChange={handleAddFormChange}
            />


<input 
           type= "text"
           name= "totalSlots"
           required="required"
           placeholder = "Enter totalSlots..."
           onChange={handleAddFormChange}
            />


<input 
           type= "text"
           name= "bookedSlots"
           required="required"
           placeholder = "Enter bookedSlots..."
           onChange={handleAddFormChange}
            />

<input 
           type= "text"
           name= "dateCreated"
           required="required"
           placeholder = "Enter date..."
           onChange={handleAddFormChange}
            />

<button type = "submit"> Add </button>
       </form>       
    </div>
);    
};


export default App;
