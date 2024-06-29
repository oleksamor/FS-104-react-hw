import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Message from "./Message/Message";

const App = () => {
  const message = "Helllllooo";
  const isOnline = false;
  const age = 12;
  // const isAdmin = true;
  // const isUser = true;
  const fruits = ["banan", "apple", "lemon", "peach"];

  return (
    <>
      <Header />
      <Message author="Petro" message="Продам холодильник" />
      <Message author="Stepan" message={message} />
      <Message author="Olena" message="Візьму котика в добрі руки роботу!" />
      {isOnline && <h1>Welcome back</h1>}
      {!isOnline && <h1>Please login</h1>}
      {age > 18 ? <h2>Wow, how is old</h2> : <h2>Wow, you need growing</h2>}
      {/* {isAdmin || isUser} */}
      <ul>
        {fruits.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <Footer />
    </>
  );
};

export default App;
