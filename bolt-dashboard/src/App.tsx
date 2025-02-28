import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { countries } from './data';
import { CountryCard } from './components/CountryCard';
import { ComparisonChart } from './components/ComparisonChart';
import type { Country } from './types';

function App() {
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  const [showSources, setShowSources] = useState(false);

  const toggleCountry = (country: Country) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c.id !== country.id)
        : [...prev, country]
    );
  };

  const sourceLinks = {
    'World Bank Political Stability Index': 'https://databank.worldbank.org/metadataglossary/worldwide-governance-indicators/series/PV.EST',
    'World Data - Global Income Statistics': 'https://www.worlddata.info/average-income.php',
    'World Bank Logistics Performance Index': 'https://lpi.worldbank.org/international/scorecard',
    'TradeLens - Supply Chain Visibility': 'https://www.tradelens.com/',
    'Marine Traffic - Global Ship Tracking': 'https://www.marinetraffic.com/en/ais/home/centerx:-12.0/centery:25.0/zoom:4',
    'USITC Harmonized Tariff Schedule 2024': 'https://hts.usitc.gov/current',
    'USA Customs Clearance - Textile Import Guide': 'https://usacustomsclearance.com/process/importing-textiles-to-the-us/',
    'Sobel - US Textile Import Requirements': 'https://www.sobelnet.com/importation-of-textiles-into-the-united-states/',
    'US Customs and Border Protection': 'https://www.cbp.gov/trade',
    'Trading Economics': 'https://tradingeconomics.com/',
    'Eurostat': 'https://ec.europa.eu/eurostat',
    'INEGI': 'https://www.inegi.org.mx/',
    'China National Bureau of Statistics': 'http://www.stats.gov.cn/english/',
    'Thailand Board of Investment': 'https://www.boi.go.th/',
    'India Ministry of Statistics': 'https://mospi.gov.in/',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://brandlogos.net/wp-content/uploads/2014/10/guess-logo.png"
                alt="Guess Logo"
                className="h-12 w-auto"
              />
              <h1 className="text-2xl font-bold text-gray-900">
                Country Info Dashboard
              </h1>
            </div>
            <button
              onClick={() => setShowSources(!showSources)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="w-4 h-4" />
              {showSources ? 'Hide Sources' : 'Show Sources'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {showSources && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Sources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(sourceLinks).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink className="w-4 h-4" />
                  {name}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {countries.map((country) => (
              <CountryCard
                key={country.id}
                country={country}
                onClick={() => toggleCountry(country)}
                isSelected={selectedCountries.includes(country)}
              />
            ))}
          </div>
        </div>

        {selectedCountries.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Detailed US Textile Import Analysis
            </h2>
            <ComparisonChart countries={selectedCountries} />
          </div>
        )}

        {selectedCountries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Select countries above to see detailed textile import analysis for US market entry
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;