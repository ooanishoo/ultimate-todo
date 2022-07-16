import React from "react";
import { Content, Sidebar } from "./pages";

export default function App() {
  return (
    <div className="flex flex-row h-screen w-screen text-xs">
      <Sidebar />
      <Content />
    </div>
  );
}
