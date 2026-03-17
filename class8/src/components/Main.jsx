import { useState, useEffect } from 'react';

const Main = ({ user, onUpdateUser, onDeleteUser }) => {
  const [form, setForm] = useState({ id: '', name: '', birth: '', country: '', bio: '' });

  useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(form);
  };

  if (!user) return <main style={{ padding: '1rem' }}>사용자를 선택하세요</main>;

  return (
    <main style={{ padding: '1rem', flex: 1 }}>
      <h2>사용자 수정</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={onChange} placeholder="이름" />
        <input name="birth" value={form.birth} onChange={onChange} type="date" />
        <select name="country" value={form.country} onChange={onChange}>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        <textarea name="bio" value={form.bio} onChange={onChange} />
        <br />
        <button type="submit">수정하기</button>
        <button type="button" onClick={() => onDeleteUser(user.id)} style={{ marginLeft: '1rem' }}>
          삭제하기
        </button>
      </form>
    </main>
  );
};

export default Main;