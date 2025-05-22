"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { Volume2, VolumeX, Github, ExternalLink, Award, Code, Music, PenTool, BookOpen, Monitor, FileText } from "lucide-react";
import Link from "next/link";
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
  return <div className="bg-[#0d1117] min-h-screen text-[#e6edf3] font-mono" data-unique-id="e949c947-fbcb-4407-b69c-6ee5ff7d246b" data-file-name="app/page.tsx" data-dynamic-text="true">
      {/* Sound control */}
      <div className="fixed top-5 right-5 z-50" data-unique-id="676c1f11-1e97-4128-a928-2af04cbf2944" data-file-name="app/page.tsx">
        <button className="bg-[#21262d] p-2 rounded-full hover:bg-[#30363d] transition" onClick={() => setMuted(!muted)} data-unique-id="856229a0-3b69-43a0-a07b-8d61abd82a93" data-file-name="app/page.tsx" data-dynamic-text="true">
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="bg-[#161b22] border-b border-[#30363d] p-3 sticky top-0 z-40 backdrop-blur-sm bg-opacity-90" data-unique-id="9df45fa4-9c76-472c-bed7-634dec03d1e3" data-file-name="app/page.tsx">
        <div className="container mx-auto flex justify-between items-center" data-unique-id="f32ffaa4-445d-437d-8cea-d7f8d2bf2496" data-file-name="app/page.tsx">
          <div className="text-xl font-bold text-[#58a6ff]" data-unique-id="04f29efd-8e90-49da-8baa-5f6bb7bd2f54" data-file-name="app/page.tsx">
            <span className="text-[#7ee787]" data-unique-id="6ff498c2-05f9-4ab1-86e8-40b2711b77db" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="17f07c98-d1a6-4de8-91cb-8cd82b849862" data-file-name="app/page.tsx">alex</span></span><span className="editable-text" data-unique-id="a22062aa-6799-49e6-8a42-e395daa60785" data-file-name="app/page.tsx">@</span><span className="text-[#f97583]" data-unique-id="7eaeeae7-69f1-4d13-a901-4e44a40e3ed0" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="bdaf0253-e473-4019-8fc0-7804bb414372" data-file-name="app/page.tsx">portfolio</span></span><span className="editable-text" data-unique-id="742ab857-d518-4604-aacb-2692f8419348" data-file-name="app/page.tsx">:~$
          </span></div>
          <div className="hidden lg:flex space-x-6" data-unique-id="a3e05722-999b-4504-b2a5-2affd90a4090" data-file-name="app/page.tsx" data-dynamic-text="true">
            {['home', 'about', 'skills', 'projects', 'certificates', 'awards', 'contact'].map(item => <a key={item} href={`#${item}`} className={`text-sm uppercase tracking-wider hover:text-[#58a6ff] transition 
                ${activeSection === item ? 'text-[#58a6ff]' : 'text-[#8b949e]'}`} onClick={e => {
            e.preventDefault();
            setActiveSection(item);
            const section = document.getElementById(item);
            if (section) {
              section.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }} data-unique-id="def0edd6-1201-475b-abd2-e21609150dab" data-file-name="app/page.tsx" data-dynamic-text="true">
                {item}
              </a>)}
            <Link href="/portfolio" className="text-sm uppercase tracking-wider text-[#7ee787] hover:text-[#58a6ff] transition" data-unique-id="54fe59f9-9086-40e7-b929-5efd1d494519" data-file-name="app/page.tsx">
              <span className="editable-text" data-unique-id="0b56cc8c-c692-4b4e-b555-66728ac6572e" data-file-name="app/page.tsx">portfolio</span>
            </Link>
            <a href="https://drive.google.com/file/d/1agH_p2ltRqakMZmY7LRfSeGGl-BAIPMB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-wider text-[#d2a8ff] hover:text-[#58a6ff] transition" data-unique-id="173f5ed4-2739-43e6-a8e3-998e13e308af" data-file-name="app/page.tsx">
              <span className="editable-text" data-unique-id="1b8f06c5-f1a1-4524-8b4f-9bdbbeafaac9" data-file-name="app/page.tsx">resume</span>
            </a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="container mx-auto py-16 px-4" data-unique-id="a804adaa-7e99-4ee8-b129-082e842ec8f3" data-file-name="app/page.tsx">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{
        duration: 0.6
      }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-unique-id="2cfc8a59-8b29-4962-8f3f-c5623da9ceda" data-file-name="app/page.tsx">
          <div data-unique-id="729998c2-ebbe-4b16-a0ea-1dae32133c3d" data-file-name="app/page.tsx">
            <h1 className="text-5xl font-bold mb-4 text-[#f0f6fc]" data-unique-id="09b78f85-3866-40e0-837f-dffb6b163b42" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="6c2f5eba-7b91-48e6-8fb6-685d43128a8f" data-file-name="app/page.tsx">Alex Scott</span></h1>
            <div className="h-12 mb-4" data-unique-id="a0410fbd-a555-4d9c-a741-1eceedd9c5d4" data-file-name="app/page.tsx">
              <TypeAnimation sequence={['Software Developer', 2000, 'Graphic Designer', 2000, 'Music Producer', 2000]} wrapper="div" cursor={true} repeat={Infinity} className="text-2xl text-[#7ee787]" />
            </div>
            <p className="text-[#8b949e] mb-8" data-unique-id="d66a5d93-ef72-4570-8f1b-90e8025c122a" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="7787165a-7e3c-462a-894f-31adbe1fcda9" data-file-name="app/page.tsx">
              High school student passionate about the intersection of technology and arts.
            </span></p>
            <div className="flex space-x-4" data-unique-id="602c785d-9b04-4d78-a45e-38c98dd1ed5d" data-file-name="app/page.tsx">
              <a href="https://github.com/browser-vm" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-[#238636] hover:bg-[#2ea043] text-white py-2 px-4 rounded-md transition" data-unique-id="bdcc2cfb-eb2b-4d7f-8cef-30909a8f6fb6" data-file-name="app/page.tsx">
                <Github size={16} />
                <span data-unique-id="1ffae167-6b24-48d1-990d-bb1815f4dde6" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="7ea0dfe2-ac39-48d1-bea5-f7a56462c97f" data-file-name="app/page.tsx">GitHub</span></span>
              </a>
              <a href="https://huggingface.co/namelessai" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-[#30363d] hover:bg-[#3c444e] text-white py-2 px-4 rounded-md transition" data-unique-id="d61ae980-3fb1-4948-bd44-9843c47a0fc1" data-file-name="app/page.tsx">
                <ExternalLink size={16} />
                <span data-unique-id="3e67a17d-1e33-481a-bf41-3181e92b033e" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="7f20acbd-2a0d-4dcd-ab3c-aa1b37736290" data-file-name="app/page.tsx">HuggingFace</span></span>
              </a>
              <a href="/portfolio" className="flex items-center space-x-2 bg-[#7ee787] hover:bg-opacity-90 text-[#0d1117] py-2 px-4 rounded-md transition" data-unique-id="589c1143-619d-4b6c-ab36-9134842c396c" data-file-name="app/page.tsx">
                <PenTool size={16} />
                <span data-unique-id="c7f8979e-b4b3-49ac-bc0e-55100ff84bdf" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="9d819cd1-bd3e-48ec-821e-30ad362c2f71" data-file-name="app/page.tsx">Portfolio</span></span>
              </a>
              <a href="https://drive.google.com/file/d/1agH_p2ltRqakMZmY7LRfSeGGl-BAIPMB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-[#d2a8ff] hover:bg-opacity-90 text-[#0d1117] py-2 px-4 rounded-md transition" data-unique-id="733fd8b9-54f2-4dfd-813b-8fd63e8478f0" data-file-name="app/page.tsx">
                <FileText size={16} />
                <span data-unique-id="94631e7b-2be1-4b40-81fc-77c0d9044a46" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="9ddcaa1d-8097-4025-b0f7-c62d08472674" data-file-name="app/page.tsx">Resume</span></span>
              </a>
            </div>
          </div>
          <div className="relative" data-unique-id="0e87d265-f1d5-4703-8e87-743dfc954714" data-file-name="app/page.tsx">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 shadow-lg" data-unique-id="d76d5d67-c8f3-4f3c-b848-636e5ca7d67f" data-file-name="app/page.tsx">
              <div className="flex items-center mb-4 bg-[#161b22] rounded-md px-3 py-2" data-unique-id="a538ddf5-28c1-4538-a907-d83d323a1daf" data-file-name="app/page.tsx">
                <div className="flex space-x-2" data-unique-id="2217a40d-54c2-4358-8449-d528f9719ddd" data-file-name="app/page.tsx">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" data-unique-id="ce29fc02-29d0-415f-9228-c3c6ce36426a" data-file-name="app/page.tsx"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" data-unique-id="7e970821-0f13-47e9-9039-a344a7a83dde" data-file-name="app/page.tsx"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" data-unique-id="29270222-6575-49db-a370-32cb7e6e437e" data-file-name="app/page.tsx"></div>
                </div>
                <div className="ml-4 text-xs text-[#8b949e]" data-unique-id="7ef28c6b-f886-4ca2-b69d-77b5754c4f9e" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="3130f1eb-d1c6-475b-94cd-a1a4ac8f0072" data-file-name="app/page.tsx">~/portfolio/alex_scott</span></div>
              </div>
              <div className="terminal-content font-mono text-sm text-[#e6edf3] space-y-2" data-unique-id="c0ff1f90-5e42-45f9-a97c-1b575d09e5da" data-file-name="app/page.tsx">
                <div data-unique-id="d2568546-36ab-4cf5-a3e9-b64ccffda761" data-file-name="app/page.tsx"><span className="text-[#58a6ff]" data-unique-id="a6114c1d-aeac-4d9c-8ea2-5746ca5be7ae" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="3fceff5f-b49b-4681-b7d7-af8f4d100b01" data-file-name="app/page.tsx">$</span></span><span className="editable-text" data-unique-id="9c528d65-a3c8-4c7f-a846-0fe2d7edf800" data-file-name="app/page.tsx"> cat about.txt</span></div>
                <div className="pl-4" data-unique-id="bee9ba95-b89c-43cf-a9de-76420776176f" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="82063620-8b2c-4037-bd1f-7534236c9c24" data-file-name="app/page.tsx">Dedicated high school student pursuing Music Performance and Graphic Design.</span></div>
                <div data-unique-id="fcaad21a-93b2-4c07-ab04-6a411891edc4" data-file-name="app/page.tsx"><span className="text-[#58a6ff]" data-unique-id="c4e0f4af-6476-4adb-8830-405b25f33354" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="0d72bddf-32c0-4f48-9b7a-a2effcb7d306" data-file-name="app/page.tsx">$</span></span><span className="editable-text" data-unique-id="b7de5eb3-ac1f-4176-be05-6304ce1b2ff3" data-file-name="app/page.tsx"> ls skills/</span></div>
                <div className="pl-4" data-unique-id="1f3c15b7-fca6-46ec-a897-6db11f9e4eaf" data-file-name="app/page.tsx">
                  <span className="text-[#f97583]" data-unique-id="6175d13f-cd45-46d8-9c09-1b464b5ee699" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="39d635bf-be36-467b-a3cc-43472564019b" data-file-name="app/page.tsx">graphic-design.md</span></span>{" "}
                  <span className="text-[#f97583]" data-unique-id="d695f17a-0368-4bcb-9259-8a2e88dc1096" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="a9c6ad98-574d-4321-b970-41f032bb67ec" data-file-name="app/page.tsx">software-dev.md</span></span>{" "}
                  <span className="text-[#f97583]" data-unique-id="3d1c3f50-064f-491e-921b-c0c6af48f50e" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="07cf3721-9c68-454d-941b-2be32cc56074" data-file-name="app/page.tsx">music-production.md</span></span>{" "}
                  <span className="text-[#f97583]" data-unique-id="6cbcfe42-b062-45af-81cf-c8423574882c" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="b2789775-4f75-4025-8bb8-e3ad8ec41bb7" data-file-name="app/page.tsx">math.md</span></span>{" "}
                  <span className="text-[#f97583]" data-unique-id="08932cf7-c366-4c2b-aaa0-02d39b1c5e7d" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="055ab761-157b-44be-897d-52895f6ed537" data-file-name="app/page.tsx">photography.md</span></span>
                </div>
                <div data-unique-id="e0337c85-fdeb-4412-98be-59d19edc4bef" data-file-name="app/page.tsx"><span className="text-[#58a6ff]" data-unique-id="7d13ceb4-2359-48ff-ab24-55deb0f012b5" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="b4108281-3efe-4e6d-bab2-954f17bb1f15" data-file-name="app/page.tsx">$</span></span><span className="editable-text" data-unique-id="444e8c2a-245e-44fb-8ec4-ff111a45bc38" data-file-name="app/page.tsx"> echo $EDUCATION</span></div>
                <div className="pl-4" data-unique-id="5ab7c209-4742-46b0-94be-47a3528060c2" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="fbe93dda-08f6-464f-aa2a-9a7bf3debb12" data-file-name="app/page.tsx">William G. Enloe GT/IB Magnet Center for the Humanities, Sciences and Arts</span></div>
                <div data-unique-id="0caf848c-2747-4963-a9bb-a7bfc07b55a6" data-file-name="app/page.tsx"><span className="text-[#58a6ff]" data-unique-id="76728de9-0cc8-4c61-a688-4ceb513305fb" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="00958405-72ed-4829-a744-8c8cb2b20da4" data-file-name="app/page.tsx">$</span></span><span className="editable-text" data-unique-id="a44def4f-dd29-44bd-89ce-5e5bc8b18e21" data-file-name="app/page.tsx"> find . -name "*.project" | sort</span></div>
                <div className="pl-4" data-unique-id="48c63fc4-97ad-417a-a462-bf6da924ebad" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="3530e5ce-ce10-4c51-8fee-33e79294dc73" data-file-name="app/page.tsx">./projects/BrowserVM.project</span></div>
                <div data-unique-id="9cac8c06-bde3-4255-b9f1-fabbf80f9115" data-file-name="app/page.tsx"><span className="text-[#58a6ff]" data-unique-id="3bd71011-a181-4ab1-9e10-866245ab932f" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="fe863f3d-8b66-4d52-8bba-773f88b88262" data-file-name="app/page.tsx">$</span></span><span className="editable-text" data-unique-id="ebb3a4a5-63c6-42ca-9cbc-e7347d08bc5b" data-file-name="app/page.tsx"> ./welcome.sh</span></div>
                <div className="pl-4 text-[#7ee787]" data-unique-id="74012ce3-8c58-4465-b58f-bc2cd042f741" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="9c41914a-8701-4c62-bdae-ffd9d4bcf4f6" data-file-name="app/page.tsx">Welcome! Explore my portfolio to learn more about me.</span></div>
                <div className="animate-pulse" data-unique-id="5163c750-ecaa-40d8-8d9d-0f485fcca649" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="e2a1e75b-112a-4986-b40e-db57d627d23b" data-file-name="app/page.tsx">█</span></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* About Section */}
      <section id="about" className="bg-[#161b22] py-16" data-unique-id="b3cb7a20-0055-4432-9768-e403b644393f" data-file-name="app/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="a5d8bbde-ee64-45bb-beef-03c1e2ac5064" data-file-name="app/page.tsx">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeIn} transition={{
          duration: 0.6
        }} data-unique-id="43b2e5da-bfea-4c5b-8ff6-e0d80a7ef2ca" data-file-name="app/page.tsx">
            <h2 className="text-3xl font-bold mb-8 flex items-center" data-unique-id="fa4b41a7-1fa0-42a4-a969-e13b85da5d08" data-file-name="app/page.tsx">
              <span className="text-[#58a6ff]" data-unique-id="4aef81a1-b327-46b9-9e45-1f63ab071fd3" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="dddbe3f5-f2dd-49ec-a79f-0e3db5214b2a" data-file-name="app/page.tsx">#</span></span><span className="editable-text" data-unique-id="32fb8fbc-387b-4ae5-aa5f-146d48866d04" data-file-name="app/page.tsx"> About Me
              </span><span className="ml-2 h-px bg-[#30363d] flex-1" data-unique-id="4010984d-2b06-469e-9a6c-9482e73dd985" data-file-name="app/page.tsx"></span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-unique-id="a17282ab-afe1-46b6-a5d0-a0fe2d0a2548" data-file-name="app/page.tsx">
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition" data-unique-id="b614e04c-caa8-48b0-a22b-64eae417235b" data-file-name="app/page.tsx">
                <BookOpen className="text-[#7ee787] mb-4" size={24} />
                <h3 className="text-xl font-semibold mb-3" data-unique-id="549db373-2ab0-44d3-8bbf-3886ce408e20" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="b4f2b591-8824-4bdc-adda-cbe2cfb39e83" data-file-name="app/page.tsx">Education</span></h3>
                <p className="text-[#8b949e]" data-unique-id="91569449-db58-4d76-85f9-0e70fb80d600" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="214c34b5-a40d-4e18-9051-79e2eebe36d5" data-file-name="app/page.tsx">
                  Currently attending William G. Enloe GT/IB Magnet Center for the Humanities, Sciences and Arts.
                  Pursuing dual concentrations in Music Performance and Career and Technical Education (CTE) in Graphic Design.
                </span></p>
              </div>
              
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition" data-unique-id="4f06fa95-0db6-46b0-872e-a94db3f0962f" data-file-name="app/page.tsx">
                <Code className="text-[#7ee787] mb-4" size={24} />
                <h3 className="text-xl font-semibold mb-3" data-unique-id="5d9e2285-ace3-4cad-91d8-1859a224a81a" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="b2dd73ac-6adf-498e-bba1-6566506cdd66" data-file-name="app/page.tsx">Development</span></h3>
                <p className="text-[#8b949e]" data-unique-id="8e5bfdaf-442a-400a-b897-c5adfd4c23cb" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="e8f723c7-0900-4027-aaf0-c7d3d5b45e9d" data-file-name="app/page.tsx">
                  Self-driven developer of technical expertise in software development. 
                  Currently working on BrowserVM, a browser-based virtual machine environment for digital privacy.
                </span></p>
              </div>
              
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition" data-unique-id="0c5246e2-583b-4138-8de9-fee3da676db0" data-file-name="app/page.tsx">
                <Music className="text-[#7ee787] mb-4" size={24} />
                <h3 className="text-xl font-semibold mb-3" data-unique-id="b0f8780f-3251-4c9c-89f7-af47d7163e8c" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="67b08e6e-9691-4ab9-8e27-c1d1406b3b8a" data-file-name="app/page.tsx">Music</span></h3>
                <p className="text-[#8b949e]" data-unique-id="0ce66af6-7b38-4033-a2ea-70620a4b51fe" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="0c6072ba-4d9f-4a7b-a3cb-d98c5d518079" data-file-name="app/page.tsx">
                  Passionate about music production, composition, and arrangement. 
                  Multiple-time All State Jazz performer and recipient of BandLab Featured Track awards.
                </span></p>
              </div>
            </div>
            
            <div className="mt-12" data-unique-id="b2ee5947-f067-4b70-9ef1-09885e2ea02a" data-file-name="app/page.tsx">
              <p className="text-[#8b949e] text-lg leading-relaxed" data-unique-id="ed28d2f3-f459-4add-831e-a75ed779305a" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="dd4ee903-6f80-4335-97c5-f55f185e1894" data-file-name="app/page.tsx">
                I'm committed to leveraging interdisciplinary skills to innovate at the intersection of technology and the arts.
                My goal is to combine my passion for music, design, and programming to create meaningful digital experiences.
              </span></p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="container mx-auto py-16 px-4" data-unique-id="8a91e4e8-c147-4fcf-af69-27fe9ebafe25" data-file-name="app/page.tsx">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={fadeIn} transition={{
        duration: 0.6
      }} data-unique-id="db7b094c-2d58-4d33-b043-2b56d2932f8d" data-file-name="app/page.tsx">
          <h2 className="text-3xl font-bold mb-8 flex items-center" data-unique-id="1e2e7a56-a9ef-40f3-bacc-5cfae88fa7eb" data-file-name="app/page.tsx">
            <span className="text-[#58a6ff]" data-unique-id="132ca863-b46a-48b8-af79-e7a4ebaf6102" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="c292a677-d11d-4302-9ad0-7f4a50cd82a3" data-file-name="app/page.tsx">#</span></span><span className="editable-text" data-unique-id="e79b2da0-9c3b-41c7-85a2-1f7f65a904a6" data-file-name="app/page.tsx"> Skills
            </span><span className="ml-2 h-px bg-[#30363d] flex-1" data-unique-id="a045c0bd-faf8-4064-9b2b-d16d88c5eb82" data-file-name="app/page.tsx"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4" data-unique-id="8d1d1e03-4a28-4070-97de-ea60806d0ee7" data-file-name="app/page.tsx">
            <SkillCard icon={<PenTool size={24} />} title="Graphic Design" level="Advanced" color="#f97583" />
            <SkillCard icon={<Code size={24} />} title="Software Development" level="Intermediate" color="#7ee787" />
            <SkillCard icon={<Music size={24} />} title="Music Production" level="Advanced" color="#58a6ff" />
            <SkillCard icon={<BookOpen size={24} />} title="Mathematics" level="Intermediate" color="#d2a8ff" />
            <SkillCard icon={<Monitor size={24} />} title="Photography" level="Intermediate" color="#ffbd2e" />
          </div>
        </motion.div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="bg-[#161b22] py-16" data-unique-id="7d40a47b-db47-4be4-8e1a-347a7c738353" data-file-name="app/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="9019a294-083f-4d29-8cf5-ecbb95e918f3" data-file-name="app/page.tsx">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeIn} transition={{
          duration: 0.6
        }} data-unique-id="b4da12c9-7f59-4eca-ab16-bd5ceea984e4" data-file-name="app/page.tsx">
            <h2 className="text-3xl font-bold mb-8 flex items-center" data-unique-id="0556a200-286e-42b6-9e9e-ec553f3c091a" data-file-name="app/page.tsx">
              <span className="text-[#58a6ff]" data-unique-id="0db4e450-dcd5-4511-9374-a9b30e8f9f15" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="00db42cf-60d1-4d38-930f-dee14f433525" data-file-name="app/page.tsx">#</span></span><span className="editable-text" data-unique-id="0ce0d77e-1257-448a-966c-c40f5d09df20" data-file-name="app/page.tsx"> Projects
              </span><span className="ml-2 h-px bg-[#30363d] flex-1" data-unique-id="be559d9b-c5ca-47ec-b262-b1c14d420d4b" data-file-name="app/page.tsx"></span>
            </h2>
            
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition" data-unique-id="b62cb95c-e77b-4a53-9a59-d46b3d6c284a" data-file-name="app/page.tsx">
              <h3 className="text-2xl font-semibold mb-2" data-unique-id="988339f6-5a3f-448b-8c9f-c8dfc2c40889" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="3734c677-54b1-4e0a-9350-d16f889b0147" data-file-name="app/page.tsx">BrowserVM Project</span></h3>
              <p className="text-[#8b949e] mb-4" data-unique-id="968e92d9-86f3-43dd-91c8-175df5c158d8" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="aaf5cb0e-f9b4-43da-9bad-8230cca36af7" data-file-name="app/page.tsx">December 2024 - Present</span></p>
              <p className="text-[#e6edf3] mb-6" data-unique-id="bc6e0f7a-19ae-4bdf-8860-36ed9e30085d" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="a6a32935-cf47-421a-949c-c099e24170a5" data-file-name="app/page.tsx">
                A software development project creating a fully browser-based virtual machine environment for digital privacy.
              </span></p>
              <div className="flex flex-wrap gap-2 mb-6" data-unique-id="99c0951e-d7dd-4c3a-b08a-d4eecb09dbcb" data-file-name="app/page.tsx">
                <span className="bg-[#21262d] text-[#58a6ff] px-3 py-1 rounded-full text-xs" data-unique-id="6476b523-8834-4c2c-a24a-34e162be7886" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="451c8e1f-c90c-40f7-829c-86d02e11fa5b" data-file-name="app/page.tsx">JavaScript</span></span>
                <span className="bg-[#21262d] text-[#7ee787] px-3 py-1 rounded-full text-xs" data-unique-id="0da3b916-1709-40fe-96d8-46ced20a7e8e" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="48996b9f-5680-428a-a694-2d96468b3642" data-file-name="app/page.tsx">WebAssembly</span></span>
                <span className="bg-[#21262d] text-[#f97583] px-3 py-1 rounded-full text-xs" data-unique-id="eb31498b-d366-4d9a-9d36-ca1bccf750da" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="ebf78579-c2d3-42f5-ad17-7efe25a88bb1" data-file-name="app/page.tsx">Virtualization</span></span>
                <span className="bg-[#21262d] text-[#d2a8ff] px-3 py-1 rounded-full text-xs" data-unique-id="9219f719-b3e1-4951-a215-9a617b162e33" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="ca51b890-cb02-4b09-a0d9-91f732800262" data-file-name="app/page.tsx">Privacy</span></span>
              </div>
              <a href="https://github.com/browser-vm" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#58a6ff] hover:text-[#79c0ff] transition w-fit" data-unique-id="1e616a25-be8b-40a5-b096-4b042c1cea8d" data-file-name="app/page.tsx">
                <Github size={16} />
                <span data-unique-id="afc83950-e1e5-447f-a172-b92c0a99d983" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="45d14d0e-1187-4bd8-a4b6-f7a7ed0c2f2e" data-file-name="app/page.tsx">View on GitHub</span></span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Certificates Section */}
      <section id="certificates" className="container mx-auto py-16 px-4" data-unique-id="9bf6fcea-4386-4ae9-aaf2-f8fe1ea279c2" data-file-name="app/page.tsx">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={fadeIn} transition={{
        duration: 0.6
      }} data-unique-id="de7b813a-953a-46b5-b81e-391b83d5b823" data-file-name="app/page.tsx">
          <h2 className="text-3xl font-bold mb-8 flex items-center" data-unique-id="573bc71b-060f-48a4-a89e-7a74ddcb7b11" data-file-name="app/page.tsx">
            <span className="text-[#58a6ff]" data-unique-id="91ba5d9c-696d-4ab0-9db7-15f005173570" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="7231adf6-e560-4e5a-b207-2e9bacdc8183" data-file-name="app/page.tsx">#</span></span><span className="editable-text" data-unique-id="829113ad-64b1-4621-bf51-684e3d8f7036" data-file-name="app/page.tsx"> Certificates
            </span><span className="ml-2 h-px bg-[#30363d] flex-1" data-unique-id="0d2e3fd3-9af3-4696-88ab-b35ae2843f25" data-file-name="app/page.tsx"></span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-unique-id="fb5e48e8-2c2c-42af-906d-0929e0394abf" data-file-name="app/page.tsx">
            <CertificateCard title="Adobe Certified Expert" subtitle="Adobe Photoshop" description="Industry-recognized validation of skill in Adobe Photoshop CC, including design elements preparation, image manipulation and publishing." link="https://www.credly.com/badges/b4d0115c-2983-4ecf-a359-7b892d52b7be/public_url" color="#31A8FF" />
            <CertificateCard title="Adobe Certified Professional" subtitle="Graphic Design & Illustration Using Adobe Illustrator" description="Industry-recognized validation of expertise in Adobe Illustrator, including key industry concepts and the program's interface." link="https://www.credly.com/badges/f81129b2-5a88-44f4-96e3-a062b863a14f/public_url" color="#FF9A00" />
            <CertificateCard title="Adobe Certified Professional" subtitle="Visual Design" description="Industry-recognized certification validating expertise in creating and designing holistic digital aesthetics using Adobe Creative Cloud." link="https://www.credly.com/badges/dbc1837b-2c93-454e-8174-b715ff1a371a/public_url" color="#CC0000" />
          </div>
        </motion.div>
      </section>
      
      {/* Awards Section */}
      <section id="awards" className="bg-[#161b22] py-16" data-unique-id="65c494f7-ac68-4bd8-9dae-49807c284d07" data-file-name="app/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="8df928a0-14db-4050-a357-819dc63de535" data-file-name="app/page.tsx">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeIn} transition={{
          duration: 0.6
        }} data-unique-id="99827507-946e-49be-9868-65f408fc19fb" data-file-name="app/page.tsx">
            <h2 className="text-3xl font-bold mb-8 flex items-center" data-unique-id="5fea7f83-0206-4f46-ac83-b2c18c7208da" data-file-name="app/page.tsx">
              <span className="text-[#58a6ff]" data-unique-id="76095903-73fa-4361-9f3f-c2d1d919c83d" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="c1ae5ab1-abb3-4a2e-9851-35753c8117da" data-file-name="app/page.tsx">#</span></span><span className="editable-text" data-unique-id="bd436071-433a-430b-bb76-28ca2e096443" data-file-name="app/page.tsx"> Awards
              </span><span className="ml-2 h-px bg-[#30363d] flex-1" data-unique-id="d302acda-305d-48db-912d-110baf931f77" data-file-name="app/page.tsx"></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="82f5c1fe-dc69-469b-904d-9649d2272986" data-file-name="app/page.tsx">
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
      <section id="contact" className="container mx-auto py-16 px-4" data-unique-id="545766f6-8bc7-41d7-b594-46a0a2f17bb0" data-file-name="app/page.tsx">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={fadeIn} transition={{
        duration: 0.6
      }} data-unique-id="070c8b94-12de-4680-9df9-0f4be86e682d" data-file-name="app/page.tsx">
          <h2 className="text-3xl font-bold mb-8 flex items-center" data-unique-id="82b9f163-b0fb-4c19-9429-09d145ed05a5" data-file-name="app/page.tsx">
            <span className="text-[#58a6ff]" data-unique-id="59cf1824-1682-48b0-8add-3bf3c78041fa" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="4947dc08-67b4-4649-a6ae-46a4e94ae27c" data-file-name="app/page.tsx">#</span></span><span className="editable-text" data-unique-id="69cc30e7-11ab-469a-b148-422bc585a5ed" data-file-name="app/page.tsx"> Contact
            </span><span className="ml-2 h-px bg-[#30363d] flex-1" data-unique-id="3d5fef63-0d24-4717-81db-e0f0557be8f2" data-file-name="app/page.tsx"></span>
          </h2>
          
          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-8" data-unique-id="9b611479-c043-4642-bdc1-40e1e62ee97a" data-file-name="app/page.tsx">
            <div className="text-center mb-8" data-unique-id="df0acd40-ab51-491d-a10b-bfe91d52b6e5" data-file-name="app/page.tsx">
              <p className="text-xl text-[#8b949e] mb-4" data-unique-id="9c97dfba-095f-4b9e-a7f7-8063ae3c51e4" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="c3b723bf-c3b6-4cb4-a7d9-44d7433333a0" data-file-name="app/page.tsx">Get in touch</span></p>
              <h3 className="text-3xl font-bold text-[#e6edf3]" data-unique-id="d3cddcd8-3dde-4396-b30b-6ee5d9e76623" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="f7cfbdf8-353b-419b-985c-79bc55188d93" data-file-name="app/page.tsx">Let's Connect</span></h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-unique-id="f73f76be-4b0d-48b4-b52c-38d2dbae18d0" data-file-name="app/page.tsx">
              <div data-unique-id="a18e662c-88fc-4bf6-862b-798320ad3378" data-file-name="app/page.tsx">
                <p className="text-[#8b949e] mb-6" data-unique-id="f3d747ef-1d5d-4dc5-9bb7-68f451ca2c50" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="6a720a8a-5674-4a11-a188-f7583b8dd4af" data-file-name="app/page.tsx">
                  I'm always interested in hearing about new projects, opportunities, or just connecting with fellow creators.
                </span></p>
                <div className="space-y-4" data-unique-id="5f04b803-6ec0-4470-ad80-1c9520cbfbac" data-file-name="app/page.tsx">
                  <div className="flex items-center" data-unique-id="0901cdbf-731a-4b9d-aac3-7eb6400edaa7" data-file-name="app/page.tsx">
                    <div className="w-10 h-10 bg-[#21262d] rounded-full flex items-center justify-center mr-4" data-unique-id="7476992f-d5c8-4efd-97f8-961ded6d3881" data-file-name="app/page.tsx">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#58a6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-unique-id="69214b2f-048e-4d99-8ac2-d613a261a4b4" data-file-name="app/page.tsx"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div data-unique-id="7dd1aae3-693f-4dac-b285-4b29778c700b" data-file-name="app/page.tsx">
                      <p className="text-sm text-[#8b949e]" data-unique-id="ac1c11d6-c2e9-4a82-8340-e3ea79b963c3" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="b7834f93-b29c-4170-ab9f-27dce8c6992a" data-file-name="app/page.tsx">Email</span></p>
                      <a href="mailto:apscott@students.wcpss.net" className="text-[#58a6ff] hover:underline" data-unique-id="b304e906-7e55-4b6e-b7fd-c4ff416886dd" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="05095753-0a8d-4663-8f78-704b6fa33854" data-file-name="app/page.tsx">apscott@students.wcpss.net</span></a>
                    </div>
                  </div>
                  <div className="flex items-center" data-unique-id="c969191b-c82a-4185-89a5-f8d3d3b0b449" data-file-name="app/page.tsx">
                    <div className="w-10 h-10 bg-[#21262d] rounded-full flex items-center justify-center mr-4" data-unique-id="e0eded86-a663-43ae-8285-3a1da358ab77" data-file-name="app/page.tsx">
                      <Github size={20} className="text-[#58a6ff]" />
                    </div>
                    <div data-unique-id="3f65500b-09f3-49ad-8226-7c3bff7b623a" data-file-name="app/page.tsx">
                      <p className="text-sm text-[#8b949e]" data-unique-id="1f801425-6eeb-4ddf-a2c4-9c0d8448e2a1" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="24586223-f101-46ff-8a4e-4c43d95ea3ee" data-file-name="app/page.tsx">GitHub</span></p>
                      <a href="https://github.com/browser-vm" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline" data-unique-id="0f20bcc8-2eec-4588-9897-14caa9e77c87" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="3f54921f-0530-4b7d-a70d-209a728b68e6" data-file-name="app/page.tsx">browser-vm</span></a>
                    </div>
                  </div>
                  <div className="flex items-center" data-unique-id="5c4ac3b8-9649-44ae-b5a9-71416b175366" data-file-name="app/page.tsx">
                    <div className="w-10 h-10 bg-[#21262d] rounded-full flex items-center justify-center mr-4" data-unique-id="3cf2a5e1-4b82-477b-9e5f-8f4a725f7f8e" data-file-name="app/page.tsx">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#58a6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-unique-id="96167a62-cfe3-4027-b459-f3738c76bb38" data-file-name="app/page.tsx"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </div>
                    <div data-unique-id="b015d733-b43f-435c-9a2b-b43941bc83bc" data-file-name="app/page.tsx">
                      <p className="text-sm text-[#8b949e]" data-unique-id="eccc6ae0-27b6-40fc-b8e0-41ec8dc92843" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="59417cc1-3ccb-4b59-8bc3-8cd8abbf7277" data-file-name="app/page.tsx">BandLab</span></p>
                      <a href="https://bandlab.com/officialnameless" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline" data-unique-id="a36389d6-307f-4801-a7c0-c9b7aaf2a19a" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="3392b433-9309-4260-80aa-a588e89d96ba" data-file-name="app/page.tsx">officialnameless</span></a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d]" data-unique-id="b5dacb76-c5a3-4ec2-bc36-e856a1ea0a49" data-file-name="app/page.tsx">
                <div className="flex items-center mb-4 bg-[#0d1117] rounded-md px-3 py-2" data-unique-id="e5e94910-11e7-4143-b46b-505c689a5bfc" data-file-name="app/page.tsx">
                  <div className="flex space-x-2" data-unique-id="c1799142-c07c-43c8-9a07-bd01bcd59207" data-file-name="app/page.tsx">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" data-unique-id="fcce8abb-5637-457d-9cb4-35e44c3b3fbc" data-file-name="app/page.tsx"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" data-unique-id="957eba4f-c6bf-4f54-978f-9718e42cf4de" data-file-name="app/page.tsx"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" data-unique-id="5c6d8dab-4aad-47ca-8e49-14367b47b067" data-file-name="app/page.tsx"></div>
                  </div>
                  <div className="ml-4 text-xs text-[#8b949e]" data-unique-id="a70b1d11-e4dd-449c-83e5-e9e5bf29c1cd" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="8b6e609c-8af9-4146-8b78-b65432ac9582" data-file-name="app/page.tsx">~/contact/message.sh</span></div>
                </div>
                <div className="font-mono text-sm text-[#e6edf3] space-y-2" data-unique-id="40578367-9ebb-4b18-ba45-cfda521162cb" data-file-name="app/page.tsx">
                  <div data-unique-id="22526a40-e67e-4a66-8155-4c3ea83e230b" data-file-name="app/page.tsx"><span className="text-[#58a6ff]" data-unique-id="c21b7d26-9ca8-47ce-8946-7f06c9a305e3" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="55b4fb66-ed3b-4567-b314-1dc3113e7ebd" data-file-name="app/page.tsx">$</span></span><span className="editable-text" data-unique-id="5b3a5acb-e9ea-4c2b-af72-bd2b214c25b2" data-file-name="app/page.tsx"> echo "I'm excited to hear from you!"</span></div>
                  <div className="pl-4" data-unique-id="844c7e8b-f8c6-48ad-a899-842f7e196f60" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="5c0fd97e-9425-48de-bdf4-559f8ddeefbb" data-file-name="app/page.tsx">I'm excited to hear from you!</span></div>
                  <div data-unique-id="3057e16c-0690-4a1c-8cbe-1918981e7445" data-file-name="app/page.tsx"><span className="text-[#58a6ff]" data-unique-id="a1048b94-3172-45bc-91b1-978329812e60" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="96f51895-2ae3-425a-bc7e-cc382bf97a10" data-file-name="app/page.tsx">$</span></span><span className="editable-text" data-unique-id="31673a04-ca3f-430f-a424-53d61ecc091f" data-file-name="app/page.tsx"> cat refs.txt</span></div>
                  <div className="pl-4 text-sm" data-unique-id="b584686a-8719-4424-8b10-76bfc0103f86" data-file-name="app/page.tsx">
                    <div data-unique-id="464f5350-203c-41a7-af4d-fb82647dae9a" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="2b9b1d31-2d01-4b67-ad00-2b2ec1491614" data-file-name="app/page.tsx">Renee Todd, Director of Bands, Ligon Middle School</span></div>
                    <div className="text-[#8b949e]" data-unique-id="129cbad7-31a6-4a3d-83c2-c2ffb79c4c63" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="2446da21-359d-4cf0-9c0c-c1a1ab43afda" data-file-name="app/page.tsx">rtodd1@wcpss.net</span></div>
                    <div className="mt-2" data-unique-id="5f85ac38-e6bd-447b-bc4d-b3baa7d4eb7b" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="0e6802f9-eed9-47e7-98c8-942dd2f5070c" data-file-name="app/page.tsx">Gary Duvall, Principal, Holly Springs High School</span></div>
                    <div className="text-[#8b949e]" data-unique-id="6abc224b-1337-480d-9391-d21e3e885390" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="1236f2d3-283e-4ae0-83c0-5776d625405f" data-file-name="app/page.tsx">gduvall@wcpss.net</span></div>
                    <div className="mt-2" data-unique-id="a731c57a-1247-4150-908a-afbd27bf223f" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="8f70c406-5d5e-476e-9ab3-f2c60d07b31b" data-file-name="app/page.tsx">Dr. Jacqueline Jordan, Principal, Enloe High School</span></div>
                    <div className="text-[#8b949e]" data-unique-id="68090e0c-0909-4ee4-b6d6-303d21f173a5" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="5b64ab38-348f-4c67-8ba7-50f1b2d8cdd4" data-file-name="app/page.tsx">jjordan@wcpss.net</span></div>
                  </div>
                  <div className="animate-pulse" data-unique-id="523806ad-878b-45e1-8822-caabd8634a54" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="6869df1a-7713-401c-9a60-e9860bbfde89" data-file-name="app/page.tsx">█</span></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#0d1117] border-t border-[#30363d] py-8" data-unique-id="04faf7d9-1b95-4c5f-b75d-ed3b0125966d" data-file-name="app/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="ba51bcdb-c417-4f05-8585-e19e09a75b5c" data-file-name="app/page.tsx">
          <div className="flex flex-col lg:flex-row justify-between items-center" data-unique-id="3d3db4af-806f-41b6-809c-a6759766538a" data-file-name="app/page.tsx">
            <div className="text-[#58a6ff] font-mono mb-4 lg:mb-0" data-unique-id="9d2f563c-6929-4313-8f66-a5910bd704cb" data-file-name="app/page.tsx">
              <span className="text-[#7ee787]" data-unique-id="09da9acf-b93c-4dd1-8112-087e492cfbf5" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="07de1e57-cf94-4120-8cb3-4db75f94a40e" data-file-name="app/page.tsx">alex</span></span><span className="editable-text" data-unique-id="8b76d1c0-6c5c-4461-8001-e94cf00a28da" data-file-name="app/page.tsx">@</span><span className="text-[#f97583]" data-unique-id="a8ded249-12d6-49d6-ae43-c139a39f4061" data-file-name="app/page.tsx"><span className="editable-text" data-unique-id="5dea133f-be14-4500-b101-e420d841d578" data-file-name="app/page.tsx">portfolio</span></span><span className="editable-text" data-unique-id="c821f052-ab8d-4d98-987a-e366068ca8bf" data-file-name="app/page.tsx">:~$ exit
            </span></div>
            <div className="text-[#8b949e] text-sm" data-unique-id="c3e3ea9d-1570-43d5-8822-bb8d22b95fa6" data-file-name="app/page.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="6bc278cf-d4fc-4055-9056-798ec6bd5a08" data-file-name="app/page.tsx">
              &copy; </span>{new Date().getFullYear()}<span className="editable-text" data-unique-id="c589d32e-01e8-4d15-b988-f6c2d5c0dee6" data-file-name="app/page.tsx"> Alex Scott. Built with Next.js and TailwindCSS.
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
  }} className="bg-[#0d1117] border border-[#30363d] rounded-lg p-5 hover:border-[#58a6ff] transition" data-unique-id="5d290cdc-55b7-42c5-a424-3d4ea5ae5f71" data-file-name="app/page.tsx">
      <div className="mb-4" style={{
      color
    }} data-unique-id="673a0ea3-aaf5-431e-a1bd-3cb4c5af3016" data-file-name="app/page.tsx" data-dynamic-text="true">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-1" data-unique-id="22cfb6c3-ebee-4114-8061-184996c47e17" data-file-name="app/page.tsx" data-dynamic-text="true">{title}</h3>
      <p className="text-[#8b949e] text-sm" data-unique-id="bf8cbf4d-0d2d-4c56-ba66-72fa9cc6e0e8" data-file-name="app/page.tsx" data-dynamic-text="true">{level}</p>
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
  }} className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition" data-unique-id="6a8c74f8-c005-4fbc-a317-40db1f24a527" data-file-name="app/page.tsx">
      <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{
      backgroundColor: color
    }} data-unique-id="f8b8856b-8b55-471e-aa7e-7faab51f955e" data-file-name="app/page.tsx">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-unique-id="b91beacc-c8e5-4591-9157-f16bad12e369" data-file-name="app/page.tsx"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
      </div>
      <h3 className="text-lg font-semibold" data-unique-id="139602f2-9aba-4722-a8a9-6fa2ef1ff553" data-file-name="app/page.tsx" data-dynamic-text="true">{title}</h3>
      <p className="text-[#7ee787] mb-2" data-unique-id="49e4a45c-0efc-4233-b09f-9b966710b168" data-file-name="app/page.tsx" data-dynamic-text="true">{subtitle}</p>
      <p className="text-[#8b949e] text-sm mb-4" data-unique-id="466763ba-0320-4740-998e-7d71c4992820" data-file-name="app/page.tsx" data-dynamic-text="true">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline text-sm flex items-center" data-unique-id="593d40a9-7cd9-4284-9503-885479a3550e" data-file-name="app/page.tsx">
        <ExternalLink size={14} className="mr-1" /><span className="editable-text" data-unique-id="1eca56bd-4f68-4f85-9936-28b935e8ee03" data-file-name="app/page.tsx"> View Certificate
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
  }} className="bg-[#0d1117] border border-[#30363d] rounded-lg p-5 hover:border-[#58a6ff] transition" data-unique-id="e055e429-1fcd-49a1-ac98-7bcfcc397a81" data-file-name="app/page.tsx">
      <div className="flex items-center mb-3" data-unique-id="9d656058-7672-4ea7-8e91-69c561e42af0" data-file-name="app/page.tsx">
        <div className="bg-[#21262d] p-2 rounded-full mr-3 text-[#f97583]" data-unique-id="84e3f1a4-c125-4e86-a980-655eab471f8d" data-file-name="app/page.tsx" data-dynamic-text="true">
          {icon}
        </div>
        <div data-unique-id="7af3b58d-e5fa-475a-a3fe-36c2819c2af0" data-file-name="app/page.tsx" data-dynamic-text="true">
          <h3 className="font-semibold" data-unique-id="97124aaf-a459-4e0c-a47a-f1e2945de68c" data-file-name="app/page.tsx" data-dynamic-text="true">{title}</h3>
          {subtitle && <p className="text-[#7ee787] text-sm" data-unique-id="95ccae3e-3527-42d3-bea0-84f9633ac63f" data-file-name="app/page.tsx" data-dynamic-text="true">{subtitle}</p>}
        </div>
      </div>
      <div className="pl-12" data-unique-id="0adef3c3-047f-4b51-ab32-09853de512c5" data-file-name="app/page.tsx" data-dynamic-text="true">
        <p className="text-[#8b949e] text-sm" data-unique-id="d72f0d9a-dc0f-4bdd-956d-f57fe8c980c1" data-file-name="app/page.tsx" data-dynamic-text="true">{organization}</p>
        {year !== "N/A" && <p className="text-[#8b949e] text-xs" data-unique-id="32ae4748-6134-43ab-b8e6-9ed5e24a61d6" data-file-name="app/page.tsx" data-dynamic-text="true">{year}</p>}
      </div>
    </motion.div>;
}