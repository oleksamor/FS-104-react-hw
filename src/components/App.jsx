import { useState, useEffect } from "react";

// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
// import Message from "./Message/Message";
// import "../index.css";

// const App = () => {
//   const message = "Helllllooo";
//   const isOnline = false;
//   const age = 12;
//   // const isAdmin = true;
//   // const isUser = true;
//   const fruits = ["banan", "apple", "lemon", "peach"];

//   return (
//     <>
//       <Header />
//       <h2 className="title">Hello styles</h2>

//       <Message author="Petro" message="Продам холодильник" />
//       <Message author="Stepan" message={message} />
//       <Message author="Olena" message="Візьму котика в добрі руки роботу!" />
//       {isOnline && <h1>Welcome back</h1>}
//       {!isOnline && <h1>Please login</h1>}
//       {age > 18 ? <h2>Wow, how is old</h2> : <h2>Wow, you need growing</h2>}
//       {/* {isAdmin || isUser} */}
//       <ul>
//         {fruits.map((item) => (
//           <li>{item}</li>
//         ))}
//       </ul>

//       <Footer />
//     </>
//   );
// };

// const App = () => {
//   const handleClick = () => {
//     alert("I'm a button!");
//   };

//   return <button onClick={handleClick}>Click me!</button>;
// };

// const App = () => {
//   return <button onClick={() => alert("I'm a button")}>Click</button>;
// };

// const App = () => {
//   const handleClick = (evt) => {
//     console.log(evt);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>First button</button>
//       <button onClick={(evt) => console.log(evt)}>Second button</button>
//     </>
//   );
// };

// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => alert(message)}>{children}</button>;
// };

// const App = () => {
//   let clicks = 0;

//   const handleClick = () => {
//     clicks = clicks + 1;
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

// const ClickCounter = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// const ClickCounter = () => {
//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter />
//       <ClickCounter />
//     </>
//   );
// };

// ClickCounter отримує функцію onUpdate (ім'я пропа),
// яка викликається під час події onClick
// const ClickCounter = ({ value, onUpdate }) => {
//   return <button onClick={onUpdate}>Current: {value}</button>;
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Функція, яку будемо передавати в ClickCounter
//   // для виклику під час кліку
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Оголошуємо ефект
//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Оголошуємо ефект
//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// const App = () => {
//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//   }, []);

//   return <div>App</div>;
// };

export default App;
