import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const timeId = setTimeout( async() => {
            const data = await axios.get('http://localhost:3001/users')
            setUsers(data.data)
            setLoading(false)

            return () => {
                clearTimeout(timeId)
            }
        }, 3000)
    }, [])

    return (
        <div className='wrapper'>
            <h1>Users</h1>
            {loading ? (
                <>
                    <FontAwesomeIcon icon={faSpinner} className='loading'/>
                    <p>Loading...........</p>
                </>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Users