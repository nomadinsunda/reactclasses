import { Link } from 'react-router-dom';

const dummyUsers = [1, 2, 3];

export default function Users() {
  return (
    <div>
      <h2>👥 Users List</h2>
      <ul>
        {dummyUsers.map(id => (
          <li key={id}>
            <Link to={`/user/${id}`}>User {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
