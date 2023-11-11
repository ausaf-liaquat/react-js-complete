function Tabs({label, onSelect}) {

  return (
    <li className="me-2">
      <button
      onClick={onSelect}
        className="inline-block px-4 py-3 text-violet-400 hover:bg-purple-900 rounded-lg"
        aria-current="page"

      >
  
     {label}
      </button>
    </li>
  );
}

export default Tabs;
