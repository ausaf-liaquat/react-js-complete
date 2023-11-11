function Tabs({children}) {
  return (
    <li className="me-2">
      <a
        href=""
        className="inline-block px-4 py-3 text-violet-400 hover:bg-purple-900 rounded-lg"
        aria-current="page"
      >
  
     {children}
      </a>
    </li>
  );
}

export default Tabs;
