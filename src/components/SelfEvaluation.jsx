import React, { useState } from 'react';
import { CheckCircle2, Heart, Sparkles, Copy, Check, Info } from 'lucide-react';

export default function SelfEvaluation() {
  const [answers, setAnswers] = useState({
    reconocer: false,
    arrepentimiento: false,
    creer: false,
    seguir: false,
  });

  const [copied, setCopied] = useState(false);

  const questions = [
    {
      id: 'reconocer',
      title: 'Reconocer el pecado',
      description: 'Reconozco sinceramente que he fallado a Dios (pecado) y que ninguna obra buena o religión propia puede salvarme del abismo.',
    },
    {
      id: 'arrepentimiento',
      title: 'Deseo de volver a Dios',
      description: 'Anhelo pedir perdón por mi pasado y deseo apartarme de aquello que me aleja del amor y la voluntad de mi Creador.',
    },
    {
      id: 'creer',
      title: 'Creer en el sacrificio de Jesús',
      description: 'Tengo la certeza de que Jesús es Dios encarnado, que murió en la cruz cargando mi culpa personal y resucitó al tercer día.',
    },
    {
      id: 'seguir',
      title: 'Decisión de entregar mi vida',
      description: 'Abro las puertas de mi corazón para recibirle activamente como mi Salvador personal, rindiendo mi voluntad para seguirle.',
    },
  ];

  const handleCheckboxChange = (id) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const checkedCount = Object.values(answers).filter(Boolean).length;
  const progressPercent = (checkedCount / questions.length) * 100;

  const prayerText = `Señor Jesús, reconozco que soy pecador y que no puedo salvarme a mí mismo. Creo que moriste por mí en la cruz y que resucitaste de entre los muertos. Hoy me arrepiento de mis pecados, te abro mi corazón y te recibo como mi único y suficiente Salvador y Señor. Toma el control de mi vida y guíame por tu camino. Gracias por el regalo de la vida eterna y la garantía de tu amor. Amén.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(prayerText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-xl shadow-coffee-100/30 border border-coffee-100/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-coffee-100/50">
      {/* Header */}
      <div className="bg-gradient-to-r from-earth-600 to-earth-500 p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-12 -translate-y-6"></div>
        <div className="relative z-10 flex items-start gap-4">
          <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
            <Heart className="w-6 h-6 text-gold-300 fill-gold-300 animate-pulse-subtle" />
          </div>
          <div>
            <h3 className="font-sans font-bold text-xl sm:text-2xl">Autoevaluación del Corazón</h3>
            <p className="text-earth-100 text-sm mt-1">
              Reflexiona en estas 4 verdades. Marca las casillas que representen tu convicción actual.
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 sm:px-8 pt-6">
        <div className="flex justify-between items-center text-xs font-semibold text-coffee-500 mb-2">
          <span>PROGRESO DE TU REFLEXIÓN</span>
          <span className="text-earth-700 bg-earth-50 px-2 py-0.5 rounded-full">{checkedCount} de 4 completados</span>
        </div>
        <div className="w-full h-2.5 bg-coffee-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gold-400 to-earth-500 transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Content Form */}
      <div className="p-6 sm:p-8 space-y-4">
        {questions.map((q) => {
          const isChecked = answers[q.id];
          return (
            <label
              key={q.id}
              className={`flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                isChecked
                  ? 'border-earth-200 bg-earth-50/40 shadow-sm shadow-earth-100/30'
                  : 'border-coffee-100 hover:border-coffee-200 hover:bg-coffee-50/20'
              }`}
            >
              <div className="relative flex items-center justify-center mt-1">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(q.id)}
                  className="sr-only"
                />
                <div
                  className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
                    isChecked
                      ? 'border-earth-500 bg-earth-500 text-white'
                      : 'border-coffee-300 bg-white hover:border-coffee-400'
                  }`}
                >
                  {isChecked && <Check className="w-4 h-4 stroke-[3px]" />}
                </div>
              </div>
              <div className="flex-1">
                <span
                  className={`font-sans font-bold text-sm sm:text-base transition-colors duration-200 ${
                    isChecked ? 'text-earth-950' : 'text-coffee-900'
                  }`}
                >
                  {q.title}
                </span>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  {q.description}
                </p>
              </div>
            </label>
          );
        })}

        {/* Dynamic Feedback Block */}
        <div className="mt-8 transition-all duration-500">
          {checkedCount === 4 ? (
            <div className="bg-coffee-900 text-coffee-50 p-6 sm:p-8 rounded-2xl border border-coffee-800 relative overflow-hidden animate-fade-in-up">
              {/* Decorative glows */}
              <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-earth-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gold-500/20 text-gold-400 p-2 rounded-xl">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-lg text-white">¡Estás listo para dar este paso!</h4>
                </div>

                <p className="text-coffee-200 text-sm leading-relaxed mb-6">
                  Si has reconocido estas verdades en tu corazón, puedes expresarle esto a Dios en una oración sincera. La salvación no es por repetir palabras, sino por la fe real en Jesús.
                </p>

                <div className="bg-coffee-950/60 border border-coffee-900/80 rounded-xl p-4 sm:p-5 mb-5 relative">
                  <p className="text-coffee-300 text-xs uppercase tracking-wider font-semibold mb-2 text-gold-400">
                    Sugerencia de Oración
                  </p>
                  <p className="text-coffee-100 font-serif italic text-sm leading-relaxed">
                    "{prayerText}"
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleCopy}
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-coffee-950 py-3 px-4 rounded-xl font-semibold text-sm hover:bg-coffee-50 active:scale-95 transition-all duration-150"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Copiado al portapapeles</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar Oración</span>
                      </>
                    )}
                  </button>
                  <div className="flex items-center justify-center gap-2 text-xs text-coffee-800 px-3">
                    <CheckCircle2 className="w-4 h-4 text-earth-400 flex-shrink-0" />
                    <span>Tu fe en Jesús te conecta a la garantía eterna.</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-earth-50/60 border border-earth-100 p-5 rounded-2xl flex items-start gap-3">
              <Info className="w-5 h-5 text-earth-500 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-sans font-bold text-sm text-earth-950">Explora cada punto con calma</h5>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5 leading-relaxed">
                  Medita en cada frase. Si tienes dudas, puedes seguir explorando las secciones anteriores. El plan de Dios está sustentado en su inmensa gracia y amor incondicional por ti.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
