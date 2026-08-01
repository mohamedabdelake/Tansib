import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, MessageSquare, ExternalLink, Cpu, Shield, Zap, Music, Globe } from 'lucide-react';
import ScrollSequence from './components/ScrollSequence';

const projects = [
  {
    name: "Sonic Bot",
    desc: "Leading WhatsApp Multi-device Assistant & System Engine",
    icon: <Cpu className="w-8 h-8 text-neonBlue" />,
    status: "Active",
    tags: ["Node.js", "WhatsApp Web.js", "MongoDB"]
  },
  {
    name: "Yuki Bot",
    desc: "Interactive & Utility Bot for seamless everyday tasks",
    icon: <Zap className="w-8 h-8 text-neonBlue" />,
    status: "Active",
    tags: ["JavaScript", "APIs", "Automation"]
  },
  {
    name: "Alya Bot",
    desc: "Advanced AI Chat & Automation handling dynamic queries",
    icon: <Globe className="w-8 h-8 text-neonBlue" />,
    status: "Beta",
    tags: ["OpenAI", "Python", "NLP"]
  },
  {
    name: "Ruby Bot",
    desc: "Entertainment & Media Handler for groups and channels",
    icon: <Music className="w-8 h-8 text-neonBlue" />,
    status: "Active",
    tags: ["Media API", "FFmpeg", "Node.js"]
  },
  {
    name: "Kakashi Bot",
    desc: "Group Management & Security Bot ensuring safe communities",
    icon: <Shield className="w-8 h-8 text-neonBlue" />,
    status: "Active",
    tags: ["Security", "Moderation", "Express"]
  }
];

const TerminalComponent = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-100px" }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="glass-card rounded-xl overflow-hidden mt-12 w-full max-w-2xl mx-auto shadow-2xl shadow-black/50"
  >
    <div className="bg-[#0f172a]/90 px-4 py-2 border-b border-[#1e293b] flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
      <span className="ml-2 text-xs text-gray-400 font-mono">sonic-ide.js</span>
    </div>
    <div className="p-6 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto text-left bg-cyber/50">
      <div className="flex">
        <span className="text-gray-500 select-none mr-4">1</span>
        <code>
          <span className="text-purple-400">const</span> <span className="text-blue-400">me</span> <span className="text-white">=</span> <span className="text-green-400">("ˢᵒⁿⁱᶜ ᴰᵉᵛ 𒉭")</span><span className="text-white">;</span>
        </code>
      </div>
      <div className="flex">
        <span className="text-gray-500 select-none mr-4">2</span>
        <code>
          <span className="text-blue-400">console</span><span className="text-white">.</span><span className="text-yellow-200">log</span><span className="text-white">(</span><span className="text-green-400">"Welcome to Sonic Dev's Realm!"</span><span className="text-white">);</span>
        </code>
      </div>
      <div className="flex mt-2">
        <span className="text-gray-500 select-none mr-4">3</span>
        <code className="text-gray-400 animate-pulse">_</code>
      </div>
    </div>
  </motion.div>
);

function App() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Full-Stack Bot Developer & System Architect";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-transparent font-sans text-white">
      {/* Background Sequence fixed behind everything */}
      <ScrollSequence />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-card border-t-0 border-l-0 border-r-0 border-b border-neonBlue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <span className="text-xl md:text-2xl font-bold tracking-wider text-white neon-text">
                𝑺𝑶𝑵𝑰𝑪 𝑫𝑬𝑽⃢҉ ســونـيــڪ
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['About', 'Projects / Bots', 'Skills', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(' / ', '-')}`} className="text-gray-300 hover:text-neonBlue hover:neon-text transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with massive spacing to allow scrolling animation to breathe */}
      <main className="relative z-10 text-center">
        
        {/* Hero Section */}
        <section id="about" className="h-[150vh] flex flex-col justify-start items-center pt-32 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center max-w-4xl mt-[10vh]"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-neonBlue text-sm font-medium tracking-wide shadow-lg shadow-black/40">
              <Code className="w-4 h-4" /> Code ID: const me = ("ˢᵒⁿⁱᶜ ᴰᵉᵛ 𒉭");
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-neonBlue">
                {typedText}
              </span>
              <span className="animate-glow-pulse text-neonBlue">|</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light drop-shadow-lg">
              Passionate developer specializing in advanced WhatsApp bots, seamless automation, and highly-scalable system architectures. I transform complex ideas into elegant, autonomous solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#projects-bots" className="px-8 py-4 rounded-lg bg-neonBlue/10 border border-neonBlue text-neonBlue font-semibold hover:bg-neonBlue hover:text-cyber transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] flex items-center gap-2 backdrop-blur-md">
                <Terminal className="w-5 h-5" /> Explore Bots
              </a>
              <a href="https://wa.me/212698078610" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-lg glass-card text-white font-semibold hover:border-neonBlue transition-all duration-300 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-green-400" /> Contact via WhatsApp
              </a>
            </div>

            <TerminalComponent />
          </motion.div>
        </section>

        {/* Spacer to just show the background animating */}
        <div className="h-[100vh] w-full pointer-events-none"></div>

        {/* Projects / Bots Showcase */}
        <section id="projects-bots" className="min-h-[200vh] pt-32 pb-64 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-200px" }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 rounded-3xl shadow-2xl shadow-black/50"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 neon-text inline-block">Projects & Bots</h2>
            <p className="text-gray-300 mb-16 text-lg font-light">My primary arsenal of automated systems</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 group relative overflow-hidden flex flex-col h-full hover:border-neonBlue/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-neonBlue/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 ease-out"></div>
                  
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="p-3 rounded-xl bg-cyber/80 border border-neonBlue/30 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                      {project.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neonBlue transition-colors duration-300">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-md bg-[#1e293b]/80 text-gray-300 border border-[#334155]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-neonBlue/20 glass-card py-16 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white drop-shadow-md">Ready to automate your world?</h2>
          
          <a 
            href="https://wa.me/212698078610" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-600 hover:bg-green-500 text-white font-bold transition-all duration-300 shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:shadow-[0_0_30px_rgba(22,163,74,0.7)] hover:-translate-y-1 mb-12"
          >
            <MessageSquare className="w-6 h-6" />
            +212 698-078610
          </a>
          
          <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Sonic Dev. Built with passion & precision.
            </p>
            <div className="flex gap-4">
              <span className="text-gray-500 hover:text-neonBlue cursor-pointer transition-colors"><ExternalLink className="w-5 h-5"/></span>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;
