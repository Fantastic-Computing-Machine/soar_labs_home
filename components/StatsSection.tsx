import React, { useMemo } from 'react';
import { STATS } from '../constants';

const LATENCY_DATA = [
  { name: 'Traditional Search', speed: 800 },
  { name: 'Competitor A', speed: 450 },
  { name: 'Soar Labs', speed: 90 },
];

const StatsSection: React.FC = () => {
  const { max, min } = useMemo(() => {
    const values = LATENCY_DATA.map((item) => item.speed);
    return {
      max: Math.max(...values),
      min: Math.min(...values),
    };
  }, []);
  const span = Math.max(max - min, 1);

  return (
    <section className="py-24 bg-white/30 backdrop-blur-3xl border-y border-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Stats */}
            <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat, index) => (
                <div key={index} className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl font-display font-bold text-slate-900 mb-2">
                    {stat.value}<span className="text-3xl text-brand-600 ml-1">{stat.suffix}</span>
                </div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
                </div>
            ))}
            </div>

            {/* Chart */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
                <div className="mb-8">
                    <h3 className="text-slate-900 font-bold text-xl">Average Latency (Lower is Better)</h3>
                    <p className="text-slate-500 text-sm">Comparing query response times across platforms</p>
                </div>
                <div className="space-y-6" aria-label="Latency comparison chart">
                    {LATENCY_DATA.map((entry) => {
                        const normalized = ((max - entry.speed) / span) * 100;
                        const widthPercent = Math.max(10, normalized);
                        const isSoarLabs = entry.name === 'Soar Labs';
                        return (
                            <div key={entry.name}>
                                <div className="flex items-center justify-between text-sm font-semibold text-slate-600 mb-2">
                                    <span>{entry.name}</span>
                                    <span>{entry.speed} ms</span>
                                </div>
                                <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden" role="img" aria-label={`${entry.name} latency ${entry.speed} milliseconds`}>
                                    <div
                                        className={`h-full rounded-full ${isSoarLabs ? 'bg-brand-500' : 'bg-slate-300'}`}
                                        style={{ width: `${widthPercent}%` }}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-slate-400 justify-center bg-slate-50/50 py-2 rounded-lg">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Benchmarks based on 1M vector index query.
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
