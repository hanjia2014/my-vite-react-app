import "./App.css";
import { Layout } from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "./components/layout/Loader";
import { Home } from "./components/layout";
import SignalTodoListComponent from "./components/todo/todoSignal/todoSignal";
import StateTodoListComponent from "./components/todo/todoState/todoState";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        >
        </Route>
        <Route
          path="/State-Todo-Example"
          element={
            <Suspense fallback={<Loader />}>
              <StateTodoListComponent />
            </Suspense>
          }
        >
        </Route>
        <Route
          path="/Signal-Todo-Example"
          element={
            <Suspense fallback={<Loader />}>
              <SignalTodoListComponent />
            </Suspense>
          }
        >
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
