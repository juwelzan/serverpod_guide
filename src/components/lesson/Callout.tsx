import React from 'react';
import { AlertCircle, AlertTriangle, Info, Lightbulb } from 'lucide-react';

interface CalloutProps {
  type: 'tip' | 'warning' | 'info' | 'important';
  title: string;
  message: string;
}

export function Callout({ type, title, message }: CalloutProps) {
  const configs = {
    tip: {
      icon: Lightbulb,
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-950/20',
      text: 'text-emerald-400',
      titleColor: 'text-emerald-300',
    },
    warning: {
      icon: AlertTriangle,
      border: 'border-amber-500/30',
      bg: 'bg-amber-950/20',
      text: 'text-amber-400',
      titleColor: 'text-amber-300',
    },
    info: {
      icon: Info,
      border: 'border-sky-500/30',
      bg: 'bg-sky-950/20',
      text: 'text-sky-400',
      titleColor: 'text-sky-300',
    },
    important: {
      icon: AlertCircle,
      border: 'border-rose-500/30',
      bg: 'bg-rose-950/20',
      text: 'text-rose-400',
      titleColor: 'text-rose-300',
    },
  };

  const current = configs[type] || configs.info;
  const Icon = current.icon;

  return (
    <div
      className={`my-5 p-4 rounded-xl border ${current.border} ${current.bg} backdrop-blur-sm flex items-start gap-3.5`}
    >
      <div className={`mt-0.5 p-1 rounded-lg ${current.bg} ${current.text}`}>
        <Icon className="w-5 h-5 flex-shrink-0" />
      </div>
      <div className="flex-1 text-sm">
        <h4 className={`font-semibold mb-1 ${current.titleColor}`}>{title}</h4>
        <div className="text-slate-300 leading-relaxed whitespace-pre-line">{message}</div>
      </div>
    </div>
  );
}

