"use client";
import { useEffect, useState } from 'react';
import { useLocalStorage } from '@/lib/useLocalStorage';
import { ApiKeys } from '@/lib/types';

export default function Settings() {
  const [open, setOpen] = useState(false);
  const [keys, setKeys] = useLocalStorage<ApiKeys>('ai-fiesta:keys', {});
  const [gemini, setGemini] = useState(keys.gemini || '');
  const [openrouter, setOpenrouter] = useState(keys.openrouter || '');

  const save = () => {
    const next = { gemini: gemini.trim() || undefined, openrouter: openrouter.trim() || undefined };
    setKeys(next);
    setOpen(false);
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-settings', handler as EventListener);
    return () => window.removeEventListener('open-settings', handler as EventListener);
  }, []);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="text-xs px-2.5 py-1 rounded border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 text-green-300"
      >
        Settings
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-lg rounded-lg border border-green-500/30 bg-zinc-900 text-white p-4 shadow-lg shadow-green-900/40">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-green-400">API Keys</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-sm text-green-300 opacity-75 hover:opacity-100"
              >
                Close
              </button>
            </div>

            <p className="text-xs text-zinc-400 mb-4">
              Keys are stored locally in your browser via localStorage and sent only with your
              requests. Do not hardcode keys in code.
            </p>

            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm text-green-300">Gemini API Key</label>
              <a
                href="https://aistudio.google.com/app/u/5/apikey?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-2.5 py-1 rounded bg-green-600 text-white border border-green-500/30 hover:bg-green-700"
              >
                Get API key
              </a>
            </div>
            <input
              value={gemini}
              onChange={(e) => setGemini(e.target.value)}
              placeholder="AIza..."
              className="w-full bg-black/40 border border-green-500/30 rounded px-3 py-2 mb-3 text-green-200 placeholder-green-700 focus:outline-none focus:ring-1 focus:ring-green-500"
            />

            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm text-green-300">OpenRouter API Key</label>
              <a
                href="https://openrouter.ai/sign-in?redirect_url=https%3A%2F%2Fopenrouter.ai%2Fsettings%2Fkeys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-2.5 py-1 rounded bg-green-600 text-white border border-green-500/30 hover:bg-green-700"
              >
                Get API key
              </a>
            </div>
            <input
              value={openrouter}
              onChange={(e) => setOpenrouter(e.target.value)}
              placeholder="sk-or-..."
              className="w-full bg-black/40 border border-green-500/30 rounded px-3 py-2 text-green-200 placeholder-green-700 focus:outline-none focus:ring-1 focus:ring-green-500"
            />

            <div className="flex gap-2 justify-end mt-4">
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1.5 rounded bg-green-500/10 border border-green-500/30 text-green-300 hover:bg-green-500/20"
              >
                Close
              </button>
              <button
                onClick={save}
                className="px-3 py-1.5 rounded bg-green-600 hover:bg-green-700 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
