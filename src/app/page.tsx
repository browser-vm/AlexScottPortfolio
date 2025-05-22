"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { Volume2, VolumeX, Github, ExternalLink, Award, Code, Music, PenTool, BookOpen, Monitor, FileText } from "lucide-react";
export default function HomePage() {
  const [muted, setMuted] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <div className="bg-[#0d1117] min-h-screen text-[#e6edf3] font-mono" data-unique-id="b2bd9196-c8d3-4b13-89d4-087ef173a342" data-file-name="app/page.tsx" data-dynamic-text="true">
      {/* Sound control */}
      <div className="fixed top-5 right-5 z-50" data-unique-id="832ae914-0a45-429f-a0b1-f7678f180671" data-file-name="app/page.tsx">
        <button className="bg-[#21262d] p-2 rounded-full hover:bg-[#30363d] transition" onClick={() => setMuted(!muted)} data-unique-id="bcc4ba5f-5d02-4bef-b8e1-29c4264ba883" data-file-name="app/page.tsx" data-dynamic-text="true">
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="bg-[#161b22] border-b border-[#30363d] p-3 sticky top-0 z-40 backdrop-blur-sm bg-opacity-90" data-unique-id="7d139d3d-a0eb-4dcf-8570-6747bc568487" data-file-name="app/page.tsx">
        <div className="container mx-auto flex justify-between items-center" data-unique-id="8149a8f8-cf39-49e4-a7d5-970516bb84e4" data-file-name="app/page.tsx">
          <div className="text-xl font-bold text-[#58a6ff]" data-unique-id="de36be97-05c1-4b91-b8b0-4bc32b1bb6c3" data-file-name="app/page.tsx">
            <span className="text-[#7ee787]" data-unique-id="dd330103-df47-4866-822d-eaf46c10c30d" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="2de42648-8812-4961-a4f6-830be5500b21" data-file-name="app/page.tsx">alex</span></span><span className="editable-text" data-unique-id="42832400-6337-493b-bd7f-581b20b1fd01" data-file-name="app/page.tsx">@</span><span className="text-[#f97583]" data-unique-id="be605368-d02b-481d-9294-92b07e5076a0" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="fb1d5266-c943-4f0d-a343-005e08760160" data-file-name="app/page.tsx">portfolio</span></span><span className="editable-text" data-unique-id="907c0b45-ba07-44d1-a356-3e3e12885b16" data-file-name="app/page.tsx">:~$
          </span></div>
          <div className="hidden lg:flex space-x-6" data-unique-id="ad3f2b82-2ac0-4610-af09-7e8e70e60657" data-file-name="app/page.tsx" data-dynamic-text="true">
            {['home', 'about', 'skills', 'projects', 'certificates', 'awards', 'contact'].map(item => <button key={item} className={`text-sm uppercase tracking-wider hover:text-[#58a6ff] transition 
                  ${activeSection === item ? 'text-[#58a6ff]' : 'text-[#8b949e]'}`} onClick={() => setActiveSection(item)} data-is-mapped="true" data-unique-id="6fa3b8a4-2aff-438f-9824-12ebde6da82e" data-file-name="app/page.tsx" data-dynamic-text="true">
                {item}
              </button>)}
            <a href="/portfolio" className="text-sm uppercase tracking-wider text-[#7ee787] hover:text-[#58a6ff] transition" data-unique-id="c33a0ec8-5efe-40c4-8e57-93331ff8f560" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="9bcb7081-0ba7-4cdb-9c0e-886b48e4eccb" data-file-name="app/page.tsx">
              portfolio
            </span></a>
            <a href="https://drive.google.com/file/d/1agH_p2ltRqakMZmY7LRfSeGGl-BAIPMB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-wider text-[#d2a8ff] hover:text-[#58a6ff] transition" data-unique-id="41ddfd9b-bb38-4aef-8108-a674c96e99ad" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="361b4efa-639b-42c0-b534-d20cdb87eaa4" data-file-name="app/page.tsx">
              resume
            </span></a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4" data-unique-id="fe92e2d6-9c3c-4f78-8296-72836559d4b5" data-file-name="app/page.tsx">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{
        duration: 0.6
      }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-unique-id="2d7463c9-57a1-4805-8e4c-f88b98fd2492" data-file-name="app/page.tsx">
          <div data-unique-id="0b8e7f4d-ebe2-4301-b5b5-a7dc947e0454" data-file-name="app/page.tsx">
            <h1 className="text-5xl font-bold mb-4 text-[#f0f6fc]" data-unique-id="31c70fed-c65e-41d8-b214-db57b6652485" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="86845ccf-fc6c-4184-a7ae-0779b79dee39" data-file-name="app/page.tsx">Alex Scott</span></h1>
            <div className="h-12 mb-4" data-unique-id="780dab0f-600c-465e-a8d9-914f2407d897" data-file-name="app/page.tsx">
              <TypeAnimation sequence={['Software Developer', 2000, 'Graphic Designer', 2000, 'Music Producer', 2000]} wrapper="div" cursor={true} repeat={Infinity} className="text-2xl text-[#7ee787]" />
            </div>
            <p className="text-[#8b949e] mb-8" data-unique-id="55ff6fa0-d53d-48ab-858c-037a87546964" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="ea289ab3-ae92-4dad-965e-1bf8fb27a63f" data-file-name="app/page.tsx">
              High school student passionate about the intersection of technology and arts.
            </span></p>
            <div className="flex space-x-4" data-unique-id="408daeff-b800-45df-bbf2-bec4af3dd0f7" data-file-name="app/page.tsx">
              <a href="https://github.com/browser-vm" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-[#238636] hover:bg-[#2ea043] text-white py-2 px-4 rounded-md transition" data-unique-id="0a9a00eb-8302-49dd-8594-9a10c9a36d64" data-file-name="app/page.tsx">
                <Github size={16} />
                <span data-unique-id="f1fa65c5-2de3-4895-a58c-1b9b2f51eb84" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="82dc198d-9d61-48b9-bd1e-350623fb1c23" data-file-name="app/page.tsx">GitHub</span></span>
              </a>
              <a href="https://huggingface.co/namelessai" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-[#30363d] hover:bg-[#3c444e] text-white py-2 px-4 rounded-md transition" data-unique-id="9ddf0fca-a27a-40aa-9f35-fc86f7784db3" data-file-name="app/page.tsx">
                <ExternalLink size={16} />
                <span data-unique-id="fe8a3df8-3a17-469d-affc-b12e66d0ac93" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="ad02b97e-5418-46aa-ad64-4e34468d5f6c" data-file-name="app/page.tsx">HuggingFace</span></span>
              </a>
              <a href="/portfolio" className="flex items-center space-x-2 bg-[#7ee787] hover:bg-opacity-90 text-[#0d1117] py-2 px-4 rounded-md transition" data-unique-id="060fff96-174c-4c00-a722-9d7c383bb918" data-file-name="app/page.tsx">
                <PenTool size={16} />
                <span data-unique-id="a4404ceb-e5c5-4e19-a7ac-29118ce3a9e7" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="cec5c58a-2e89-47c9-8c0e-9a2346e7a675" data-file-name="app/page.tsx">Portfolio</span></span>
              </a>
              <a href="https://drive.google.com/file/d/1agH_p2ltRqakMZmY7LRfSeGGl-BAIPMB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-[#d2a8ff] hover:bg-opacity-90 text-[#0d1117] py-2 px-4 rounded-md transition" data-unique-id="532e1481-625c-4014-bd9f-e6e769b5af94" data-file-name="app/page.tsx">
                <FileText size={16} />
                <span data-unique-id="39a07e39-466e-43d3-91c1-90ad30980657" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="cb92a69e-7020-4c9a-b5b3-192c41477e8a" data-file-name="app/page.tsx">Resume</span></span>
              </a>
            </div>
          </div>
          <div className="relative" data-unique-id="4850264b-7ef6-474a-9364-cd89f17d2e29" data-file-name="app/page.tsx">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 shadow-lg" data-unique-id="3856f657-7062-4da6-a8af-10443bcd2ae0" data-file-name="app/page.tsx">
              <div className="flex items-center mb-4 bg-[#161b22] rounded-md px-3 py-2" data-unique-id="866db7bf-ddf6-47b5-a680-91fb3d3cf926" data-file-name="app/page.tsx">
                <div className="flex space-x-2" data-unique-id="813dd6da-e38a-461a-b966-7c2085e005b3" data-file-name="app/page.tsx">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" data-unique-id="5cced705-af68-4555-8687-919416f7a1cd" data-file-name="app/page.tsx"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" data-unique-id="8cff18b5-2888-44cb-82c3-bc762e857844" data-file-name="app/page.tsx"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" data-unique-id="619263d5-54b5-4dfc-bfa0-c926bb205d24" data-file-name="app/page.tsx"></div>
                </div>
                <div className="ml-4 text-xs text-[#8b949e]" data-unique-id="4d12d1ed-9194-45f1-894a-7c1748405fd6" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="111fda77-c93c-426c-85d1-de6b9e4d55f8" data-file-name="app/page.tsx">~/portfolio/alex_scott</span></div>
              </div>
              <div className="terminal-content font-mono text-sm text-[#e6edf3] space-y-2" data-unique-id="8644decc-85ee-4970-9859-eaf1b6a7908b" data-file-name="app/page.tsx">
                <div data-unique-id="9eab6d7c-6aef-4bed-b19e-dca12429f09d" data-file-name="app/page.tsx"><span className="text-[#58a6ff]" data-unique-id="bbf425aa-1690-414b-a8ad-62c184bb4e05" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="62a6be15-2d63-4ae7-b923-03913b854c8c" data-file-name="app/page.tsx">$</span></span><span className="editable-text" data-unique-id="90e1e72a-c606-4981-bb53-5f1092d3a1d8" data-file-name="app/page.tsx"> cat about.txt</span></div>
                <div className="pl-4" data-unique-id="89c9ff9f-2320-4363-8620-e6adcd0d431c" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="e57b26ff-d2d4-445f-a1e9-f6ff819943fc" data-file-name="app/page.tsx">Dedicated high school student pursuing Music Performance and Graphic Design.</span></div>
                <div data-unique-id="3f43692e-4605-4e45-b600-4ae508cee414" data-file-name="app/page.tsx"><span className="text-[#58a6ff]" data-unique-id="8a6bad9e-f2c3-408a-a02b-3b60f6dc0a42" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="30d73f3e-20c3-4b18-9d66-8a37b2bac45e" data-file-name="app/page.tsx">$</span></span><span className="editable-text" data-unique-id="1d058a9e-8a49-4a18-91f1-89012509e127" data-file-name="app/page.tsx"> ls skills/</span></div>
                <div className="pl-4" data-unique-id="ba91922d-a0c5-44e4-bc6c-cc40057f1bb7" data-file-name="app/page.tsx">
                  <span className="text-[#f97583]" data-unique-id="1c02dfdc-03bb-4e10-b6d7-781ed5a4032b" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="3c2c4825-783d-4b5d-a5b9-e840d9220d56" data-file-name="app/page.tsx">graphic-design.md</span></span>{" "}
                  <span className="text-[#f97583]" data-unique-id="d861ba0e-adb8-46de-bbd9-7f1820329c16" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="ed1b9eef-6bf0-4665-b60d-11cf05ceef05" data-file-name="app/page.tsx">software-dev.md</span></span>{" "}
                  <span className="text-[#f97583]" data-unique-id="7aa57ca4-822e-4253-bbed-e8490fc97505" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="c664d30e-b7c5-45da-9f5d-4f9ea3374426" data-file-name="app/page.tsx">music-production.md</span></span>{" "}
                  <span className="text-[#f97583]" data-unique-id="a31dc205-e672-48ea-9c99-ca5b1bf087d4" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="99978984-2427-4fcc-a479-24362cad7dd9" data-file-name="app/page.tsx">math.md</span></span>{" "}
                  <span className="text-[#f97583]" data-unique-id="f1976c63-3c22-47ed-ad29-b52d908ba7f8" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="c3448fa9-0a17-4633-8102-27e5620bda07" data-file-name="app/page.tsx">photography.md</span></span>
                </div>
                <div data-unique-id="4d246678-78fa-4d3e-b6ff-dc1293531719" data-file-name="app/page.tsx"><span className="text-[#58a6ff]" data-unique-id="436ca823-6b1b-42b7-9529-350b78244220" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="80edd3dc-5fad-42d1-8de5-707ad412d5d6" data-file-name="app/page.tsx">$</span></span><span className="editable-text" data-unique-id="441adf99-1708-4413-ad3f-39551501ebc9" data-file-name="app/page.tsx"> echo $EDUCATION</span></div>
                <div className="pl-4" data-unique-id="026e0ea8-55cf-43a2-9ec7-b48f94db3309" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="705b6064-b87b-4a59-a646-7236de347651" data-file-name="app/page.tsx">William G. Enloe GT/IB Magnet Center for the Humanities, Sciences and Arts</span></div>
                <div data-unique-id="6376d5fc-52cb-4767-8e80-ac5c76522e9b" data-file-name="app/page.tsx"><span className="text-[#58a6ff]" data-unique-id="4630d254-ec4e-4163-8502-0abbb2b83ec3" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="06b330c3-2047-4acf-8e07-5492abf3490e" data-file-name="app/page.tsx">$</span></span><span className="editable-text" data-unique-id="3c72d727-bfa4-4bf0-bbcc-a25d3bd6709c" data-file-name="app/page.tsx"> find . -name "*.project" | sort</span></div>
                <div className="pl-4" data-unique-id="5bdcbcb8-0ab3-4b58-9613-e53c7924e5be" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="f56f8a06-0679-43a2-83b8-98620ee3086f" data-file-name="app/page.tsx">./projects/BrowserVM.project</span></div>
                <div data-unique-id="110fd8a0-d86b-49d7-be5a-e2727df99b80" data-file-name="app/page.tsx"><span className="text-[#58a6ff]" data-unique-id="61cb183f-7b0a-4077-a0ba-4d83f517087c" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="b9d14e78-79e8-48a2-a77f-e225a47a5eb7" data-file-name="app/page.tsx">$</span></span><span className="editable-text" data-unique-id="5196c54a-29a6-488a-b258-423c77659edc" data-file-name="app/page.tsx"> ./welcome.sh</span></div>
                <div className="pl-4 text-[#7ee787]" data-unique-id="bbc3ac95-1918-4987-90a5-c84cbe56279f" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="a9209d6a-e0f9-4cdb-ae67-2308b894b48d" data-file-name="app/page.tsx">Welcome! Explore my portfolio to learn more about me.</span></div>
                <div className="animate-pulse" data-unique-id="4a8e8566-185e-4927-b631-d2d4a01be584" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="9123c77b-a6c5-4df3-bfdd-4febdce8cf67" data-file-name="app/page.tsx">█</span></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* About Section */}
      <section className="bg-[#161b22] py-16" data-unique-id="1239cf0c-b408-4082-9767-e404264d3bee" data-file-name="app/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="4a5d4a03-f183-4675-8ba8-00e475d84a74" data-file-name="app/page.tsx">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeIn} transition={{
          duration: 0.6
        }} data-unique-id="87209eda-eef2-4bfd-b823-0a90a98f7b04" data-file-name="app/page.tsx">
            <h2 className="text-3xl font-bold mb-8 flex items-center" data-unique-id="595d7a07-ea91-4ed8-9f8c-075546d0fd5f" data-file-name="app/page.tsx">
              <span className="text-[#58a6ff]" data-unique-id="11e8ef2d-7fb8-4104-9521-4e834c26ea03" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="2ee99045-564f-4e8b-b378-153fa51a5ac5" data-file-name="app/page.tsx">#</span></span><span className="editable-text" data-unique-id="769dcd2b-dc65-4f67-aa0d-73f5d356c52c" data-file-name="app/page.tsx"> About Me
              </span><span className="ml-2 h-px bg-[#30363d] flex-1" data-unique-id="2f5aaaf4-35f2-4c70-abce-0036bce95503" data-file-name="app/page.tsx"></span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-unique-id="65dd7e70-35a8-4560-a812-3e98886205bb" data-file-name="app/page.tsx">
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition" data-unique-id="e39a42aa-d3c1-48c8-9089-0f617d7382db" data-file-name="app/page.tsx">
                <BookOpen className="text-[#7ee787] mb-4" size={24} />
                <h3 className="text-xl font-semibold mb-3" data-unique-id="60aa6e5e-b672-4de5-80a5-289a67fcaf9c" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="1219e107-2133-4919-bfda-3e351c9c725a" data-file-name="app/page.tsx">Education</span></h3>
                <p className="text-[#8b949e]" data-unique-id="0a643efa-9c5f-4255-9bf7-1ff31baa8ddc" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="352844b3-d6eb-4293-b632-a1ebd8ac506f" data-file-name="app/page.tsx">
                  Currently attending William G. Enloe GT/IB Magnet Center for the Humanities, Sciences and Arts.
                  Pursuing dual concentrations in Music Performance and Career and Technical Education (CTE) in Graphic Design.
                </span></p>
              </div>
              
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition" data-unique-id="c6b6c313-9dc1-4f33-9026-83b1b4ee5871" data-file-name="app/page.tsx">
                <Code className="text-[#7ee787] mb-4" size={24} />
                <h3 className="text-xl font-semibold mb-3" data-unique-id="73e31cfd-5948-4441-aff1-11709cd67022" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="a81193b6-6841-42ec-ae07-7fa53a41845d" data-file-name="app/page.tsx">Development</span></h3>
                <p className="text-[#8b949e]" data-unique-id="7e31b79f-7c2e-429a-bf68-5388dc0e666d" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="71ae32ca-0d3a-4e7a-88a5-255fad22a5a5" data-file-name="app/page.tsx">
                  Self-driven developer of technical expertise in software development. 
                  Currently working on BrowserVM, a browser-based virtual machine environment for digital privacy.
                </span></p>
              </div>
              
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition" data-unique-id="b7f44ba3-a6ef-48e5-ae6a-18c78e02e16e" data-file-name="app/page.tsx">
                <Music className="text-[#7ee787] mb-4" size={24} />
                <h3 className="text-xl font-semibold mb-3" data-unique-id="8b3c1c78-bb61-4e48-bb3b-8d19c06e3f1c" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="9c1f919b-80d8-4990-9efe-371a5d378c04" data-file-name="app/page.tsx">Music</span></h3>
                <p className="text-[#8b949e]" data-unique-id="ff7c234b-afcb-45b6-8ea9-6aab08c30a5b" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="b8c39464-3d29-49c3-b7a0-d01510e00256" data-file-name="app/page.tsx">
                  Passionate about music production, composition, and arrangement. 
                  Multiple-time All State Jazz performer and recipient of BandLab Featured Track awards.
                </span></p>
              </div>
            </div>
            
            <div className="mt-12" data-unique-id="81fdcfb9-237c-46a9-8bb6-f7e840b4c3cc" data-file-name="app/page.tsx">
              <p className="text-[#8b949e] text-lg leading-relaxed" data-unique-id="723795f4-eefe-484e-8c5b-6ae48beb1e30" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="545a7631-25f0-4f40-89da-25589fe73efe" data-file-name="app/page.tsx">
                I'm committed to leveraging interdisciplinary skills to innovate at the intersection of technology and the arts.
                My goal is to combine my passion for music, design, and programming to create meaningful digital experiences.
              </span></p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="container mx-auto py-16 px-4" data-unique-id="9261765d-f9e7-48b3-b57d-fc3f85216a61" data-file-name="app/page.tsx">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={fadeIn} transition={{
        duration: 0.6
      }} data-unique-id="aac74397-0a7d-4557-8987-bf653ce0ae1c" data-file-name="app/page.tsx">
          <h2 className="text-3xl font-bold mb-8 flex items-center" data-unique-id="c77e3ccd-aa42-419e-a9c5-ea633f9fc6c1" data-file-name="app/page.tsx">
            <span className="text-[#58a6ff]" data-unique-id="02ed2435-84b0-43f2-9131-80bf1744a330" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="db8cbdb2-3173-4eec-a966-1d75b7af8997" data-file-name="app/page.tsx">#</span></span><span className="editable-text" data-unique-id="1505675a-51b4-45ca-b0f9-02e0b9384a74" data-file-name="app/page.tsx"> Skills
            </span><span className="ml-2 h-px bg-[#30363d] flex-1" data-unique-id="20d89475-4789-461a-aa05-596c2a0abed4" data-file-name="app/page.tsx"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4" data-unique-id="48b043f8-1271-4341-8edb-eeee89c8422d" data-file-name="app/page.tsx">
            <SkillCard icon={<PenTool size={24} />} title="Graphic Design" level="Advanced" color="#f97583" />
            <SkillCard icon={<Code size={24} />} title="Software Development" level="Intermediate" color="#7ee787" />
            <SkillCard icon={<Music size={24} />} title="Music Production" level="Advanced" color="#58a6ff" />
            <SkillCard icon={<BookOpen size={24} />} title="Mathematics" level="Intermediate" color="#d2a8ff" />
            <SkillCard icon={<Monitor size={24} />} title="Photography" level="Intermediate" color="#ffbd2e" />
          </div>
        </motion.div>
      </section>
      
      {/* Projects Section */}
      <section className="bg-[#161b22] py-16" data-unique-id="76ec7c74-a7e2-4a31-bdf5-937b339dd5de" data-file-name="app/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="dfa963b0-1556-47e1-9dc2-791304b355bf" data-file-name="app/page.tsx">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeIn} transition={{
          duration: 0.6
        }} data-unique-id="9d74f8b0-75b9-4e90-ba57-718ef0b4fc93" data-file-name="app/page.tsx">
            <h2 className="text-3xl font-bold mb-8 flex items-center" data-unique-id="7eced8b8-9a2a-4c74-a9a0-7e90739e287b" data-file-name="app/page.tsx">
              <span className="text-[#58a6ff]" data-unique-id="f178d151-283f-4a72-9506-c593525c4f9e" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="986b7d20-b915-4442-b7f0-28c5e5ec2c8b" data-file-name="app/page.tsx">#</span></span><span className="editable-text" data-unique-id="7b193f21-3591-444b-bbba-7cfc200120f1" data-file-name="app/page.tsx"> Projects
              </span><span className="ml-2 h-px bg-[#30363d] flex-1" data-unique-id="a1351e67-8bdc-48ff-abae-f9d74d8e8e09" data-file-name="app/page.tsx"></span>
            </h2>
            
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition" data-unique-id="013db8bb-7c13-4231-a8f6-4d56bebff675" data-file-name="app/page.tsx">
              <h3 className="text-2xl font-semibold mb-2" data-unique-id="9b3cab38-7dae-45de-81ad-f97a4a80b4bd" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="5c909099-4e6e-454c-8547-a7d9dc87455a" data-file-name="app/page.tsx">BrowserVM Project</span></h3>
              <p className="text-[#8b949e] mb-4" data-unique-id="ad29bc6b-7e83-4c83-bdfa-4c142427d035" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="9446cb96-0bbb-4be4-8b92-ee2eb0d4a7c9" data-file-name="app/page.tsx">December 2024 - Present</span></p>
              <p className="text-[#e6edf3] mb-6" data-unique-id="2c09997d-67eb-46dc-b6cb-08fecefacd3f" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="305cc22e-c5b9-4b81-9d42-74e409b6daf7" data-file-name="app/page.tsx">
                A software development project creating a fully browser-based virtual machine environment for digital privacy.
              </span></p>
              <div className="flex flex-wrap gap-2 mb-6" data-unique-id="c06ba0f2-e2a3-4b4b-8c28-8ab5473dd752" data-file-name="app/page.tsx">
                <span className="bg-[#21262d] text-[#58a6ff] px-3 py-1 rounded-full text-xs" data-unique-id="5134530a-53e9-4b27-9778-60473c784033" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="91f26e16-689f-4e36-88dd-11e20634ce2d" data-file-name="app/page.tsx">JavaScript</span></span>
                <span className="bg-[#21262d] text-[#7ee787] px-3 py-1 rounded-full text-xs" data-unique-id="c8deb55b-4508-4488-a5fd-9124427c7fb7" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="a4dd667b-5f4a-4d15-bd81-a49782d89b9e" data-file-name="app/page.tsx">WebAssembly</span></span>
                <span className="bg-[#21262d] text-[#f97583] px-3 py-1 rounded-full text-xs" data-unique-id="a30d8fea-1865-4039-adea-268c7b86eb5e" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="61730a0f-de86-4304-bf7b-8aae95071373" data-file-name="app/page.tsx">Virtualization</span></span>
                <span className="bg-[#21262d] text-[#d2a8ff] px-3 py-1 rounded-full text-xs" data-unique-id="63fb57da-10bb-4e35-9bb8-13c10d558426" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="b4b29db9-8705-42b4-8ad6-5f5889800c92" data-file-name="app/page.tsx">Privacy</span></span>
              </div>
              <a href="https://github.com/browser-vm" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#58a6ff] hover:text-[#79c0ff] transition w-fit" data-unique-id="fbdda024-bf72-4f70-b978-867cf569be84" data-file-name="app/page.tsx">
                <Github size={16} />
                <span data-unique-id="09bc83ec-83ae-4c2a-b082-e13a56fd6ebb" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="fa1d9e41-6400-43c8-a324-ea8ebee7f04a" data-file-name="app/page.tsx">View on GitHub</span></span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Certificates Section */}
      <section className="container mx-auto py-16 px-4" data-unique-id="366d7841-6752-4e12-be85-3a046eeddfca" data-file-name="app/page.tsx">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={fadeIn} transition={{
        duration: 0.6
      }} data-unique-id="37dc5576-27e2-48c8-822c-13efb86e68ea" data-file-name="app/page.tsx">
          <h2 className="text-3xl font-bold mb-8 flex items-center" data-unique-id="e24ace7c-b8df-471a-8935-41d979affcd1" data-file-name="app/page.tsx">
            <span className="text-[#58a6ff]" data-unique-id="d6bedd4f-5459-48ec-9536-ede69a0d9df8" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="fe8a0786-256c-4286-aec5-6dae47a2ab61" data-file-name="app/page.tsx">#</span></span><span className="editable-text" data-unique-id="fead7a7f-f608-454a-9141-11dbc001cef9" data-file-name="app/page.tsx"> Certificates
            </span><span className="ml-2 h-px bg-[#30363d] flex-1" data-unique-id="65b78075-a710-40b1-9959-cde2e3102c7a" data-file-name="app/page.tsx"></span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-unique-id="28e7141e-1757-41b7-8e08-5f9183dd9c14" data-file-name="app/page.tsx">
            <CertificateCard title="Adobe Certified Expert" subtitle="Adobe Photoshop" description="Industry-recognized validation of skill in Adobe Photoshop CC, including design elements preparation, image manipulation and publishing." link="https://www.credly.com/badges/b4d0115c-2983-4ecf-a359-7b892d52b7be/public_url" color="#31A8FF" />
            <CertificateCard title="Adobe Certified Professional" subtitle="Graphic Design & Illustration Using Adobe Illustrator" description="Industry-recognized validation of expertise in Adobe Illustrator, including key industry concepts and the program's interface." link="https://www.credly.com/badges/f81129b2-5a88-44f4-96e3-a062b863a14f/public_url" color="#FF9A00" />
            <CertificateCard title="Adobe Certified Professional" subtitle="Visual Design" description="Industry-recognized certification validating expertise in creating and designing holistic digital aesthetics using Adobe Creative Cloud." link="https://www.credly.com/badges/dbc1837b-2c93-454e-8174-b715ff1a371a/public_url" color="#CC0000" />
          </div>
        </motion.div>
      </section>
      
      {/* Awards Section */}
      <section className="bg-[#161b22] py-16" data-unique-id="df06e55a-c866-4839-b00e-aaa300fc41f9" data-file-name="app/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="ee73e43d-6a9d-4d0b-a1e2-8dfd2b378623" data-file-name="app/page.tsx">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeIn} transition={{
          duration: 0.6
        }} data-unique-id="2e77c0d4-694a-41e0-bb2d-c2c8e1724b8d" data-file-name="app/page.tsx">
            <h2 className="text-3xl font-bold mb-8 flex items-center" data-unique-id="50e6f9d4-f9e7-46c3-881c-7b2db7aecf9d" data-file-name="app/page.tsx">
              <span className="text-[#58a6ff]" data-unique-id="4534bc5f-1c30-4da1-9f1c-a59743924da7" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="b42cb1fc-5740-4f48-9d26-a90c82b87c69" data-file-name="app/page.tsx">#</span></span><span className="editable-text" data-unique-id="31ee8798-e37f-4197-9cfd-ed1f40cb5640" data-file-name="app/page.tsx"> Awards
              </span><span className="ml-2 h-px bg-[#30363d] flex-1" data-unique-id="6fb7ddf6-3f17-4460-9dce-e399dde344c0" data-file-name="app/page.tsx"></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="f7bc437b-c51d-4779-8575-7ddfa761897c" data-file-name="app/page.tsx">
              <AwardCard title="All State Jazz, Lead Alto" organization="NCMEA" year="2024" icon={<Award size={20} />} />
              <AwardCard title="All State Jazz, Lead Alto" organization="NCMEA" year="2023" icon={<Award size={20} />} />
              <AwardCard title="All State Jazz, Bari Sax" organization="NCMEA" year="2022" icon={<Award size={20} />} />
              <AwardCard title="Bandlab Featured Track (2 Weeks)" organization="BandLab" year="2024" icon={<Music size={20} />} />
              <AwardCard title="BandLab + Coffee Featured Track" organization="DJTatious on behalf of BandLab" year="N/A" subtitle="The Way" icon={<Music size={20} />} />
              <AwardCard title="BandLab + Coffee Featured Track" organization="DJTatious on behalf of BandLab" year="N/A" subtitle="Dreamscape" icon={<Music size={20} />} />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="container mx-auto py-16 px-4" data-unique-id="085f54ea-a340-4b07-8421-68206ecd7894" data-file-name="app/page.tsx">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={fadeIn} transition={{
        duration: 0.6
      }} data-unique-id="47b88aaf-cdb5-4496-8d79-37d2d9d41085" data-file-name="app/page.tsx">
          <h2 className="text-3xl font-bold mb-8 flex items-center" data-unique-id="04805312-e3da-4fe8-a2d9-ccf3cb0cfd24" data-file-name="app/page.tsx">
            <span className="text-[#58a6ff]" data-unique-id="7a888104-cb47-4e46-9529-457203268750" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="7f0b4f67-2899-4fab-a901-d291d8a322a1" data-file-name="app/page.tsx">#</span></span><span className="editable-text" data-unique-id="d712cae5-5702-47f4-8260-5763ea41aeaa" data-file-name="app/page.tsx"> Contact
            </span><span className="ml-2 h-px bg-[#30363d] flex-1" data-unique-id="7bd5e2f4-2d28-4258-86c6-3094de959fee" data-file-name="app/page.tsx"></span>
          </h2>
          
          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-8" data-unique-id="9a997d64-fbe0-46d8-a3d0-68fd7e5ebfe3" data-file-name="app/page.tsx">
            <div className="text-center mb-8" data-unique-id="91096956-6ffb-40fe-bb09-142457888ba3" data-file-name="app/page.tsx">
              <p className="text-xl text-[#8b949e] mb-4" data-unique-id="2f8591f0-8505-406f-beb5-7a86833286c3" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="25d41e00-e643-4477-9226-7615b92ad58b" data-file-name="app/page.tsx">Get in touch</span></p>
              <h3 className="text-3xl font-bold text-[#e6edf3]" data-unique-id="5438d01f-e50b-4ee6-9bd8-4641af4255f2" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="6f638f27-afe9-4eed-b878-90d34983e10a" data-file-name="app/page.tsx">Let's Connect</span></h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-unique-id="e5f4a3f5-5156-46a4-81e8-691437a0e8d2" data-file-name="app/page.tsx">
              <div data-unique-id="743e0cf2-3f28-44c7-b481-5148e44579f5" data-file-name="app/page.tsx">
                <p className="text-[#8b949e] mb-6" data-unique-id="57f966c6-2a9c-46cb-aa13-7bf6ebd127c4" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="a1cd666c-b740-4ca3-9020-3344c513fb77" data-file-name="app/page.tsx">
                  I'm always interested in hearing about new projects, opportunities, or just connecting with fellow creators.
                </span></p>
                <div className="space-y-4" data-unique-id="dd7f9263-e9f4-4334-92da-856354bede17" data-file-name="app/page.tsx">
                  <div className="flex items-center" data-unique-id="44f99658-29cb-4d8b-b0f6-92e14f6d0f30" data-file-name="app/page.tsx">
                    <div className="w-10 h-10 bg-[#21262d] rounded-full flex items-center justify-center mr-4" data-unique-id="10c732ec-996d-43ed-9a2d-701ae5cf622e" data-file-name="app/page.tsx">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#58a6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-unique-id="2c97b5c7-f8b1-4602-a025-b336b0672bbd" data-file-name="app/page.tsx"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div data-unique-id="8edf85db-9224-4e35-9fa7-ff7d1f5b26d7" data-file-name="app/page.tsx">
                      <p className="text-sm text-[#8b949e]" data-unique-id="1d79e50c-fc3f-4603-b8e3-450898d60878" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="b0c6b88b-2111-4608-ae7e-0f505605f887" data-file-name="app/page.tsx">Email</span></p>
                      <a href="mailto:apscott@students.wcpss.net" className="text-[#58a6ff] hover:underline" data-unique-id="a71f04f6-8c82-42bf-8f78-9414c8957f75" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="4df3a41f-ace2-40e6-bc7b-a120dc964130" data-file-name="app/page.tsx">apscott@students.wcpss.net</span></a>
                    </div>
                  </div>
                  <div className="flex items-center" data-unique-id="d8006b63-0352-421c-a883-002c3bf658a9" data-file-name="app/page.tsx">
                    <div className="w-10 h-10 bg-[#21262d] rounded-full flex items-center justify-center mr-4" data-unique-id="5aa628d9-a9a3-49bf-91a0-e591e9368cb5" data-file-name="app/page.tsx">
                      <Github size={20} className="text-[#58a6ff]" />
                    </div>
                    <div data-unique-id="48cc4da7-4f44-4de5-954d-5c972d0e89dc" data-file-name="app/page.tsx">
                      <p className="text-sm text-[#8b949e]" data-unique-id="e878e682-c878-4505-b685-4decf4c029f7" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="4cd130c5-93c2-4aee-ae3b-f85e9d231ba4" data-file-name="app/page.tsx">GitHub</span></p>
                      <a href="https://github.com/browser-vm" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline" data-unique-id="e46eaccb-41e1-4fa6-88e8-4681480deef6" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="e5a31c2a-af79-4502-b380-fbe9a7fa2a67" data-file-name="app/page.tsx">browser-vm</span></a>
                    </div>
                  </div>
                  <div className="flex items-center" data-unique-id="75ffade9-a7d6-442b-b745-c8718c36a7bf" data-file-name="app/page.tsx">
                    <div className="w-10 h-10 bg-[#21262d] rounded-full flex items-center justify-center mr-4" data-unique-id="435ad542-8dd5-43a2-84e6-ec2deeb92508" data-file-name="app/page.tsx">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#58a6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-unique-id="60d509c6-43ce-4a89-9f01-f47c9125764d" data-file-name="app/page.tsx"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </div>
                    <div data-unique-id="4eb7c4c4-b18e-45b1-b203-fe6a3ddeaad0" data-file-name="app/page.tsx">
                      <p className="text-sm text-[#8b949e]" data-unique-id="54c9aec3-3687-4fa4-81d4-7a19fab81685" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="ca65e21e-c162-46e6-a25e-a109bf6647ac" data-file-name="app/page.tsx">BandLab</span></p>
                      <a href="https://bandlab.com/officialnameless" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline" data-unique-id="320f41f9-65ad-4de0-9465-a48cd902d6d7" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="80b2fa4b-9531-4039-9112-0d719a67024b" data-file-name="app/page.tsx">officialnameless</span></a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d]" data-unique-id="76e12f2d-72cb-400d-b38f-7988cb3c18a0" data-file-name="app/page.tsx">
                <div className="flex items-center mb-4 bg-[#0d1117] rounded-md px-3 py-2" data-unique-id="9029624a-0c9a-4dda-8394-6176d5522a59" data-file-name="app/page.tsx">
                  <div className="flex space-x-2" data-unique-id="15c6a1ec-30bc-464e-a062-2f784ab7b134" data-file-name="app/page.tsx">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" data-unique-id="14953d0f-139a-4b99-b418-f666e1a781ea" data-file-name="app/page.tsx"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" data-unique-id="b6b64a34-d3e4-4175-bece-f5dde32d4ba4" data-file-name="app/page.tsx"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" data-unique-id="1b54fd7b-c565-480d-9e4c-65d08d4ab5c9" data-file-name="app/page.tsx"></div>
                  </div>
                  <div className="ml-4 text-xs text-[#8b949e]" data-unique-id="dfead45b-2b8d-4cb0-bdb8-65ec88b2ba96" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="6b6839ef-15a8-4749-ba82-8cc05eab81c1" data-file-name="app/page.tsx">~/contact/message.sh</span></div>
                </div>
                <div className="font-mono text-sm text-[#e6edf3] space-y-2" data-unique-id="769fe89a-a33d-4dc3-89ca-ab84f83eccb0" data-file-name="app/page.tsx">
                  <div data-unique-id="72591db5-6c12-48f3-aa98-852829c11f59" data-file-name="app/page.tsx"><span className="text-[#58a6ff]" data-unique-id="d59b34f5-0ade-4ff1-8071-02fdd20b91dc" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="55da9d70-a3a4-4012-8592-cbec9b358b35" data-file-name="app/page.tsx">$</span></span><span className="editable-text" data-unique-id="4f0db0a5-170b-4ae4-8c7e-ff55f8eb0de8" data-file-name="app/page.tsx"> echo "I'm excited to hear from you!"</span></div>
                  <div className="pl-4" data-unique-id="048cf56a-f36e-44d1-8830-052e2bbf0e53" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="d4da4a95-899d-41d7-a90d-9342f114aac6" data-file-name="app/page.tsx">I'm excited to hear from you!</span></div>
                  <div data-unique-id="086147ec-ef3f-434a-ad74-cf6c2d18b514" data-file-name="app/page.tsx"><span className="text-[#58a6ff]" data-unique-id="2d7b8ffb-c48d-4bf0-845e-2d05a2b50939" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="cd93d19b-da0a-44c1-9568-99d279090710" data-file-name="app/page.tsx">$</span></span><span className="editable-text" data-unique-id="118ef0d7-f79c-404b-850b-d5ae224a4d2f" data-file-name="app/page.tsx"> cat refs.txt</span></div>
                  <div className="pl-4 text-sm" data-unique-id="32ed29fc-674a-44fc-be8e-2599c09120a0" data-file-name="app/page.tsx">
                    <div data-unique-id="b6285992-f01b-4e9e-a92b-8295e12e1bd8" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="eae8142a-e54a-4c4e-be36-99f3e219bcbc" data-file-name="app/page.tsx">Renee Todd, Director of Bands, Ligon Middle School</span></div>
                    <div className="text-[#8b949e]" data-unique-id="4b76f7f8-8674-4b7a-8315-cfc6d1502099" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="0d79facf-e0a4-4e1a-80b2-dd8586b670df" data-file-name="app/page.tsx">rtodd1@wcpss.net</span></div>
                    <div className="mt-2" data-unique-id="2c6d8213-a3f6-484a-bf0d-a69da17aa267" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="f591c825-a435-426e-98c8-b08afcc8d145" data-file-name="app/page.tsx">Gary Duvall, Principal, Holly Springs High School</span></div>
                    <div className="text-[#8b949e]" data-unique-id="fcb13727-8480-41d4-a60d-3949990db499" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="61c685bf-2612-40e1-9f5c-26f73d6c5fb9" data-file-name="app/page.tsx">gduvall@wcpss.net</span></div>
                    <div className="mt-2" data-unique-id="7d64fab8-1967-4d82-bcb3-111d77f555b0" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="498e8e23-825b-428e-a787-57144abca6ec" data-file-name="app/page.tsx">Dr. Jacqueline Jordan, Principal, Enloe High School</span></div>
                    <div className="text-[#8b949e]" data-unique-id="f0d1312d-8742-4858-9b97-cf240a02624f" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="c31a18a0-6f8a-4f06-aa77-f87607d91015" data-file-name="app/page.tsx">jjordan@wcpss.net</span></div>
                  </div>
                  <div className="animate-pulse" data-unique-id="3ad69f67-428c-4aa6-915f-1bf8e75cf7a5" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="9cac7e6d-48c6-400d-8bd2-f3efd9563c9d" data-file-name="app/page.tsx">█</span></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#0d1117] border-t border-[#30363d] py-8" data-unique-id="52bba086-3122-4fcd-9e15-3e964050e360" data-file-name="app/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="007fd445-0f39-4d19-bd0b-cd3572368617" data-file-name="app/page.tsx">
          <div className="flex flex-col lg:flex-row justify-between items-center" data-unique-id="05a50ae8-a8f8-48cc-9312-46cb90bc70aa" data-file-name="app/page.tsx">
            <div className="text-[#58a6ff] font-mono mb-4 lg:mb-0" data-unique-id="c554aebd-23cd-414d-879a-514895ea33f8" data-file-name="app/page.tsx">
              <span className="text-[#7ee787]" data-unique-id="bfb3bdeb-69d0-4760-9636-32dc62ab90d3" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="52db331f-9884-4517-8650-a0e214cffdc9" data-file-name="app/page.tsx">alex</span></span><span className="editable-text" data-unique-id="37086b7c-5ba2-4a58-a816-0f67c9a879bc" data-file-name="app/page.tsx">@</span><span className="text-[#f97583]" data-unique-id="1b8c9052-3dc7-416e-83c2-f75d25d19410" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="2c23b66c-bbee-417f-a4d6-aaac044a2097" data-file-name="app/page.tsx">portfolio</span></span><span className="editable-text" data-unique-id="6621e252-8a61-471d-ab3e-488ae752bdc5" data-file-name="app/page.tsx">:~$ exit
            </span></div>
            <div className="text-[#8b949e] text-sm" data-unique-id="3debb843-b387-45fe-8c82-68888b19631b" data-file-name="app/page.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ba937b47-a203-4e83-97db-387d48f4e134" data-file-name="app/page.tsx">
              &copy; </span>{new Date().getFullYear()}<span className="editable-text" data-unique-id="8b27dfdb-f9d3-4bb5-bff9-e353ef76ba01" data-file-name="app/page.tsx"> Alex Scott. Built with Next.js and TailwindCSS.
            </span></div>
          </div>
        </div>
      </footer>
    </div>;
}

// Component for skills cards
function SkillCard({
  icon,
  title,
  level,
  color
}: {
  icon: React.ReactNode;
  title: string;
  level: string;
  color: string;
}) {
  return <motion.div whileHover={{
    scale: 1.03
  }} className="bg-[#0d1117] border border-[#30363d] rounded-lg p-5 hover:border-[#58a6ff] transition" data-unique-id="dccd6c1c-3e5a-489b-ab6c-d19af35327ae" data-file-name="app/page.tsx">
      <div className="mb-4" style={{
      color
    }} data-unique-id="18700b8d-03cf-4b6a-9d44-e1b6d3b6f369" data-file-name="app/page.tsx" data-dynamic-text="true">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-1" data-unique-id="5de43c8f-6da0-4980-831b-1007102d20c8" data-file-name="app/page.tsx" data-dynamic-text="true">{title}</h3>
      <p className="text-[#8b949e] text-sm" data-unique-id="0e869b60-abca-4fb3-a634-2e1f83957fee" data-file-name="app/page.tsx" data-dynamic-text="true">{level}</p>
    </motion.div>;
}

// Component for certificate cards
function CertificateCard({
  title,
  subtitle,
  description,
  link,
  color
}: {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  color: string;
}) {
  return <motion.div whileHover={{
    scale: 1.03
  }} className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition" data-unique-id="000de99d-ffeb-4095-8045-1cb06dfeda8c" data-file-name="app/page.tsx">
      <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{
      backgroundColor: color
    }} data-unique-id="ad587c34-0cfe-4b69-b57e-5e116f928b46" data-file-name="app/page.tsx">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-unique-id="ce29ee55-13d7-4d9f-92c9-9077b9c4fb7f" data-file-name="app/page.tsx"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
      </div>
      <h3 className="text-lg font-semibold" data-unique-id="dbbb43ca-c5bb-4439-abf4-c14615f76548" data-file-name="app/page.tsx" data-dynamic-text="true">{title}</h3>
      <p className="text-[#7ee787] mb-2" data-unique-id="1a809ce2-fc28-44fe-b21b-b637e744aefa" data-file-name="app/page.tsx" data-dynamic-text="true">{subtitle}</p>
      <p className="text-[#8b949e] text-sm mb-4" data-unique-id="782994b6-7536-413d-b552-ee58f1c28ea1" data-file-name="app/page.tsx" data-dynamic-text="true">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline text-sm flex items-center" data-unique-id="d6e0b3f5-ff43-43f4-bf9e-eb209b9c0858" data-file-name="app/page.tsx">
        <ExternalLink size={14} className="mr-1" /><span className="editable-text" data-unique-id="5666170a-428a-4e46-bb33-e1992b18c3d7" data-file-name="app/page.tsx"> View Certificate
      </span></a>
    </motion.div>;
}

// Component for award cards
function AwardCard({
  title,
  organization,
  year,
  icon,
  subtitle
}: {
  title: string;
  organization: string;
  year: string;
  icon: React.ReactNode;
  subtitle?: string;
}) {
  return <motion.div whileHover={{
    scale: 1.03
  }} className="bg-[#0d1117] border border-[#30363d] rounded-lg p-5 hover:border-[#58a6ff] transition" data-unique-id="67ac9b10-dcaf-47bd-989f-8c50825e2ee6" data-file-name="app/page.tsx">
      <div className="flex items-center mb-3" data-unique-id="ec2fce7e-6f25-43f1-b800-fff2d04dc6d2" data-file-name="app/page.tsx">
        <div className="bg-[#21262d] p-2 rounded-full mr-3 text-[#f97583]" data-unique-id="e252b519-7b95-4e4c-91f5-7307e9f07897" data-file-name="app/page.tsx" data-dynamic-text="true">
          {icon}
        </div>
        <div data-unique-id="a1973e99-e6b3-4b2f-92f7-11b1ffde8ec5" data-file-name="app/page.tsx" data-dynamic-text="true">
          <h3 className="font-semibold" data-unique-id="32d53462-6b89-4fa0-9114-1dfc738d75aa" data-file-name="app/page.tsx" data-dynamic-text="true">{title}</h3>
          {subtitle && <p className="text-[#7ee787] text-sm" data-unique-id="57dad93d-aa27-418f-9c18-1a8b18a42da2" data-file-name="app/page.tsx" data-dynamic-text="true">{subtitle}</p>}
        </div>
      </div>
      <div className="pl-12" data-unique-id="a5cfcdd3-fc3e-45c9-a48f-7b15d5f0cbd5" data-file-name="app/page.tsx" data-dynamic-text="true">
        <p className="text-[#8b949e] text-sm" data-unique-id="3e07b5b8-3143-459c-8bc2-c918fa08fd7d" data-file-name="app/page.tsx" data-dynamic-text="true">{organization}</p>
        {year !== "N/A" && <p className="text-[#8b949e] text-xs" data-unique-id="21c690d5-ec61-4e0f-ad3d-6946e2c7fd2e" data-file-name="app/page.tsx" data-dynamic-text="true">{year}</p>}
      </div>
    </motion.div>;
}