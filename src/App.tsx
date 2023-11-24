import Hero from "./sections/Hero";
import Collab from "./sections/Collab";
import Collabmore from "./sections/Collabmore"
import StreamlinedExperience from "./sections/StreamlinedExperience"
import Collabfeatures from "./sections/Collabfeatures";
import Collabmorefeatures from "./sections/Collabmorefeatures";
import Collablokin from "./sections/Collablokin";
import Collabbutton from "./sections/Collabbutton";
import CollabPin from "./sections/CollabPin";







function App() {
  return (
    <div className="bg-black">
      <Hero />
      <div className="relative z-10 w-full overflow-x-clip">
      <Collab/>
      <Collabmore/>
      <StreamlinedExperience/>
      <Collabfeatures/>
      <Collabmorefeatures/>
      <Collablokin/>
      </div>

      <div className="bg-[ #242424]">
      <Collabbutton/>
      </div>

      <div className="bg-gray-500">
        <CollabPin/>
      </div>
   
    </div>
  );
}

export default App;
