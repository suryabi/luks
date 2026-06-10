import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import OperationsCloud from "@/pages/OperationsCloud";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products/operations-cloud" element={<OperationsCloud />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
