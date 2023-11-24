const ua = navigator.userAgent;

window.bgt?.toast('Hello');

function App() {
  return (
    <>
      <h1>BGT Plugin Template</h1>
      <div>{ua}</div>
    </>
  );
}

export default App;
