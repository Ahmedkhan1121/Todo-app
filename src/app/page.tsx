import Todo from "@/components/Todo/Todo";
import Image from "next/image";

export default function Home() {
  return (
   <main>
   <h1 className="text-center font-mono text-3xl py-10">TODO LIST</h1>
   {/* CRUD Operation (Create,Read,Update,Delete) */}
   <Todo/>
   </main>
  );
}
