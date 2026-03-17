import { useMatch } from 'react-router-dom';

export default function UserProfile() {
  const isProfile = useMatch('/users/profile');

  return (
    <div>
      <h3>👤 User Profile</h3>
      <p>Matched: {isProfile ? 'Yes' : 'No'}</p>
    </div>
  );
}
