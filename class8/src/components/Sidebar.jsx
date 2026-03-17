const Sidebar = ({ users, onAddUser, onSelectUser }) => {
  return (
    <aside style={{ width: '200px', backgroundColor: '#eee', padding: '1rem' }}>
      <h4>사용자 목록</h4>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <button onClick={() => onSelectUser(user.id)}>{user.name}</button>
          </li>
        ))}
      </ul>
      <button onClick={onAddUser}>+ 사용자 추가</button>
    </aside>
  );
};

export default Sidebar;
