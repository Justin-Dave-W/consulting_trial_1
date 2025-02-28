import { Country } from './types';

export const countries: Country[] = [
  {
    id: 'vietnam',
    name: 'Vietnam',
    laborCost: 6.80, // Updated to daily minimum wage
    infrastructureScore: 72,
    politicalStabilityScore: 64,
    logisticsScore: 77,
    timeToMarket: 25,
    taxRate: 16.5,
    tradeAgreements: ['RCEP', 'CPTPP', 'ASEAN', 'EVFTA'],
    dataSources: {
      laborCost: 'Vietnam National Wage Council - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'USITC HTS 2024 - Chapter 61-63 Textile Articles'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  },
  {
    id: 'mexico',
    name: 'Mexico',
    laborCost: 11.60, // Updated to daily minimum wage
    infrastructureScore: 76,
    politicalStabilityScore: 58,
    logisticsScore: 82,
    timeToMarket: 4,
    taxRate: 0,
    tradeAgreements: ['USMCA', 'Pacific Alliance', 'EU-Mexico FTA'],
    dataSources: {
      laborCost: 'Mexico National Minimum Wage Commission - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'USMCA Textile and Apparel Provisions'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  },
  {
    id: 'thailand',
    name: 'Thailand',
    laborCost: 10.00, // Updated to daily minimum wage
    infrastructureScore: 71,
    politicalStabilityScore: 62,
    logisticsScore: 76,
    timeToMarket: 24,
    taxRate: 17.2,
    tradeAgreements: ['RCEP', 'ASEAN', 'Thailand-Australia FTA'],
    dataSources: {
      laborCost: 'Thailand Ministry of Labour - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'USITC HTS 2024 - Chapter 61-63 Textile Articles'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  },
  {
    id: 'india',
    name: 'India',
    laborCost: 7.60, // Updated to daily minimum wage
    infrastructureScore: 68,
    politicalStabilityScore: 59,
    logisticsScore: 72,
    timeToMarket: 28,
    taxRate: 16.8,
    tradeAgreements: ['SAFTA', 'APTA', 'India-ASEAN FTA'],
    dataSources: {
      laborCost: 'India Ministry of Labour & Employment - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'USITC HTS 2024 - Chapter 61-63 Textile Articles'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  },
  {
    id: 'pakistan',
    name: 'Pakistan',
    laborCost: 6.00, // Updated to daily minimum wage
    infrastructureScore: 58,
    politicalStabilityScore: 42,
    logisticsScore: 65,
    timeToMarket: 32,
    taxRate: 16.9,
    tradeAgreements: ['SAFTA', 'Pakistan-China FTA', 'Pakistan-Malaysia FTA'],
    dataSources: {
      laborCost: 'Pakistan Minimum Wages Board - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'USITC HTS 2024 - Chapter 61-63 Textile Articles'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  },
  {
    id: 'philippines',
    name: 'Philippines',
    laborCost: 9.20, // Updated to daily minimum wage
    infrastructureScore: 67,
    politicalStabilityScore: 56,
    logisticsScore: 71,
    timeToMarket: 26,
    taxRate: 16.7,
    tradeAgreements: ['RCEP', 'ASEAN', 'Philippines-EFTA FTA'],
    dataSources: {
      laborCost: 'Philippines Department of Labor - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'USITC HTS 2024 - Chapter 61-63 Textile Articles'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  },
  {
    id: 'guatemala',
    name: 'Guatemala',
    laborCost: 10.80, // Updated to daily minimum wage
    infrastructureScore: 61,
    politicalStabilityScore: 48,
    logisticsScore: 68,
    timeToMarket: 6,
    taxRate: 0,
    tradeAgreements: ['CAFTA-DR', 'EU-Central America Association Agreement'],
    dataSources: {
      laborCost: 'Guatemala Ministry of Labor - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'CAFTA-DR Textile and Apparel Provisions'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  },
  {
    id: 'china',
    name: 'China',
    laborCost: 14.80, // Updated to daily minimum wage
    infrastructureScore: 85,
    politicalStabilityScore: 65,
    logisticsScore: 89,
    timeToMarket: 21,
    taxRate: 27.5,
    tradeAgreements: ['RCEP', 'China-ASEAN FTA', 'China-New Zealand FTA'],
    dataSources: {
      laborCost: 'China Ministry of Human Resources - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'USITC HTS 2024 - Chapter 61-63 + Section 301 Tariffs'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  },
  {
    id: 'cambodia',
    name: 'Cambodia',
    laborCost: 5.20, // Updated to daily minimum wage
    infrastructureScore: 58,
    politicalStabilityScore: 52,
    logisticsScore: 64,
    timeToMarket: 29,
    taxRate: 16.5,
    tradeAgreements: ['RCEP', 'ASEAN', 'Cambodia-China FTA'],
    dataSources: {
      laborCost: 'Cambodia Ministry of Labour - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'USITC HTS 2024 - Chapter 61-63 Textile Articles'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    laborCost: 8.40, // Updated to daily minimum wage
    infrastructureScore: 70,
    politicalStabilityScore: 61,
    logisticsScore: 75,
    timeToMarket: 27,
    taxRate: 16.8,
    tradeAgreements: ['RCEP', 'ASEAN', 'Indonesia-Australia CEPA'],
    dataSources: {
      laborCost: 'Indonesia Manpower Ministry - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'USITC HTS 2024 - Chapter 61-63 Textile Articles'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  },
  {
    id: 'italy',
    name: 'Italy',
    laborCost: 90.00, // Updated to daily minimum wage
    infrastructureScore: 89,
    politicalStabilityScore: 82,
    logisticsScore: 88,
    timeToMarket: 16,
    taxRate: 15.8,
    tradeAgreements: ['EU Single Market', 'EU FTAs', 'CETA'],
    dataSources: {
      laborCost: 'Italy Ministry of Labor - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'USITC HTS 2024 - Chapter 61-63 Textile Articles'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  },
  {
    id: 'myanmar',
    name: 'Myanmar',
    laborCost: 3.60, // Updated to daily minimum wage
    infrastructureScore: 52,
    politicalStabilityScore: 38,
    logisticsScore: 58,
    timeToMarket: 31,
    taxRate: 16.7,
    tradeAgreements: ['RCEP', 'ASEAN'],
    dataSources: {
      laborCost: 'Myanmar Ministry of Labour - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'USITC HTS 2024 - Chapter 61-63 Textile Articles'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  },
  {
    id: 'peru',
    name: 'Peru',
    laborCost: 12.40, // Updated to daily minimum wage
    infrastructureScore: 65,
    politicalStabilityScore: 54,
    logisticsScore: 69,
    timeToMarket: 12,
    taxRate: 0,
    tradeAgreements: ['Pacific Alliance', 'US-Peru FTA', 'Peru-EU FTA'],
    dataSources: {
      laborCost: 'Peru Ministry of Labor - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'US-Peru Trade Promotion Agreement - Textile Provisions'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  },
  {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    laborCost: 6.80, // Updated to daily minimum wage
    infrastructureScore: 61,
    politicalStabilityScore: 51,
    logisticsScore: 66,
    timeToMarket: 30,
    taxRate: 16.8,
    tradeAgreements: ['SAFTA', 'APTA', 'Sri Lanka-Singapore FTA'],
    dataSources: {
      laborCost: 'Sri Lanka Department of Labour - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'USITC HTS 2024 - Chapter 61-63 Textile Articles'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  },
  {
    id: 'turkey',
    name: 'Turkey',
    laborCost: 17.20, // Updated to daily minimum wage
    infrastructureScore: 75,
    politicalStabilityScore: 58,
    logisticsScore: 78,
    timeToMarket: 19,
    taxRate: 16.5,
    tradeAgreements: ['Turkey-EU Customs Union', 'Turkey-EFTA', 'Turkey-Malaysia FTA'],
    dataSources: {
      laborCost: 'Turkey Ministry of Labor - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'USITC HTS 2024 - Chapter 61-63 Textile Articles'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  },
  {
    id: 'tunisia',
    name: 'Tunisia',
    laborCost: 7.90, // Updated to daily minimum wage
    infrastructureScore: 64,
    politicalStabilityScore: 55,
    logisticsScore: 68,
    timeToMarket: 22,
    taxRate: 16.6,
    tradeAgreements: ['Tunisia-EU Association Agreement', 'GAFTA', 'Agadir Agreement'],
    dataSources: {
      laborCost: 'Tunisia Ministry of Social Affairs - 2024',
      infrastructure: 'World Bank Logistics Performance Index',
      politicalStability: 'World Bank Political Stability Index',
      logistics: 'TradeLens - Supply Chain Visibility',
      timeToMarket: 'Marine Traffic - Global Ship Tracking',
      taxRate: 'USITC HTS 2024 - Chapter 61-63 Textile Articles'
    },
    lastUpdated: {
      laborCost: '2024-03',
      infrastructure: '2024-02',
      politicalStability: '2024-01',
      logistics: '2024-03',
      timeToMarket: '2024-03',
      taxRate: '2024-03'
    }
  }
];