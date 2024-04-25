import HomePage from "@/Components/Home";
import { Suspense } from "react";

export default function Home() {
  
  return (
    <>
    <Suspense fallback={null}>    
       <HomePage />
      </Suspense>

    </>
  );
}
