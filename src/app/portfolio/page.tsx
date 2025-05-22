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
  return <div className="min-h-screen bg-[#0d1117]" data-unique-id="989abeba-9908-428e-bd5f-033192737ff3" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">
      {/* Header */}
      <header className="py-8 border-b border-[#30363d]" data-unique-id="df958532-9631-443f-adf4-67a597df4ec4" data-file-name="app/portfolio/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="f567f545-0543-4164-9823-4f3636dadb2d" data-file-name="app/portfolio/page.tsx">
          <div className="flex justify-between items-center" data-unique-id="8db9fdf3-5133-4a1a-8a91-2fb18676a982" data-file-name="app/portfolio/page.tsx">
            <Link href="/" className="flex items-center text-[#58a6ff] hover:text-[#58a6ff] hover:bg-opacity-90 transition" data-unique-id="1066ee16-a6b0-4901-bf04-8c92e0634ef9" data-file-name="app/portfolio/page.tsx">
              <ArrowLeft className="mr-2" size={20} />
              <span data-unique-id="82e22ca6-93a4-4b86-ac9b-8526212bcb5b" data-file-name="app/portfolio/page.tsx"><span className="editable-text" data-unique-id="b7d2b3cf-957e-4be5-a558-effd457e0057" data-file-name="app/portfolio/page.tsx">Back to Home</span></span>
            </Link>
            <div className="flex flex-col items-end" data-unique-id="c04bcc26-5d06-4502-b21e-fb65b1f73a80" data-file-name="app/portfolio/page.tsx">
              <h1 className="text-3xl font-bold text-[#e6edf3]" data-unique-id="567d25fe-1149-4b54-8479-d1c6337c4fc3" data-file-name="app/portfolio/page.tsx"><span className="editable-text" data-unique-id="c09ce2d8-5d21-4c08-ac7d-146738f2c840" data-file-name="app/portfolio/page.tsx">
                Creative </span><span className="text-[#7ee787]" data-unique-id="2036ded8-7d16-45f5-ab24-323748e377ab" data-file-name="app/portfolio/page.tsx"><span className="editable-text" data-unique-id="466d339b-1c86-47fc-9567-a8347f015ba6" data-file-name="app/portfolio/page.tsx">Portfolio</span></span>
              </h1>
              <a href="https://drive.google.com/file/d/1agH_p2ltRqakMZmY7LRfSeGGl-BAIPMB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center text-[#d2a8ff] hover:text-[#d2a8ff] hover:bg-opacity-90 transition text-sm" data-unique-id="af2cfc7d-1386-4ea8-99f9-1a968006cde5" data-file-name="app/portfolio/page.tsx">
                <FileText className="mr-1" size={14} />
                <span data-unique-id="fff91853-b878-44a8-91b7-9e9ed0a575e0" data-file-name="app/portfolio/page.tsx"><span className="editable-text" data-unique-id="12ca2945-b329-4317-b3c3-aee7d67f948a" data-file-name="app/portfolio/page.tsx">View Resume</span></span>
              </a>
            </div>
          </div>
        </div>
      </header>
      
      {/* Filters */}
      <section className="py-8" data-unique-id="8bf3fe28-1271-4693-9429-479661263efb" data-file-name="app/portfolio/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="f8c7f511-91ea-419c-bc65-bfff866c6490" data-file-name="app/portfolio/page.tsx">
          <div className="flex flex-wrap justify-center gap-4 mb-8" data-unique-id="e5670136-7e47-430a-a5ef-e8cfabf1c752" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">
            {categories.map(category => <button key={category} onClick={() => setSelectedFilter(category)} className={`px-4 py-2 rounded-md transition-all ${selectedFilter === category ? 'bg-[#58a6ff] text-[#0d1117]' : 'bg-[#21262d] text-[#e6edf3] hover:bg-[#30363d]'}`} data-is-mapped="true" data-unique-id="5cbe95a0-ea61-444b-8978-07e703583604" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">
                {category}
              </button>)}
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="pb-16" data-unique-id="d05a5300-d5e6-4563-9045-297d37718e74" data-file-name="app/portfolio/page.tsx">
        <div className="container mx-auto px-4" data-unique-id="16c6a81b-89cb-4e98-8b36-883a9ace11f0" data-file-name="app/portfolio/page.tsx">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="33c21352-5bd5-4d2d-a61e-697356bff2fd" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">
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
          }} className="bg-[#161b22] rounded-lg overflow-hidden cursor-pointer" onClick={() => item.link ? window.location.href = item.link : openModal(item)} data-is-mapped="true" data-unique-id="40c2c4a2-b130-4938-a549-b7e40050495e" data-file-name="app/portfolio/page.tsx">
                <div className="relative h-64 overflow-hidden" data-is-mapped="true" data-unique-id="dda50619-969f-44f8-aa4e-2f0dd238bf97" data-file-name="app/portfolio/page.tsx">
                  <Image src={item.imgSrc} alt={item.title} fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" data-is-mapped="true" data-unique-id="dc36777c-f84b-4e23-a807-2f9d66e17827" data-file-name="app/portfolio/page.tsx" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent opacity-70" data-is-mapped="true" data-unique-id="2038779d-86d1-4182-8fb7-b74bbbbf06bd" data-file-name="app/portfolio/page.tsx"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4" data-is-mapped="true" data-unique-id="3b1ea59f-4639-4151-b6a4-2932d0870554" data-file-name="app/portfolio/page.tsx">
                    <span className="inline-block px-3 py-1 bg-[#0d1117] bg-opacity-80 rounded-full text-xs text-[#7ee787] mb-2" data-is-mapped="true" data-unique-id="a2e1e3a5-45c2-42f3-9ce5-99bc78fc54ff" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-[#e6edf3]" data-is-mapped="true" data-unique-id="e369b415-ea24-4469-a78b-e13b65e5bc65" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">{item.title}</h3>
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
    }} className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1117] bg-opacity-95 p-4" data-unique-id="07e5285f-d00f-4755-af5e-c8e1a89d7399" data-file-name="app/portfolio/page.tsx">
          <div className="absolute inset-0 z-0" onClick={closeModal} data-unique-id="08f91fae-89fd-4d83-bd29-288c876933bd" data-file-name="app/portfolio/page.tsx"></div>
          
          <div className="relative z-10 max-w-4xl w-full bg-[#161b22] rounded-lg overflow-hidden" data-unique-id="9cf05723-da27-458d-b5e6-81450b60fb8e" data-file-name="app/portfolio/page.tsx">
            <div className="flex justify-between items-center p-4 border-b border-[#30363d]" data-unique-id="f20a5401-bc9b-4c20-815d-045388e96cd0" data-file-name="app/portfolio/page.tsx">
              <h3 className="text-xl font-bold text-[#e6edf3]" data-unique-id="4c7f5a32-ff1f-4189-8aa6-2ee9a2452263" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">{currentItem.title}</h3>
              <div className="flex items-center space-x-2" data-unique-id="7526b148-aa88-41a6-8035-a6136a50ca6c" data-file-name="app/portfolio/page.tsx">
                <button onClick={closeModal} className="p-2 rounded-full hover:bg-[#21262d] transition" data-unique-id="e4e1fbcc-2a2f-4a38-8df1-5d67c83694ce" data-file-name="app/portfolio/page.tsx">
                  <X size={20} className="text-[#8b949e]" />
                </button>
              </div>
            </div>
            
            <div className="p-6" data-unique-id="263e4230-801f-4a60-9f22-ef9419b12c74" data-file-name="app/portfolio/page.tsx">
              <div className="relative h-96 mb-6" data-unique-id="9e6a373b-ec1d-4fe0-a872-459ee60e2138" data-file-name="app/portfolio/page.tsx">
                <Image src={currentItem.imgSrc} alt={currentItem.title} fill className="object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw" data-unique-id="9fd3a529-4530-423e-9e31-0efa8a2c4a7f" data-file-name="app/portfolio/page.tsx" />
              </div>
              
              <div className="space-y-4" data-unique-id="2b0de75e-d915-4c85-9e69-a815ad931be7" data-file-name="app/portfolio/page.tsx">
                <div data-unique-id="911e5c9f-580c-4a95-afea-132b25d390d1" data-file-name="app/portfolio/page.tsx">
                  <span className="inline-block px-3 py-1 bg-[#21262d] rounded-full text-xs text-[#7ee787] mb-2" data-unique-id="9ab60cab-c4b9-411f-9216-dc6d5e48458e" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">
                    {currentItem.category}
                  </span>
                </div>
                <p className="text-[#8b949e]" data-unique-id="3f5d9880-687a-4173-afca-d92208e3b1ab" data-file-name="app/portfolio/page.tsx" data-dynamic-text="true">{currentItem.description}</p>
              </div>
            </div>
            
            <div className="flex justify-between p-4 border-t border-[#30363d]" data-unique-id="2624ad63-3334-4400-9b03-655fda56d006" data-file-name="app/portfolio/page.tsx">
              <button onClick={prevItem} className="flex items-center px-4 py-2 bg-[#21262d] hover:bg-[#30363d] rounded-md transition" data-unique-id="528b9798-6920-4798-b23e-221f13a82a33" data-file-name="app/portfolio/page.tsx">
                <ChevronLeft size={20} className="mr-1" /><span className="editable-text" data-unique-id="3fdbb04a-5c17-4b85-bbe1-96e2c2c1e25c" data-file-name="app/portfolio/page.tsx">
                Previous
              </span></button>
              <button onClick={nextItem} className="flex items-center px-4 py-2 bg-[#21262d] hover:bg-[#30363d] rounded-md transition" data-unique-id="f1b858df-e575-48da-9152-62f502486744" data-file-name="app/portfolio/page.tsx"><span className="editable-text" data-unique-id="e93b352b-fd5a-468c-a375-e54740af4952" data-file-name="app/portfolio/page.tsx">
                Next
                </span><ChevronRight size={20} className="ml-1" />
              </button>
            </div>
          </div>
        </motion.div>}
    </div>;
}