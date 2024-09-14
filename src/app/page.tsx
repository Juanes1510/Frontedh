import Cartas from "./components/card";
import Header from "./components/header";
import "./globals.css";

export default function Home() {
  return (
    <div className="w-full justify-center items-center">
      <Header />
      <Cartas />
    </div>
  )
}