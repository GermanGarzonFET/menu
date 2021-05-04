import SideBar from './menu'

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <h1>Cool Restaurant 🍔🍕</h1>
        <h2>Check out our offerings in the sidebar!</h2>
      </div>
    </div>
  );
}

export default App;
