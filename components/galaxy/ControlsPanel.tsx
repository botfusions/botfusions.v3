import React from 'react';
import { RotateCcw, X } from 'lucide-react';
import { GalaxyParameters, DEFAULT_PARAMETERS, Language, TRANSLATIONS } from './types';

interface ControlsPanelProps {
  parameters: GalaxyParameters;
  setParameters: React.Dispatch<React.SetStateAction<GalaxyParameters>>;
  onClose: () => void;
  isOpen: boolean;
  language: Language;
}

export const ControlsPanel: React.FC<ControlsPanelProps> = ({
  parameters,
  setParameters,
  onClose,
  isOpen,
  language
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[language].controls;

  const handleChange = (key: keyof GalaxyParameters, value: number | string) => {
    setParameters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setParameters(DEFAULT_PARAMETERS);
  };

  return (
    <div className="absolute right-4 top-24 bottom-4 w-80 bg-glass backdrop-blur-md border border-glassBorder rounded-xl p-6 overflow-y-auto z-20 flex flex-col transition-all duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-white">{t.title}</h2>
        <div className="flex gap-3">
            <button
                onClick={handleReset}
                className="text-gray-400 hover:text-white transition-colors"
                title={t.reset}
            >
                <RotateCcw size={18} />
            </button>
            <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
            >
                <X size={20} />
            </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Star Count */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <label className="text-gray-300">{t.starsCount}</label>
            <span className="font-mono text-xs text-gray-400">{parameters.count.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={parameters.count}
            onChange={(e) => handleChange('count', parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Star Size */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <label className="text-gray-300">{t.starSize}</label>
            <span className="font-mono text-xs text-gray-400">{parameters.size.toFixed(3)}</span>
          </div>
          <input
            type="range"
            min="0.001"
            max="0.1"
            step="0.001"
            value={parameters.size}
            onChange={(e) => handleChange('size', parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Galaxy Radius */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <label className="text-gray-300">{t.galaxyRadius}</label>
            <span className="font-mono text-xs text-gray-400">{parameters.radius}</span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={parameters.radius}
            onChange={(e) => handleChange('radius', parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Spiral Arms */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <label className="text-gray-300">{t.spiralArms}</label>
            <span className="font-mono text-xs text-gray-400">{parameters.branches}</span>
          </div>
          <input
            type="range"
            min="2"
            max="10"
            step="1"
            value={parameters.branches}
            onChange={(e) => handleChange('branches', parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Spiral Spin (Intensity) */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <label className="text-gray-300">{t.spiralIntensity}</label>
            <span className="font-mono text-xs text-gray-400">{parameters.spin.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="-5"
            max="5"
            step="0.1"
            value={parameters.spin}
            onChange={(e) => handleChange('spin', parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Randomness */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <label className="text-gray-300">{t.randomness}</label>
            <span className="font-mono text-xs text-gray-400">{parameters.randomness.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="2"
            step="0.01"
            value={parameters.randomness}
            onChange={(e) => handleChange('randomness', parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

         {/* Randomness Power */}
         <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <label className="text-gray-300">{t.randomnessPower}</label>
            <span className="font-mono text-xs text-gray-400">{parameters.randomnessPower}</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            step="0.1"
            value={parameters.randomnessPower}
            onChange={(e) => handleChange('randomnessPower', parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <hr className="border-glassBorder" />

        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase">{t.coreColor}</label>
                <div className="flex items-center gap-2">
                    <input
                        type="color"
                        value={parameters.insideColor}
                        onChange={(e) => handleChange('insideColor', e.target.value)}
                        className="w-full h-10 bg-transparent rounded cursor-pointer border-0 p-0"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase">{t.edgeColor}</label>
                <div className="flex items-center gap-2">
                    <input
                        type="color"
                        value={parameters.outsideColor}
                        onChange={(e) => handleChange('outsideColor', e.target.value)}
                        className="w-full h-10 bg-transparent rounded cursor-pointer border-0 p-0"
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
