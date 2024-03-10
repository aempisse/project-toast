import React from "react";

import ToastProvider from "../ToastProvider";
import ToastShelf from "../ToastShelf";
import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";

function App() {
  return (
    <ToastProvider>
      <ToastShelf />
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}

export default App;
