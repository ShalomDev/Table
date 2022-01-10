import React , {useState, useEffect} from "react";
import './App.css';
import data from './mock-data.json';


const App = () => {
const [contacts, setContacts] = useState(data.courses);

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
            />

<input 
           type= "text"
           name= "code"
           required="required"
           placeholder = "Enter the code..."
            />


<input 
           type= "text"
           name= "overview"
           required="required"
           placeholder = "Any Comments..."
            />

 <input 
           type= "text"
           name= "duration"
           required="required"
           placeholder = "Enter a duraction..."
            />

<input 
           type= "text"
           name= "startDate"
           required="required"
           placeholder = "Enter a startDate..."
            />

<input 
           type= "text"
           name= "time"
           required="required"
           placeholder = "Enter time..."
            />


<input 
           type= "text"
           name= "deliveryMode"
           required="required"
           placeholder = "Enter deliveryMode..."
            />

<input 
           type= "text"
           name= "price"
           required="required"
           placeholder = "Enter the price..."
            />


<input 
           type= "text"
           name= "totalSlots"
           required="required"
           placeholder = "Enter totalSlots..."
            />


<input 
           type= "text"
           name= "bookedSlots"
           required="required"
           placeholder = "Enter bookedSlots..."
            />

<input 
           type= "text"
           name= "dateCreated"
           required="required"
           placeholder = "Enter date..."
            />
<br/>
<button type = "submit"> Add </button>
       </form>
    </div>
);    
};


export default App;
