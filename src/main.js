// Spur AI - Starter App
function renderApp() {
  const root = document.getElementById("app");
  if (!root) return;

  root.innerHTML = `
    <div class="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-6 font-sans">
      <div class="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl text-center space-y-4">
        <div class="w-16 h-16 rounded-2xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center font-bold text-2xl mx-auto animate-pulse">
          ✨
        </div>
        <h1 class="text-2xl font-black text-slate-900 tracking-tight font-display">Spreman za kreiranje</h1>
        <p class="text-slate-500 text-sm">
          Unesite upit sa leve strane (npr. "sajt za restoran" ili "CRM za prodaju") da biste generisali kompletnu aplikaciju.
        </p>
      </div>
    </div>
  `;
}

renderApp();