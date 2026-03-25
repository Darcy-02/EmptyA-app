import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] md:pl-0">
      <section className="relative overflow-hidden py-20 px-6 sm:px-12 lg:px-20">
        <div className="absolute inset-0 halftone-overlay opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-['Space_Grotesk'] font-black uppercase text-sm tracking-[0.3em] text-[#00e3fd] mb-4"
          >
            ABOUT US
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="font-['Space_Grotesk'] font-black uppercase text-5xl sm:text-7xl tracking-tighter italic text-[#FF4D00] leading-none mb-6"
          >
            WHY <br />EMPTY ART EXISTS
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3 }}
            className="h-1 w-40 bg-[#FF4D00] origin-left mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed font-['Space_Grotesk']"
          >
            <p className="text-white/80 text-lg leading-relaxed font-['Space_Grotesk'] mb-6">
                Empty Art started with a question — <span className="text-[#FF4D00] font-bold">why?</span>
              </p>

              <p className="text-white/70 text-lg leading-relaxed font-['Space_Grotesk'] mb-6">
                Growing up, I was always curious. I asked questions about everything. But often,
                the response was the same: <em>"just take it as it is."</em>
              </p>

              <p className="text-white/70 text-lg leading-relaxed font-['Space_Grotesk'] mb-6">
                Over time, that does something to you. You stop asking. You start doubting yourself.
                You begin to consume instead of create.
              </p>

              <p className="text-white/80 text-lg leading-relaxed font-['Space_Grotesk'] mb-6">
                And that’s where the emptiness begins.
              </p>

              <p className="text-white/70 text-lg leading-relaxed font-['Space_Grotesk'] mb-6">
                I remember drawing a house once. From the outside, it looked complete.
                But inside… it was empty.
              </p>

              <p className="text-white/80 text-lg leading-relaxed font-['Space_Grotesk'] mb-6">
                That’s when it hit me — maybe people are like that too.
              </p>

              <p className="text-white/70 text-lg leading-relaxed font-['Space_Grotesk'] mb-6">
                We grow up in systems that tell us who to be, what to think, and how far we can go.
                We are taught to accept, not to question.
              </p>

              <p className="text-white/80 text-lg leading-relaxed font-['Space_Grotesk'] mb-6">
                So we look full on the outside… but inside, we feel empty.
              </p>

              <p className="text-white/80 text-lg leading-relaxed font-['Space_Grotesk']">
                <span className="text-[#00e3fd] font-bold">Empty Art is a challenge.</span><br />
                A challenge to stop, to question, to enter — and to discover that nothing is truly empty
                unless you choose not to explore it.
              </p>
          </motion.p>
        </div>


        
      </section>


      <section className="py-16 px-6 sm:px-12 lg:px-20 border-t-4 border-[#1a1a1a]">
        
        <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="font-['Space_Grotesk'] font-black uppercase text-5xl sm:text-7xl tracking-tighter italic text-[#FF4D00] leading-none mb-6"
          >
            ARE YOU EMPTY? <br />OR JUST UNEXPLORED?
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3 }}
            className="h-1 w-40 bg-[#FF4D00] origin-left mb-8"
          />

        <div className="max-w-5xl mx-auto">
          <p className="text-white/80 text-lg leading-relaxed font-['Space_Grotesk'] mb-6">
            This is not just an app. This is a response.
          </p>

          <p className="text-white/70 text-lg leading-relaxed font-['Space_Grotesk'] mb-6">
            A response to being told not to ask questions.  
            A response to doubting myself before even trying.  
            A response to feeling like creativity had limits.
          </p>
          <div className="bg-[#0e0e0e] border-4 border-[#FF4D00] p-8 sm:p-12 shadow-[8px_8px_0px_0px_#00e3fd]">
            <p className="text-white/80 text-lg leading-relaxed font-['Space_Grotesk'] mb-6">
              My mission is to create a space where curiosity is not suppressed but expected. where you don't just see art, you step into it, question it, and find yourdelf inside it.
              <span className="text-[#00e3fd] font-bold"> Because this is bigger </span>than understanding the artist. It is about
              it is <span className="text-[#FF4D00] font-bold">rediscovering</span> your own voice.
            </p>
          </div>
          <p className="text-white/40 text-sm font-['Space_Grotesk'] mt-4 uppercase tracking-wider">
            — Mbanza Teta Darcy, Founder
          </p>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-12 lg:px-20 border-t-4 border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black uppercase text-3xl sm:text-4xl tracking-tighter text-white mb-8">
            THE PROBLEM WE SEE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0e0e0e] border-2 border-[#1a1a1a] p-8 hover:border-[#FF4D00] transition-colors"
            >
              <span className="material-symbols-outlined text-4xl text-[#FF4D00] mb-4 block">visibility_off</span>
              <h3 className="font-['Space_Grotesk'] font-black uppercase text-xl text-[#00e3fd] tracking-wider mb-3">
                CONSUMPTION OVER CREATION
              </h3>
              <p className="text-white/60 leading-relaxed font-['Space_Grotesk']">
                We are raised to consume, not to question.
                We scroll, we watch, we admire but we rarely stop and ask why
              </p>
              <p className="text-white/60 leading-relaxed font-['Space_Grotesk'] mt-4">
                Over time, that turns creativity into something distant.  
                Something we believe belongs to other people, not us.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#0e0e0e] border-2 border-[#1a1a1a] p-8 hover:border-[#FF4D00] transition-colors"
            >
              <span className="material-symbols-outlined text-4xl text-[#FF4D00] mb-4 block">help</span>
              <h3 className="font-['Space_Grotesk'] font-black uppercase text-xl text-[#00e3fd] tracking-wider mb-3">
                CURIOSITY WITHOUT GUIDANCE
              </h3>
              <p className="text-white/60 leading-relaxed font-['Space_Grotesk']">
                The curiosity is there. It has always been there.
              </p>
              <p className="text-white/60 leading-relaxed font-['Space_Grotesk'] mt-4">
                But without guidance, it fades.  
                People stop asking questions because they were never shown how to explore the answers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#0e0e0e] border-2 border-[#1a1a1a] p-8 hover:border-[#FF4D00] transition-colors md:col-span-2"
            >
              <span className="material-symbols-outlined text-4xl text-[#FF4D00] mb-4 block">warning</span>
              <p className="text-white/60 leading-relaxed font-['Space_Grotesk'] text-lg">
                The real problem is not that art is inaccessible. 
                It is that people no longer believe they are allowed to engage with it.
              </p>
              <p className="text-white/60 leading-relaxed font-['Space_Grotesk'] text-lg mt-4">
                As long as we think art is “not for us,” we disconnect from one of the most human things we have:
                <span className="text-[#FF4D00] font-bold"> the ability to create and question.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-12 lg:px-20 border-t-4 border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black uppercase text-3xl sm:text-4xl tracking-tighter text-white mb-8">
            WHY THIS MATTERS IN AFRICA
          </h2>
          <div className="bg-[#0e0e0e] border-l-4 border-[#00e3fd] p-8 sm:p-12">
            <p className="text-white/80 text-lg leading-relaxed font-['Space_Grotesk'] mb-6">
              In many African environments, creativity is often seen as optional — something extra,
              something you do after everything else is “serious.”
            </p>
            <p className="text-white/70 text-lg leading-relaxed font-['Space_Grotesk'] mb-6">
              We are taught to follow paths, not to question them.  
              To succeed, not to explore.
            </p>
            <p className="text-white/80 text-lg leading-relaxed font-['Space_Grotesk'] mb-6">
              And slowly, people disconnect from their own imagination.
              Not because they do not have it but because they were never allowed to trust it.
            </p>
            <p className="text-white/80 text-lg leading-relaxed font-['Space_Grotesk'] mb-6">
              That’s how you end up with people who look complete on the outside,
              but feel empty on the inside.
            </p>

            <p className="text-white/80 text-lg leading-relaxed font-['Space_Grotesk']">
              This project challenges that.
              <span className="text-[#00e3fd] font-bold"> It reminds people that creativity is not extra — it is human.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-12 lg:px-20 border-t-4 border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black uppercase text-3xl sm:text-4xl tracking-tighter text-white mb-12">
            WHAT YOU CAN DO HERE
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            {[
              { step: "01", icon: "search", title: "EXPLORE", desc: "Browse artworks uploaded by artists across the platform. See what moves you." },
              { step: "02", icon: "favorite", title: "INTERACT", desc: "Like, comment, and bookmark pieces that speak to you. Art was never meant to be silent." },
              { step: "03", icon: "group", title: "CONNECT", desc: "Follow artists. Build a personalized feed. Join a creative community." },
              { step: "04", icon: "brush", title: "CREATE", desc: "Upload your own artworks with titles and descriptions that tell your story." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i }}
                className="flex-1 text-center p-6 bg-[#0e0e0e] border-2 border-[#1a1a1a] hover:border-[#FF4D00] transition-colors"
              >
                <span className="font-['Space_Grotesk'] font-black text-5xl text-[#FF4D00]/20 block mb-1">
                  {s.step}
                </span>
                <span className="material-symbols-outlined text-3xl text-[#00e3fd] mb-3 block">{s.icon}</span>
                <h3 className="font-['Space_Grotesk'] font-black uppercase text-lg text-white tracking-widest mb-2">
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm font-['Space_Grotesk']">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-20 border-t-4 border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-['Space_Grotesk'] font-black uppercase text-4xl sm:text-5xl tracking-tighter italic text-white mb-4">
            NOTHING IS EVER <span className="text-[#FF4D00]">EMPTY</span>.
          </h2>
          <p className="text-white/50 text-lg font-['Space_Grotesk'] mb-10">
            UNLESS you stop questioning it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/explore")}
              className="bg-[#FF4D00] text-black py-4 px-10 font-['Space_Grotesk'] font-black uppercase text-lg tracking-widest hover:bg-[#00e3fd] transition-all active:translate-y-1 border-2 border-black shadow-[4px_4px_0px_0px_#ffffff]"
            >
              EXPLORE THE VAULT
            </button>
            <button
              onClick={() => navigate("/upload")}
              className="border-4 border-[#FF4D00] text-[#FF4D00] py-4 px-10 font-['Space_Grotesk'] font-black uppercase text-lg tracking-widest hover:bg-[#FF4D00] hover:text-black transition-all"
            >
              DROP YOUR ART
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
