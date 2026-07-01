import React from 'react';
import { 
  BookOpen, 
  Users, 
  Share2, 
  Droplet, 
  ArrowRight, 
  Heart, 
  Lock, 
  Compass, 
  ShieldAlert, 
  Gift, 
  Bookmark, 
  Sparkles,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import SelfEvaluation from './components/SelfEvaluation';
import InteractiveGap from './components/InteractiveGap';

export default function App() {
  return (
    <div 
      className="min-h-screen text-coffee-900 font-sans flex flex-col selection:bg-earth-100 selection:text-earth-950 bg-repeat"
      style={{ backgroundImage: "url('/parchment_texture.jpg')" }}
    >
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-earth-100/60 px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between shadow-sm shadow-coffee-950/5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-earth-600 to-earth-400 flex items-center justify-center shadow-md shadow-earth-200/35 flex-shrink-0">
            <Compass className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-sans font-extrabold text-sm sm:text-base md:text-lg tracking-tight text-coffee-950 whitespace-nowrap">
              Iglesia <span className="text-earth-700">Manantial de Vida</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-coffee-500 font-bold tracking-widest uppercase mt-0.5">
              Cuenca - España
            </span>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-5 text-sm font-bold text-coffee-500 whitespace-nowrap">
          <a href="#problema" className="hover:text-earth-700 transition-colors">El Problema</a>
          <a href="#solucion" className="hover:text-earth-700 transition-colors">La Solución</a>
          <a href="#requisito" className="hover:text-earth-700 transition-colors">El Requisito</a>
          <a href="#garantia" className="hover:text-earth-700 transition-colors">La Garantía</a>
          <a href="#pasos" className="hover:text-earth-700 transition-colors">Próximos Pasos</a>
        </nav>
        <a 
          href="#requisito" 
          className="bg-earth-600 hover:bg-earth-700 text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm shadow-earth-200/30 hover:shadow-md hover:shadow-earth-200/50 active:scale-95 whitespace-nowrap"
        >
          Iniciar Camino
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12 overflow-hidden">
        {/* Abstract background glows */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-earth-200/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-gold-200/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-earth-100 text-earth-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-earth-200/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Un mensaje de esperanza y seguridad</span>
            </div>
            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-coffee-950 leading-tight">
              El Plan de Dios <br />
              <span className="text-gradient-peace">para tu Vida</span>
            </h1>
            <p className="text-coffee-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Descubre el camino trazado por el Creador para restaurar tu comunión con Él y asegurar tu destino eterno hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#problema"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-earth-600 hover:bg-earth-700 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-xl shadow-peace-100 hover:shadow-earth-200 hover:-translate-y-0.5"
              >
                <span>Comenzar el camino</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#garantia" 
                className="w-full sm:w-auto flex items-center justify-center bg-white hover:bg-earth-50 text-slate-700 border border-slate-200 font-semibold py-3.5 px-6 rounded-2xl transition-all hover:border-slate-300"
              >
                Ver la Garantía
              </a>
            </div>
          </div>

          {/* Hero Illustration: Serene Sunset Dock */}
          <div className="lg:col-span-5 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-sm aspect-[3/4] bg-white rounded-[2.2rem] p-3 shadow-2xl shadow-coffee-950/20 border border-earth-100/70 overflow-hidden">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden group">
                <img 
                  src="/serene_sunset_dock.jpg" 
                  alt="Muelle hacia el atardecer" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-earth-50/90 backdrop-blur-md border border-white/60 rounded-2xl p-3 flex items-center justify-between text-xs shadow-sm">
                  <div>
                    <span className="block font-bold text-coffee-900">El Camino a Casa</span>
                    <span className="block text-[10px] text-coffee-500 font-semibold tracking-wide">Juan 14:6 — Jesús es el Camino</span>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-earth-600/10 flex items-center justify-center flex-shrink-0 text-earth-700">
                    <Compass className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: El Problema */}
      <section id="problema" className="py-12 px-4 sm:px-8 max-w-6xl w-full mx-auto border-t border-earth-100/50">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Fase 1: El Diagnóstico
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-coffee-950">
            El Problema: La Separación
          </h2>
          <p className="text-coffee-400 text-sm sm:text-base">
            Para entender el valor de la salvación, primero debemos comprender por qué la necesitamos con urgencia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Grid of 3 Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-earth-100 shadow-sm transition-all hover:shadow-md hover:border-slate-200 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-earth-100 text-earth-700 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-sans font-bold text-coffee-950 text-base sm:text-lg">El Pecado</h3>
                <p className="text-coffee-400 text-sm mt-1">
                  Son todas nuestras acciones, pensamientos y actitudes contrarias al carácter perfecto de Dios. Nos separa completamente de Él.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-earth-100 shadow-sm transition-all hover:shadow-md hover:border-slate-200 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-earth-100 text-earth-700 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-sans font-bold text-coffee-950 text-base sm:text-lg">La Consecuencia</h3>
                <p className="text-coffee-400 text-sm mt-1">
                  El pecado genera una deuda impagable. La consecuencia espiritual es la muerte: separación eterna del amor de Dios.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-earth-100 shadow-sm transition-all hover:shadow-md hover:border-slate-200 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-earth-100 text-earth-700 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-sans font-bold text-coffee-950 text-base sm:text-lg">Nuestra Incapacidad</h3>
                <p className="text-coffee-400 text-sm mt-1">
                  Ningún ritual, buena obra, moralidad o esfuerzo humano es suficiente para cruzar la brecha hacia un Dios santo.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1 Illustration */}
          <div className="lg:col-span-5">
            <InteractiveGap />
          </div>
        </div>
      </section>

      {/* Section 2: La Solución */}
      <section id="solucion" className="py-12 px-4 sm:px-8 bg-coffee-900 text-coffee-50 overflow-hidden relative">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-earth-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl w-full mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold text-earth-400 uppercase tracking-widest bg-peace-950/80 px-3 py-1 rounded-full border border-peace-800">
              Fase 2: El Remedio Divino
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white">
              La Solución: El Sacrificio Perfecto
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Lo que nosotros no pudimos lograr, Dios lo hizo posible mediante un acto insuperable de amor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Illustration on Left for Solucion */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-sm aspect-square bg-slate-950 rounded-3xl p-6 border border-coffee-800 flex items-center justify-center overflow-hidden">
                {/* Bridge Cross SVG */}
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="crossGlow" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fff" />
                      <stop offset="100%" stopColor="#fbd066" />
                    </linearGradient>
                    <radialGradient id="solGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#c25927" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#1c0f08" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  
                  {/* Sky background */}
                  <rect width="200" height="200" rx="20" fill="#1c0f08" />
                  <circle cx="100" cy="100" r="70" fill="url(#solGlow)" />
                  
                  {/* Cliffs */}
                  <path d="M 0 120 L 50 120 L 40 200 L 0 200 Z" fill="#2c1b10" />
                  <path d="M 150 120 L 200 120 L 200 200 L 160 200 Z" fill="#2c1b10" />
                  
                  {/* Cross Bridge spanning cliffs */}
                  {/* Horiz bar */}
                  <rect x="42" y="112" width="116" height="8" rx="2" fill="url(#crossGlow)" className="animate-pulse-subtle" />
                  {/* Vert bar */}
                  <rect x="96" y="90" width="8" height="50" rx="2" fill="url(#crossGlow)" />
                  
                  {/* Light beams */}
                  <line x1="100" y1="90" x2="100" y2="60" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
                  <line x1="75" y1="116" x2="60" y2="90" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" opacity="0.4" />
                  <line x1="125" y1="116" x2="140" y2="90" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" opacity="0.4" />
                  
                  {/* Human walking on the Cross */}
                  <circle cx="75" cy="104" r="3" fill="#fff" />
                  <line x1="75" y1="107" x2="75" y2="112" stroke="#fff" strokeWidth="2" />
                  <line x1="72" y1="109" x2="78" y2="109" stroke="#fff" strokeWidth="1.5" />
                  <line x1="75" y1="112" x2="72" y2="116" stroke="#fff" strokeWidth="1.5" />
                  <line x1="75" y1="112" x2="78" y2="116" stroke="#fff" strokeWidth="1.5" />
                  
                  <text x="25" y="138" fill="#64748b" fontSize="7" textAnchor="middle" fontWeight="bold">PECADO</text>
                  <text x="175" y="138" fill="#64748b" fontSize="7" textAnchor="middle" fontWeight="bold">VIDA ETERNA</text>
                </svg>
              </div>
            </div>

            {/* Steps Container */}
            <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
              <div className="relative pl-8 border-l border-coffee-800 space-y-12">
                
                {/* Step 1 */}
                <div className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-coffee-950 border-2 border-earth-500 flex items-center justify-center text-xs text-earth-400 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-white">La Encarnación</h3>
                    <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
                      El Creador se hizo hombre en Jesucristo. Vivió una vida perfecta y sin mancha para experimentar nuestras luchas y calificar como el único mediador justo.
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-xs text-earth-400 bg-coffee-950/60 px-3 py-1 rounded-lg mt-3 border border-coffee-800 text-earth-300">
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span>Filipenses 2:7-8</span>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-coffee-950 border-2 border-gold-500 flex items-center justify-center text-xs text-gold-400 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-white">La Muerte y Resurrección</h3>
                    <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
                      Jesús murió voluntariamente en la cruz, pagando tu deuda legal en su totalidad. Tres días después, resucitó venciendo a la muerte física y espiritual de una vez por todas.
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-xs text-gold-400 bg-gold-950/40 px-3 py-1 rounded-lg mt-3 border border-gold-900 text-gold-300">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>1 Corintios 15:3-4</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: El Único Requisito */}
      <section id="requisito" className="py-12 px-4 sm:px-8 max-w-6xl w-full mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold text-earth-600 uppercase tracking-widest bg-peace-50 px-3 py-1 rounded-full border border-earth-200/60">
            Fase 3: La Respuesta Humana
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-coffee-950">
            El Único Requisito: Cree y Confía
          </h2>
          <p className="text-coffee-400 text-sm sm:text-base">
            La salvación es un regalo inmerecido de Dios (Gracia). No se gana portándose bien; se recibe por medio de la fe sincera.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Explanation text + Gift SVG */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <div className="bg-gradient-to-tr from-earth-50/60 to-white p-6 sm:p-8 rounded-3xl border border-earth-200/60 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-peace-200/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-peace-100 text-earth-600 flex items-center justify-center">
                  <Gift className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-coffee-950">Un Regalo Gratuito</h3>
                <p className="text-coffee-400 text-sm sm:text-base leading-relaxed font-light">
                  "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe." 
                  <span className="block mt-2 font-bold text-xs text-earth-700 uppercase tracking-wider">— Efesios 2:8-9</span>
                </p>
              </div>

              {/* Hands and Gift SVG */}
              <div className="mt-8 flex justify-center">
                <svg viewBox="0 0 150 100" className="w-full max-w-[200px] h-auto">
                  <defs>
                    <radialGradient id="giftGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#fde5a3" />
                      <stop offset="100%" stopColor="#df9a28" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  {/* Glowing Gift */}
                  <circle cx="75" cy="35" r="25" fill="url(#giftGlow)" />
                  <path d="M 70 30 L 80 30 L 80 40 L 70 40 Z" fill="#df9a28" />
                  <line x1="75" y1="28" x2="75" y2="42" stroke="#fff" strokeWidth="2" />
                  <line x1="68" y1="35" x2="82" y2="35" stroke="#fff" strokeWidth="2" />
                  
                  {/* Bow */}
                  <path d="M 75 30 Q 72 26 75 26 Q 78 26 75 30" fill="none" stroke="#fff" strokeWidth="1.5" />
                  <path d="M 75 30 Q 78 26 75 26 Q 72 26 75 30" fill="none" stroke="#fff" strokeWidth="1.5" />
                  
                  {/* Hands */}
                  <path d="M 30 80 Q 55 60 70 70 Q 75 72 70 76 Z" fill="none" stroke="#903513" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 120 80 Q 95 60 80 70 Q 75 72 80 76 Z" fill="none" stroke="#903513" strokeWidth="2.5" strokeLinecap="round" />
                  
                  {/* Sparkles */}
                  <circle cx="50" cy="25" r="1.5" fill="#df9a28" />
                  <circle cx="100" cy="20" r="1" fill="#df9a28" />
                  <circle cx="75" cy="10" r="2.5" fill="#fde5a3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Interactive SelfEvaluation Component */}
          <div className="lg:col-span-7">
            <SelfEvaluation />
          </div>

        </div>
      </section>

      {/* Section 4: La Garantía */}
      <section id="garantia" className="py-12 px-4 sm:px-8 bg-gradient-to-r from-coffee-900 to-coffee-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 text-gold-300 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/5">
              <Lock className="w-3.5 h-3.5" />
              <span>Garantía de Seguridad Eterna</span>
            </div>
            
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Inamovible y Segura
            </h2>
            
            {/* Verse Banner */}
            <div className="bg-white/5 border-l-4 border-gold-400 p-5 rounded-r-2xl my-4">
              <p className="text-slate-200 font-serif italic text-sm sm:text-base leading-relaxed">
                "Y yo les doy vida eterna; y no perecerán jamás, ni nadie las arrebatará de mi mano. Mi Padre que me las dio, es mayor que todos, y nadie las puede arrebatar de la mano de mi Padre."
              </p>
              <span className="block text-right font-bold text-xs text-gold-300 uppercase tracking-widest mt-2">
                — Juan 10:28-29
              </span>
            </div>

            <p className="text-coffee-200 text-sm sm:text-base leading-relaxed font-light">
              Tu salvación no depende de la fluctuación de tus emociones ni de tu desempeño perfecto cotidiano. Depende de la fidelidad eterna de la promesa divina. Una vez adoptado como hijo, Dios te sostiene con firmeza.
            </p>
          </div>

          {/* Right SVG Illustration (Protecting Hand) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square bg-white/5 rounded-3xl p-6 border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-peace-950 to-transparent"></div>
              
              {/* Protecting Hand SVG */}
              <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 animate-pulse-subtle">
                <defs>
                  <radialGradient id="handGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c25927" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#1c0f08" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="80" fill="url(#handGlow)" />
                
                {/* Concentric Protection Circles */}
                <circle cx="100" cy="100" r="65" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="3,6" opacity="0.3" />
                <circle cx="100" cy="100" r="55" fill="none" stroke="#df9a28" strokeWidth="1.5" opacity="0.5" />
                
                {/* Hand outline stylized */}
                <path 
                  d="M 50 140 C 60 120, 80 115, 95 125 C 105 130, 115 120, 120 100 C 122 80, 125 70, 120 60 C 117 55, 110 60, 110 70 C 110 50, 103 45, 98 55 C 98 42, 90 40, 86 52 C 86 48, 78 48, 76 60 C 76 75, 60 90, 50 110 Z" 
                  fill="none" 
                  stroke="#fff" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                
                {/* Human Silhouette nestled safely inside */}
                <circle cx="85" cy="80" r="4.5" fill="#fde5a3" />
                <path d="M 85 85 L 85 97 M 80 89 L 90 89 M 85 97 L 81 105 M 85 97 L 89 105" stroke="#fde5a3" strokeWidth="2.5" strokeLinecap="round" />
                
                {/* Shield Sparkles */}
                <circle cx="140" cy="70" r="2.5" fill="#fff" />
                <circle cx="60" cy="50" r="1.5" fill="#fff" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* Section 5: Próximos Pasos & Comunidad */}
      <section id="pasos" className="py-12 px-4 sm:px-8 max-w-6xl w-full mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold text-warmAccent-600 uppercase tracking-widest bg-warmAccent-50 px-3 py-1 rounded-full border border-warmAccent-100">
            Fase 4: El Crecimiento
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-coffee-950">
            Próximos Pasos en tu Fe
          </h2>
          <p className="text-coffee-400 text-sm sm:text-base">
            La salvación es el inicio de una hermosa relación. Aquí te mostramos cómo madurar en tu caminar espiritual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-3xl border border-earth-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-earth-100 text-earth-700 flex items-center justify-center">
                <Droplet className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-coffee-950 text-base sm:text-lg">1. Bautismo</h3>
              <p className="text-coffee-400 text-xs sm:text-sm leading-relaxed">
                Paso público de obediencia que simboliza tu muerte al pecado y tu resurrección a una nueva vida con Cristo.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-sky-600 font-semibold">
              <span>Testimonio público</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-3xl border border-earth-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-coffee-950 text-base sm:text-lg">2. Estudio Bíblico</h3>
              <p className="text-coffee-400 text-xs sm:text-sm leading-relaxed">
                Estudiar la Palabra te ayuda a conocer la voluntad de Dios, fortalecer tu mente y resistir las mentiras del enemigo.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-emerald-600 font-semibold">
              <span>Alimento diario</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-3xl border border-earth-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-peace-50 text-earth-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-coffee-950 text-base sm:text-lg">3. Vida en Comunidad</h3>
              <p className="text-coffee-400 text-xs sm:text-sm leading-relaxed">
                Congregarte con otros creyentes te brinda apoyo, consejería y la oportunidad de ejercitar tus dones de servicio.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-earth-600 font-semibold">
              <span>Iglesia local</span>
              <span className="w-1.5 h-1.5 rounded-full bg-peace-600"></span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-3xl border border-earth-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-coffee-950 text-base sm:text-lg">4. Compartir la Fe</h3>
              <p className="text-coffee-400 text-xs sm:text-sm leading-relaxed">
                Llevar las buenas nuevas de perdón y seguridad eterna a otros es la gran comisión que Jesús nos encomendó.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-warmAccent-600 font-semibold">
              <span>Gran Comisión</span>
              <span className="w-1.5 h-1.5 rounded-full bg-warmAccent-600"></span>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-coffee-950 text-coffee-300 py-12 px-4 sm:px-8 border-t border-coffee-900">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-earth-600 to-earth-400 flex items-center justify-center text-white font-bold shadow-md shadow-coffee-950">
                M
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-sans font-extrabold text-white text-base tracking-tight">
                  Iglesia Manantial de Vida
                </span>
                <span className="text-[10px] text-coffee-400 font-semibold tracking-wider uppercase">
                  Cuenca - España
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-coffee-400 max-w-sm leading-relaxed">
              Dedicados a predicar el mensaje inmutable de Jesucristo, guiando a las personas hacia la paz y la seguridad que solo Dios ofrece.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Enlaces de Utilidad</h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li><a href="#problema" className="hover:text-white transition-colors">El Pecado y la Brecha</a></li>
              <li><a href="#solucion" className="hover:text-white transition-colors">Cruz y Resurrección</a></li>
              <li><a href="#requisito" className="hover:text-white transition-colors">Oración de Fe</a></li>
              <li><a href="#garantia" className="hover:text-white transition-colors">Garantía Eterna</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Contacto y Recursos</h4>
            <p className="text-xs sm:text-sm text-coffee-400">
              Inspirado por Mission Southside y comunidades cristianas locales.
            </p>
            <div className="space-y-1 text-xs">
              <p>Email: <a href="mailto:info@iglesiamanantial.org" className="text-coffee-200 hover:text-white">info@iglesiamanantial.org</a></p>
              <p>Teléfono: <span className="text-coffee-200">+1 (800) 555-0199</span></p>
              <p>Dirección: <span className="text-coffee-200">123 Camino de la Gracia, Manantial, EE.UU.</span></p>
            </div>
          </div>

        </div>

        <div className="max-w-6xl w-full mx-auto pt-8 border-t border-coffee-900 flex flex-col sm:flex-row items-center justify-between text-xs text-coffee-500 gap-4">
          <p>© {new Date().getFullYear()} Iglesia Manantial de Vida. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400">Privacidad</a>
            <a href="#" className="hover:text-slate-400">Términos de servicio</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
