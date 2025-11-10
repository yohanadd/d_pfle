import {
  Users,
  Clock,
  ShieldCheck,
  Home,
  ArrowRight,
  Phone,
  MapPin,
  Building,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

// Desktop images
import hero1 from "@/assets/hero.jpg";
import hero2 from "@/assets/herohero.jpeg";
import hero3 from "@/assets/hug.jpeg";

// Mobile images
import heroMobile1 from "@/assets/newhero.jpeg";
import heroMobile2 from "@/assets/newhero2.jpeg";
import heroMobile3 from "@/assets/newhero4.jpeg";

const Hero = () => {
  const desktopImages = [hero1, hero2, hero3];
  const mobileImages = [heroMobile1, heroMobile2, heroMobile3];

  const [currentDesktop, setCurrentDesktop] = useState(0);
  const [currentMobile, setCurrentMobile] = useState(0);

  // Image rotation
  useEffect(() => {
    const d = setInterval(() => {
      setCurrentDesktop((p) => (p + 1) % desktopImages.length);
    }, 3000);
    const m = setInterval(() => {
      setCurrentMobile((p) => (p + 1) % mobileImages.length);
    }, 3000);
    return () => {
      clearInterval(d);
      clearInterval(m);
    };
  }, []);

  // Parallax scroll
  const { scrollY } = useScroll();
  const yDesktop = useTransform(scrollY, [0, 500], [0, 50]);
  const yMobile = useTransform(scrollY, [0, 500], [0, 30]);

  // Mouse motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX / window.innerWidth - 0.5);
    mouseY.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex flex-col h-screen overflow-hidden font-montserrat"
    >
      {/* ======= BACKGROUNDS ======= */}
      {/* Mobile */}
      <div className="absolute inset-0 md:hidden overflow-hidden">
        {mobileImages.map((img, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              opacity: i === currentMobile ? 1 : 0,
              scale: i === currentMobile ? 1.05 : 1,
              filter: i === currentMobile ? "blur(0px)" : "blur(10px)",
              y: i === currentMobile ? yMobile : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-deep-navy/85 via-deep-navy/70 to-deep-navy/60"></div>
          </motion.div>
        ))}
      </div>

      {/* Desktop */}
      <div className="absolute inset-0 hidden md:block overflow-hidden">
        {desktopImages.map((img, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              opacity: i === currentDesktop ? 1 : 0,
              scale: i === currentDesktop ? 1.05 : 1,
              filter: i === currentDesktop ? "blur(0px)" : "blur(10px)",
              y: i === currentDesktop ? yDesktop : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/80 via-deep-navy/65 to-deep-navy/45"></div>
          </motion.div>
        ))}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-trust-green/10 blur-[120px] rounded-full"></div>
      </div>

      {/* ======= CONTENT ======= */}
      <div className="relative z-[2] flex flex-col justify-between h-full container mx-auto px-6 py-16 md:py-20">
        {/* ===== DESKTOP SECTION ===== */}
        <div className="hidden md:block max-w-4xl mt-48">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center space-x-3 mb-6 md:mb-8"
          >
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-5 py-3 border border-white/30 shadow-lg">
              <ShieldCheck className="w-5 h-5 text-trust-green" fill="currentColor" />
              <span className="text-white font-semibold text-sm tracking-wide">
                Zertifiziert nach SGB XI/XII
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6 md:mb-8 space-y-4 mt-8 md:mt-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-gradient">
                Mit Herz
              </span>
              <span className="block bg-gradient-to-r from-trust-green via-lime-300 to-trust-green/80 bg-clip-text text-transparent relative z-10 animate-gradient">
                für Menschen
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-trust-green to-trust-green/80 rounded-full"></div>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 md:mb-10 max-w-2xl leading-relaxed font-light"
          >
            Qualität ist kein Zufall.
          </motion.p>

          {/* Info Boxes */}
          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/30">
            {[
              { icon: <Home className="w-6 h-6 text-white" />, title: "Wie Zuhause", desc: "Betreuung in vertrauter Umgebung" },
              { icon: <Clock className="w-6 h-6 text-white" />, title: "24/7 Für Sie da", desc: "Rund um die Uhr Betreuung" },
              { icon: <Users className="w-6 h-6 text-white" />, title: "Multikulturell", desc: "Vielfältiges Betreuerteam" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 + i * 0.2 }}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <div className="text-white font-bold text-base group-hover:text-trust-green transition-colors duration-300">
                    {item.title}
                  </div>
                  <div className="text-gray-300 text-sm">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== MOBILE SECTION ===== */}
        <div className="md:hidden flex flex-col justify-between h-full text-center">
          {/* Mobile Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-24 space-y-2"
          >
            <h1 className="text-4xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-gradient">
                Mit Herz
              </span>
              <span className="block bg-gradient-to-r from-trust-green via-lime-300 to-trust-green/80 bg-clip-text text-transparent animate-gradient">
                für Menschen
              </span>
            </h1>
          </motion.div>

          {/* Buttons + Contact */}
          <div className="flex flex-col items-center space-y-4 pb-6">
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-trust-green text-white font-semibold bg-gradient-to-r from-trust-green/40 via-lime-300/40 to-trust-green/40 hover:bg-gradient-to-r hover:from-trust-green hover:via-lime-300 hover:to-trust-green shadow-lg transition-all duration-500"
            >
              <span className="relative flex items-center space-x-2 z-10">
                <Phone className="w-5 h-5" />
                <span>Kontakt aufnehmen</span>
              </span>
            </motion.a>

            <div className="flex flex-col items-center space-y-1 text-white text-center text-sm">
              <p className="flex items-center space-x-2"><Phone className="w-4 h-4" /> <span>06103 - 802 57 31</span></p>
              <p className="flex items-center space-x-2"><Building className="w-4 h-4" /> <span>E-Mail: pflegedienst.3eich@yahoo.com</span></p>
              <p className="flex items-center space-x-2"><MapPin className="w-4 h-4" /> <span>Freiherr-vom-Stein-Straße 42</span></p>
              <p>63303 Dreieich-Sprendlingen</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Gradient */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-deep-navy/80 to-transparent"></div>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
