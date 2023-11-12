function Header() {

  let things = ["Components", "JSX", "Props"];

  let thing = things[Math.floor(Math.random() * things.length)];


  return (
    <div>
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="font-extrabold text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r mb-3 pb-3 from-purple-400 to-pink-600">
          REACT FIRST PROJECT
        </h2>
        <p className="mt-2 text-lg leading-8 text-purple-400 text-center">
          Learn how to grow your business with our expert advice and {thing}.
        </p>
      </div>
    </div>
  );
}

export default Header;
