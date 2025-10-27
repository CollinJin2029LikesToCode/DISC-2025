import React, { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://disc-assignment-5-users-api-iyct.onrender.com/api/users')
      .then(res => res.json()) // I think I could also use asynch and await 
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError('so sorry but I cannot fetch the data lol');
        setLoading(false);
      });
  }, []); //because I only want to run and fetch once when the component mounts, the depedency arrray should be empty

  if (loading) return <p>Loading users... please be patient</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="content">
      <h1>All Users That Are in the DATABASE</h1>
      <div className="products">
        {users.map(user => (
          <div className="product-card" key={user.id}>
            <img src={user.profilePicture} alt={user.firstName} className="product-img" />
            <h2>{user.firstName} {user.lastName}</h2>
            <p>{user.email}</p>
            <p>{user.major} ({user.graduationYear})</p>
            <p>{user.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
