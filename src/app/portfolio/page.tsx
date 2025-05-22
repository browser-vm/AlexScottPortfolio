'use client';

import { useState } from 'react';
import { motion } from '@/components/client-wrappers';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, X, Maximize, ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { PortfolioItem } from '@/types/portfolio';
const portfolioItems: PortfolioItem[] = [{
  id: 1,
  title: "A Snowy Season",
  category: "Design",
  imgSrc: "https://pre-built-images.s3.amazonaws.com/webapp-uploads/6c8e0c14bda9b6c864bd243420e4c9db.jpg",
  description: "Winter photography composition featuring playful golden retrievers enjoying the snow. This seasonal design project captures the joy and energy of dogs in a snowy landscape."
}, {
  id: 2,
  title: "The Beacon of Freedom",
  category: "Design",
  imgSrc: "https://pre-built-images.s3.amazonaws.com/webapp-uploads/4e1d8f436d86fd16a807c164dd689a21.png",
  description: "Event invitation design for the North Carolina Freedom Park opening ceremony. Features a gold and black color scheme with historical imagery celebrating freedom and civil rights."
}, {
  id: 3,
  title: "Audio Lowpass Filter",
  category: "Code",
  imgSrc: "https://pre-built-images.s3.amazonaws.com/webapp-uploads/03bd5c1588c3a213f8f2df3ed0a5c857.png",
  description: "A browser-based audio processing tool that applies customizable lowpass filters to audio files. Built with Web Audio API and React."
}, {
  id: 4,
  title: "Driftix Indoor Racing Ad",
  category: "Design",
  imgSrc: "https://pre-built-images.s3.amazonaws.com/webapp-uploads/651e2677a2dd5276b569959fc72a3b28.png",
  description: "Promotional advertisement design for Driftix Indoor Racing featuring 80% OFF promotion. Captures the thrill of indoor drift racing with bold typography and dynamic imagery."
}, {
  id: 5,
  title: "Time for Change",
  category: "Art",
  imgSrc: "https://pre-built-images.s3.amazonaws.com/webapp-uploads/602301d4a6a5c3288c59782371c36a87.jpg",
  description: "Circular gradient sticker design featuring a heart motif and inspirational text. Created as part of a series promoting positive social change through visual art."
}, {
  id: 6,
  title: "Aquatic Feline",
  category: "Art",
  imgSrc: "https://pre-built-images.s3.amazonaws.com/webapp-uploads/db96e8207921582e1f5b5e605c824177.jpg",
  description: "Digital art composition featuring a surreal swimming cat hybrid. Part of a series exploring the humorous intersection of animal portraits and sports photography."
}, {
  id: 7,
  title: "Simple Tank",
  category: "3D",
  imgSrc: "https://pre-built-images.s3.amazonaws.com/webapp-uploads/3216d9210840844669423952ba73cda9.png",
  description: "A simple, low-poly 3D model of a tank created for a school assignment. This project demonstrates foundational 3D modeling techniques with clean geometry and minimal texturing."
}, {
  id: 8,
  title: "Multi-Texture Showcase",
  category: "3D",
  imgSrc: "https://pre-built-images.s3.amazonaws.com/webapp-uploads/e2c36236090e89ddb67074a20c30b6fe.png",
  description: "A 3D model created for an assignment that showcases advanced texturing techniques. This submission demonstrates the application of multiple material types and texture mapping methods in a single composition."
}, {
  id: 9,
  title: "Basic Desk",
  category: "3D",
  imgSrc: "https://pre-built-images.s3.amazonaws.com/webapp-uploads/f044dbe9697cf2cb5d4ed4919d0ed791.png",
  description: "A simple, no-texture 3D desk model created for a school assignment. This version demonstrates fundamental modeling techniques, while an advanced version was officially submitted for the assignment."
}];
export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<PortfolioItem | null>(null);
  const categories = ["All", ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  const filteredItems = selectedFilter === "All" ? portfolioItems : portfolioItems.filter(item => item.category === selectedFilter);
  const openModal = (item: PortfolioItem) => {
    setCurrentItem(item);
    setIsModalOpen(true);

    // Prevent body scrolling when modal is open
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);

    // Re-enable body scrolling
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  };
  const nextItem = () => {
    if (!currentItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === currentItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setCurrentItem(filteredItems[nextIndex]);
  };
  const prevItem = () => {
    if (!currentItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === currentItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentItem(filteredItems[prevIndex]);
  };
  return <div className="min-h-screen bg-[#0d1117]" data-unique-id="ee91ec62-1347-4a84-9561-05dc283c028a" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">
      {/* Header */}
      <header className="py-8 border-b border-[#30363d]" data-unique-id="08740d92-967a-439f-b6b6-8df38924bc0e" data-file-name="app/portfolio/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="5384a5e7-61c7-4bfd-aa18-89171fb83d4a" data-file-name="app/portfolio/page.tsx">
          <div className="flex justify-between items-center" data-unique-id="0aedc515-acf0-4433-8401-94c371163f9b" data-file-name="app/portfolio/page.tsx">
            <Link href="/" className="flex items-center text-[#58a6ff] hover:text-[#58a6ff] hover:bg-opacity-90 transition" data-unique-id="2e591700-eb49-485e-99fd-0b4fcb5d970c" data-file-name="app/portfolio/page.tsx">
              <ArrowLeft className="mr-2" size={20} />
              <span data-unique-id="529ff8d9-e236-42df-b666-f6bfe55188ae" data-file-name="app/portfolio/page.tsx"><span className="editable-text" data-unique-id="40dd40ec-91b3-4b84-bdb4-c751345a23cd" data-file-name="app/portfolio/page.tsx">Back to Home</span></span>
            </Link>
            <div className="flex flex-col items-end" data-unique-id="ad1f864e-cd8c-4fbf-bb86-3bf936a84430" data-file-name="app/portfolio/page.tsx">
              <h1 className="text-3xl font-bold text-[#e6edf3]" data-unique-id="248cb4f0-7478-4faa-8697-1cb66bd8c22f" data-file-name="app/portfolio/page.tsx"><span className="editable-text" data-unique-id="dafb495b-8bc5-42b8-aade-c81e2506a637" data-file-name="app/portfolio/page.tsx">
                Creative </span><span className="text-[#7ee787]" data-unique-id="40da4c13-2106-466b-8c3a-241f3424afb1" data-file-name="app/portfolio/page.tsx"><span className="editable-text" data-unique-id="89dae2af-049b-40a7-8b70-149503be1f4e" data-file-name="app/portfolio/page.tsx">Portfolio</span></span>
              </h1>
              <a href="https://drive.google.com/file/d/1agH_p2ltRqakMZmY7LRfSeGGl-BAIPMB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center text-[#d2a8ff] hover:text-[#d2a8ff] hover:bg-opacity-90 transition text-sm" data-unique-id="b76371a0-79a1-481f-99eb-d07c37edcede" data-file-name="app/portfolio/page.tsx">
                <FileText className="mr-1" size={14} />
                <span data-unique-id="f7f22e0d-2f28-4a8d-adf7-2371015f385b" data-file-name="app/portfolio/page.tsx"><span className="editable-text" data-unique-id="0cfed925-2528-4ec4-8cbf-f7c5fcd34716" data-file-name="app/portfolio/page.tsx">View Resume</span></span>
              </a>
            </div>
          </div>
        </div>
      </header>
      
      {/* Filters */}
      <section className="py-8" data-unique-id="bdd7acf3-bacb-4429-af6b-a8c737d85534" data-file-name="app/portfolio/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="1f114e2f-f5b2-48b3-80df-c656fe8f9ab9" data-file-name="app/portfolio/page.tsx">
          <div className="flex flex-wrap justify-center gap-4 mb-8" data-unique-id="eef12eb6-e743-42d2-8ef8-27ef96c335d6" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">
            {categories.map(category => <button key={category} onClick={() => setSelectedFilter(category)} className={`px-4 py-2 rounded-md transition-all ${selectedFilter === category ? 'bg-[#58a6ff] text-[#0d1117]' : 'bg-[#21262d] text-[#e6edf3] hover:bg-[#30363d]'}`} data-is-mapped="true" data-unique-id="49af788f-01db-4cb4-a36d-efb0a2205b6f" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">
                {category}
              </button>)}
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="pb-16" data-unique-id="c9757d50-e963-493d-bc90-c6e19f4df6fc" data-file-name="app/portfolio/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="7c93f780-73c6-41af-ab98-3e8f5114f0e0" data-file-name="app/portfolio/page.tsx">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="b2a888a8-db8a-470d-83d1-97bf8b95bb15" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">
            {filteredItems.map(item => <motion.div key={item.id} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} whileHover={{
            scale: 1.02
          }} className="bg-[#161b22] rounded-lg overflow-hidden cursor-pointer" onClick={() => item.link ? window.location.href = item.link : openModal(item)} data-is-mapped="true" data-unique-id="822575b8-d925-44ef-8bcb-b580f4732d89" data-file-name="app/portfolio/page.tsx">
                <div className="relative h-64 overflow-hidden" data-is-mapped="true" data-unique-id="b3c08a2a-a2a4-4f83-9771-6ded991147c8" data-file-name="app/portfolio/page.tsx">
                  <Image src={item.imgSrc} alt={item.title} fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" data-is-mapped="true" data-unique-id="b8eb8429-0594-4e11-9cad-0a6e9dabd463" data-file-name="app/portfolio/page.tsx" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent opacity-70" data-is-mapped="true" data-unique-id="0af22538-a85c-495c-93e6-622ff7407f2f" data-file-name="app/portfolio/page.tsx"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4" data-is-mapped="true" data-unique-id="899bab5e-a337-4c9a-99d7-04afec2a9973" data-file-name="app/portfolio/page.tsx">
                    <span className="inline-block px-3 py-1 bg-[#0d1117] bg-opacity-80 rounded-full text-xs text-[#7ee787] mb-2" data-is-mapped="true" data-unique-id="cd8fc424-e327-4ad9-8e82-6f014e532f78" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-[#e6edf3]" data-is-mapped="true" data-unique-id="4103b675-d0c6-441f-8d3b-6d50a3d60520" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">{item.title}</h3>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>
      
      {/* Modal */}
      {isModalOpen && currentItem && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1117] bg-opacity-95 p-4" data-unique-id="5674ee76-b816-4a77-a05b-a644b439ff08" data-file-name="app/portfolio/page.tsx">
          <div className="absolute inset-0 z-0" onClick={closeModal} data-unique-id="ca1b85cd-4400-4411-a277-e1bca8b15460" data-file-name="app/portfolio/page.tsx"></div>
          
          <div className="relative z-10 max-w-4xl w-full bg-[#161b22] rounded-lg overflow-hidden" data-unique-id="cd30f06a-ddb6-4985-b862-6324c797ec2b" data-file-name="app/portfolio/page.tsx">
            <div className="flex justify-between items-center p-4 border-b border-[#30363d]" data-unique-id="6fd022fa-5206-4a83-a385-8aaf7da1dc98" data-file-name="app/portfolio/page.tsx">
              <h3 className="text-xl font-bold text-[#e6edf3]" data-unique-id="295414b6-c71d-40cf-88bc-6967d7aa327d" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">{currentItem.title}</h3>
              <div className="flex items-center space-x-2" data-unique-id="1c1e5ceb-2ed4-473c-bfdf-2d0ef9606c8e" data-file-name="app/portfolio/page.tsx">
                <button onClick={closeModal} className="p-2 rounded-full hover:bg-[#21262d] transition" data-unique-id="6cb09b77-b0b5-4ea5-9607-00143a43c485" data-file-name="app/portfolio/page.tsx">
                  <X size={20} className="text-[#8b949e]" />
                </button>
              </div>
            </div>
            
            <div className="p-6" data-unique-id="b7b643ce-6fb4-41fa-be19-dc37aac72714" data-file-name="app/portfolio/page.tsx">
              <div className="relative h-96 mb-6" data-unique-id="160ef70d-1bf0-48cc-8193-b3f80c2d31fe" data-file-name="app/portfolio/page.tsx">
                <Image src={currentItem.imgSrc} alt={currentItem.title} fill className="object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw" data-unique-id="0df3478c-eda8-4485-996e-200e230b096c" data-file-name="app/portfolio/page.tsx" />
              </div>
              
              <div className="space-y-4" data-unique-id="24738253-20b3-443d-88ef-03e9aca001ca" data-file-name="app/portfolio/page.tsx">
                <div data-unique-id="ef1f7871-5b8b-4cb6-b2b9-1655b1659042" data-file-name="app/portfolio/page.tsx">
                  <span className="inline-block px-3 py-1 bg-[#21262d] rounded-full text-xs text-[#7ee787] mb-2" data-unique-id="c33d797f-0711-4974-bb48-c5bcbba5ac95" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">
                    {currentItem.category}
                  </span>
                </div>
                <p className="text-[#8b949e]" data-unique-id="38d5dc7a-0893-4139-aaef-2ce6e2e2bc3e" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">{currentItem.description}</p>
              </div>
            </div>
            
            <div className="flex justify-between p-4 border-t border-[#30363d]" data-unique-id="a757d13f-f968-4789-a59b-599304c34e7c" data-file-name="app/portfolio/page.tsx">
              <button onClick={prevItem} className="flex items-center px-4 py-2 bg-[#21262d] hover:bg-[#30363d] rounded-md transition" data-unique-id="7917acf9-75e7-42a6-a6d4-3ad8877cd363" data-file-name="app/portfolio/page.tsx">
                <ChevronLeft size={20} className="mr-1" /><span className="editable-text" data-unique-id="ae897c81-ed65-4baa-b8ee-64bb84e9c610" data-file-name="app/portfolio/page.tsx">
                Previous
              </span></button>
              <button onClick={nextItem} className="flex items-center px-4 py-2 bg-[#21262d] hover:bg-[#30363d] rounded-md transition" data-unique-id="4f7c4143-7fff-4c1a-8783-33c154cb5659" data-file-name="app/portfolio/page.tsx"><span className="editable-text" data-unique-id="654f204e-f4c4-4b7e-9967-8834b7c912c2" data-file-name="app/portfolio/page.tsx">
                Next
                </span><ChevronRight size={20} className="ml-1" />
              </button>
            </div>
          </div>
        </motion.div>}
    </div>;
}