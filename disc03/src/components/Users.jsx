import React, { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:3003/users-with-majors');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error('Failed to fetch users', err);
        setError('so sorry but I cannot fetch the data lol');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // run once on mount

  if (loading) return <p>Loading users... please be patient</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="content">
      <h1>All Users That Are in the DATABASE</h1>
      <div className="products">
        {users.map(user => (
          <div className="product-card" key={user.id}>
            <h2>{user.first_name} {user.last_name}</h2>
            <h1>{user.id}</h1>
            <p>{user.email}</p>
            <p>{user.major}</p>
             <p>{user.major_table.school}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
