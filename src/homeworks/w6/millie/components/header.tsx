function Header() {
  return (
    <header className="flex justify-between">
      <img
        src="./millie-logo.png"
        alt="밀리의 서재 로고"
        className="w-15 h-auto"
      />
      <button type="button" className="font-semibold">
        로그아웃
      </button>
    </header>
  );
}

export default Header;
