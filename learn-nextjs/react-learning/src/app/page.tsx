import Image from "next/image";
import { AboutPage } from "@/components/About";
import Profile from "@/components/Profile";
import ConditionalRendering from "@/components/ConditionalRendering";

export default function Home() {

  const user_detail = {
    name: "Muhammad Akbar Ali",
    age: 18,
    gender: "Male"
  }

  function MyButton(){ // Sample Button function
    return (
      <button className="py-3 px-5 bg-green-600">Button</button>
    );
  };

  function MyInput(){
    return(
      <input type="text" placeholder="Enter your Name" className="border-2"/>
    );
  };
  
  return (
    <div className="p-5">
      <p className="font-bold text-lg">React Basics</p>
      <p>
        React apps are made out of components. A component is a piece of the UI
        (user interface) that has its own logic and appearance. A component can
        be as small as a button, or as large as an entire page. React components
        are JavaScript functions that return markup
      </p>
      <div className="m-3">
        <div className="my-2">
          <MyButton />
        </div>
        <div>
          <MyInput />
        </div>
      </div>
      <div className="flex gap-3 flex-col">
        <p className="font-bold">User Detail</p>
        <p>{user_detail.name}</p>
        <p>{user_detail.age}</p>
        <p>{user_detail.gender}</p>
      </div>
      <div className="my-4">
        <AboutPage />
      </div>
      <div>
        <Profile />
      </div>
      <div>
        <ConditionalRendering />
      </div>

    </div>
  );
};
