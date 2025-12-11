import { useEffect, useState } from 'react'
import './App.css'
import api from '../api/api'

function App() {
  const [Slist, setSList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/users')
        setSList(response.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>User List</h1>

      {Slist.map((user, index) => (
        <div className="card" key={index}>
          <h2>{user.Name}</h2>
          <p><strong>Role:</strong> {user.Role}</p>
        </div>
      ))}
    </div>
  )
}

export default App
