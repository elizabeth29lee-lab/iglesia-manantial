import React, { useState } from 'react';
import { ShieldAlert, Sparkles, BookOpen } from 'lucide-react';

export default function InteractiveGap() {
  const [selectedEffort, setSelectedEffort] = useState('none');

  const efforts = {
    none: {
      title: 'La Brecha Existencial',
      percentage: 0,
      description: 'El pecado ha creado un abismo infinito de separación espiritual entre la imperfección humana y la santidad absoluta de Dios.',
      scripture: 'Romanos 3:23',
      reason: 'Ningún punto de partida es suficiente sin un mediador perfecto.',
    },
    obras: {
      title: 'Obras Buenas / Altruismo',
      percentage: 45,
      description: 'Intentar compensar nuestras faltas con buenas acciones es noble, pero nuestras mejores obras siguen empañadas por motivos imperfectos y no borran el pecado pasado.',
      scripture: 'Isaías 64:6',
      reason: 'Las obras humanas no pueden justificar la culpa ante la justicia perfecta.',
    },
    religion: {
      title: 'Religiosidad y Ritos',
      percentage: 30,
      description: 'Participar en sacramentos, bautismos, rezos o ritos externos calma la conciencia temporalmente, pero no tiene poder para regenerar espiritualmente el corazón humano.',
      scripture: 'Gálatas 2:16',
      reason: 'El cumplimiento externo de normas no cambia la condición interna.',
    },
    moral: {
      title: 'Filosofía y Moralidad',
      percentage: 20,
      description: 'Seguir códigos morales estrictos o corrientes filosóficas eleva el intelecto, pero no soluciona el problema de la naturaleza caída ni el destino eterno.',
      scripture: 'Proverbios 14:12',
      reason: 'Una buena conducta terrenal no repara la desconexión divina.',
    },
  };

  const current = efforts[selectedEffort];

  // Map percentages to SVG line X coordinates (from cx=30 to cx=170)
  // Distance is 140px. 
  // Target X = 30 + (percentage / 100) * 140
  const startX = 30;
  const endX = 30 + (current.percentage / 100) * 140;

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl border border-coffee-100/50 shadow-xl shadow-coffee-100/30 p-6 flex flex-col gap-6">
      
      {/* Interactive Visual Canvas */}
      <div className="bg-coffee-950 rounded-2xl p-4 relative overflow-hidden border border-coffee-900 shadow-inner">
        {/* Abstract grids / grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"></div>

        <svg viewBox="0 0 200 100" className="w-full h-auto relative z-10">
          <defs>
            <radialGradient id="holyGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="30%" stopColor="#fde5a3" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#df9a28" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="humanGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f3d9bd" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1c0f08" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Connection pathway (background line) */}
          <line 
            x1="30" y1="50" 
            x2="170" y2="50" 
            stroke="#4e392d" 
            strokeWidth="2" 
            strokeDasharray="3,3" 
          />

          {/* Interactive attempted progress line */}
          {selectedEffort !== 'none' && (
            <line 
              x1="30" y1="50" 
              x2={startX} 
              y2="50" 
              stroke="#f43f5e" 
              strokeWidth="3.5" 
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
              style={{ x2: `${endX}px` }}
            />
          )}

          {/* Humanity Node (Left) */}
          <circle cx="30" cy="50" r="15" fill="url(#humanGlow)" />
          <circle cx="30" cy="50" r="6" fill="none" stroke="#eab88f" strokeWidth="2" />
          <circle cx="30" cy="50" r="2" fill="#eab88f" />
          <text x="30" y="78" fill="#b29783" fontSize="6.5" textAnchor="middle" fontWeight="bold" letterSpacing="0.5">
            HUMANIDAD
          </text>

          {/* God / Holiness Node (Right) */}
          <circle cx="170" cy="50" r="22" fill="url(#holyGlow)" className="animate-pulse-subtle" />
          <circle cx="170" cy="50" r="6" fill="#df9a28" />
          <text x="170" y="78" fill="#f5e283" fontSize="6.5" textAnchor="middle" fontWeight="bold" letterSpacing="0.5">
            DIOS (SANTO)
          </text>

          {/* Progress Indicator Node */}
          {selectedEffort !== 'none' && (
            <g className="transition-all duration-700 ease-out" style={{ transform: `translateX(${endX - 30}px)` }}>
              <circle cx="30" cy="50" r="4.5" fill="#f43f5e" className="animate-ping" style={{ animationDuration: '2s' }} />
              <circle cx="30" cy="50" r="4" fill="#f43f5e" />
              
              {/* Shortfall warning marker */}
              <line x1="30" y1="50" x2="30" y2="30" stroke="#f43f5e" strokeWidth="1" strokeDasharray="1,1" />
              <rect x="18" y="16" width="24" height="11" rx="3" fill="#ef4444" />
              <text x="30" y="24" fill="#fff" fontSize="5.5" fontWeight="bold" textAnchor="middle">
                {current.percentage}%
              </text>
            </g>
          )}

          {/* Abyss separating text */}
          {selectedEffort === 'none' && (
            <text x="100" y="44" fill="#ef4444" fontSize="6" textAnchor="middle" fontWeight="bold" letterSpacing="1" opacity="0.6">
              ABISMO DEL PECADO
            </text>
          )}
        </svg>

        {/* Status Indicator text overlay */}
        <div className="absolute top-3 left-3 bg-coffee-950/80 border border-coffee-800 rounded-lg px-2.5 py-1 text-[10px] text-coffee-300 font-semibold uppercase tracking-wider flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${selectedEffort === 'none' ? 'bg-gold-500' : 'bg-rose-500'}`}></span>
          <span>{selectedEffort === 'none' ? 'Sin Conexión' : 'Intento Insuficiente'}</span>
        </div>
      </div>

      {/* Effort Selectors */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-coffee-400 uppercase tracking-widest block mb-1">
          SELECCIONA UN INTENTO HUMANO:
        </span>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setSelectedEffort('obras')}
            className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all ${
              selectedEffort === 'obras'
                ? 'bg-rose-50 border-rose-200 text-rose-700 shadow-sm'
                : 'bg-coffee-50/50 border-coffee-100 hover:border-coffee-200 text-coffee-600'
            }`}
          >
            Obras Buenas
          </button>
          <button
            onClick={() => setSelectedEffort('religion')}
            className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all ${
              selectedEffort === 'religion'
                ? 'bg-rose-50 border-rose-200 text-rose-700 shadow-sm'
                : 'bg-coffee-50/50 border-coffee-100 hover:border-coffee-200 text-coffee-600'
            }`}
          >
            Religiosidad
          </button>
          <button
            onClick={() => setSelectedEffort('moral')}
            className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all ${
              selectedEffort === 'moral'
                ? 'bg-rose-50 border-rose-200 text-rose-700 shadow-sm'
                : 'bg-coffee-50/50 border-coffee-100 hover:border-coffee-200 text-coffee-600'
            }`}
          >
            Filosofía
          </button>
        </div>
        {selectedEffort !== 'none' && (
          <button
            onClick={() => setSelectedEffort('none')}
            className="w-full text-center py-1 text-[11px] text-coffee-400 font-semibold hover:text-coffee-600 transition-colors"
          >
            Restablecer Abismo
          </button>
        )}
      </div>

      {/* Explanation Pane */}
      <div className="bg-coffee-50/30 border border-coffee-100/50 rounded-2xl p-4 min-h-[140px] flex flex-col justify-between transition-all duration-300">
        <div className="space-y-2">
          <h4 className="font-sans font-bold text-sm text-coffee-900 flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-rose-500" />
            <span>{current.title}</span>
          </h4>
          <p className="text-coffee-600 text-xs sm:text-sm leading-relaxed font-light">
            {current.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-coffee-100/60 flex flex-wrap gap-x-4 gap-y-1.5 justify-between items-center text-xs">
          <span className="text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md font-semibold text-[10px] uppercase tracking-wider">
            Motivo: {current.reason}
          </span>
          <span className="text-coffee-400 italic flex items-center gap-1">
            <BookOpen className="w-3 h-3 text-coffee-400" />
            {current.scripture}
          </span>
        </div>
      </div>

    </div>
  );
}
