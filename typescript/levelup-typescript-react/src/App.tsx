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
        <h1>hi</h1>
      </Button>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
