function Tabs({label, onSelect, isSelected}) {

  return (
    <li className="me-2">
      <button
      onClick={onSelect}
        className= {isSelected?"bg-purple-900 inline-block px-4 py-3 text-violet-400 hover:bg-purple-900":"inline-block px-4 py-3 text-violet-400 hover:bg-purple-900"}
        aria-current="page"
      >
      {label}
      </button>
    </li>
  );
}

export default Tabs;
