function Header({ total, done }) {
  return (
    <header>
      <h1>Task Manager</h1>
      <p>{done} of {total} tasks completed</p>
    </header>
  );
}

export default Header;