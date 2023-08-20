
import './App.css'

function App() {
  const students=[
    {
      "firstname":"divya",
      "lastname":"chowdary",
      "gender":"female"
        
    },
    {
      "firstname":"bharath",
      "lastname":"reddy",
      "gender":"male"
        
    },
    {
      "firstname":"sireesha",
      "lastname":"reddy",
      "gender":"female"
        
    },
    {
      "firstname":"harshit",
      "lastname":"chowdary",
      "gender":"male"
        
    },
  ]
  
  return (
    <>
    <table border={2}>
      <thead>
        <th>Firstname</th>
        <th>lastname</th>
        <th>gender</th>
      </thead>
      <tbody>
        {
          students.map((a)=>{
            return <tr style={(a.gender==="female")?{backgroundColor:"pink"}:{backgroundColor:"lightblue"}}><td>{a.firstname}</td><td>{a.lastname}</td><td>{a.gender}</td></tr>
          })
        }
      </tbody>
    </table>
    </>
  )
}

export default App
