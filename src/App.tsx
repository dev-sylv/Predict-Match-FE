import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => {
    toast.error("Couldn't create new user", {
      position: toast.POSITION.TOP_LEFT,
      draggableDirection: "x",
    });
  };

  return (
    <div className="w-full h-screen  flex items-center justify-center">
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}
export default App;
