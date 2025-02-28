import React from 'react';
import { Country } from '../types';
import { Info } from 'lucide-react';

interface ComparisonChartProps {
  countries: Country[];
}

export function ComparisonChart({ countries }: ComparisonChartProps) {
  const metrics = [
    { name: 'Labor Cost', key: 'laborCost', format: (v: number) => `$${v.toFixed(2)}` },
    { name: 'Infrastructure', key: 'infrastructureScore', format: (v: number) => `${v}/100` },
    { name: 'Political Stability', key: 'politicalStabilityScore', format: (v: number) => `${v}/100` },
    { name: 'Logistics Score', key: 'logisticsScore', format: (v: number) => `${v}/100` },
    { name: 'Time to Market', key: 'timeToMarket', format: (v: number) => `${v} days` },
    { name: 'Tax Rate', key: 'taxRate', format: (v: number) => `${v}%` },
  ] as const;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Metric
            </th>
            {countries.map((country) => (
              <th
                key={country.id}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {country.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {metrics.map((metric) => (
            <React.Fragment key={metric.key}>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {metric.name}
                </td>
                {countries.map((country) => (
                  <td
                    key={country.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {metric.format(country[metric.key])}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-2 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Info className="w-4 h-4" />
                    <span>Source & Last Updated</span>
                  </div>
                </td>
                {countries.map((country) => (
                  <td key={country.id} className="px-6 py-2 text-xs text-gray-500">
                    <div>
                      <div>{country.dataSources[metric.key as keyof typeof country.dataSources]}</div>
                      <div className="text-gray-400 mt-1">
                        Updated: {country.lastUpdated[metric.key as keyof typeof country.lastUpdated]}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Trade Agreements
            </td>
            {countries.map((country) => (
              <td
                key={country.id}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                {country.tradeAgreements.join(', ')}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}