const UserCard = ({ user }) => {
  const countryName = {
    kr: '대한민국',
    us: '미국',
    uk: '영국'
  }[user.country] || '기타';

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h3>{user.name}</h3>
      <p><strong>생년월일:</strong> {user.birth}</p>
      <p><strong>국적:</strong> {countryName}</p>
      <p><strong>자기소개:</strong> {user.bio}</p>
    </div>
  );
};

export default UserCard;