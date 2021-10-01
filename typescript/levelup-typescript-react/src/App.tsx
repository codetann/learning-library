import Head from "./components/Head";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Head title={"Hello"} info={{ name: "tanner", age: 25 }} />
      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        Hello world
      </Button>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
