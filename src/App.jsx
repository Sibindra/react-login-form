import LoginContainer from "./components/LoginContainer";

function App() {
  return (
    // boostrap class names
    <div id="hero" className="d-flex align-items-center justify-content-center min-w-100 min-vh-100" style={{border:"1px solid red"}}>
        <LoginContainer/>
    </div>
  );
}

export default App;
