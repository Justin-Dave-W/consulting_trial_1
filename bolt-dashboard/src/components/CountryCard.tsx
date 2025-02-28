import React from 'react';
import { Country } from '../types';
import { MapPin, Factory, Timer, Landmark, Info } from 'lucide-react';

interface CountryCardProps {
  country: Country;
  onClick: () => void;
  isSelected: boolean;
}

export function CountryCard({ country, onClick, isSelected }: CountryCardProps) {
  return (
    <div
      onClick={onClick}
      className={`p-6 rounded-lg shadow-md transition-all cursor-pointer ${
        isSelected
          ? 'bg-blue-50 border-2 border-blue-500'
          : 'bg-white hover:shadow-lg border-2 border-transparent'
      }`}
    >
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-blue-500" />
        <h3 className="text-xl font-semibold">{country.name}</h3>
      </div>
      
      <div className="space-y-3">
        <div>
          <div className="flex items-center gap-2">
            <Factory className="w-4 h-4 text-gray-500" />
            <div>
              <span className="text-gray-600">
                Labor Cost: ${country.laborCost.toFixed(2)}/day
              </span>
              <div className="text-xs text-gray-500 mt-0.5">
                Minimum Wage
              </div>
            </div>
          </div>
          <div className="ml-6 mt-1 text-xs text-gray-400 flex items-center gap-1">
            <Info className="w-3 h-3" />
            <span>Source: {country.dataSources.laborCost}</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2">
            <Timer className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">
              Time to US Market: {country.timeToMarket} days
            </span>
          </div>
          <div className="ml-6 mt-1 text-xs text-gray-400 flex items-center gap-1">
            <Info className="w-3 h-3" />
            <span>Source: {country.dataSources.timeToMarket}</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2">
            <Landmark className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">
              US Import Duty: {country.taxRate}%
            </span>
          </div>
          <div className="ml-6 mt-1 text-xs text-gray-400 flex items-center gap-1">
            <Info className="w-3 h-3" />
            <span>Source: {country.dataSources.taxRate}</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-sm font-medium text-gray-500 mb-2">Key Scores:</div>
        <div className="space-y-2">
          {[
            { name: 'Infrastructure', score: country.infrastructureScore, key: 'infrastructure' },
            { name: 'Political Stability', score: country.politicalStabilityScore, key: 'politicalStability' },
            { name: 'Logistics', score: country.logisticsScore, key: 'logistics' },
          ].map((item) => (
            <div key={item.name}>
              <div className="flex items-center gap-2">
                <div className="text-sm text-gray-600 w-32">{item.name}:</div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <div className="text-sm text-gray-600 w-8">{item.score}</div>
              </div>
              <div className="ml-32 mt-1 text-xs text-gray-400 flex items-center gap-1">
                <Info className="w-3 h-3" />
                <span>Source: {country.dataSources[item.key as keyof typeof country.dataSources]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}