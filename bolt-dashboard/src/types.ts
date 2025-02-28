export interface Country {
  id: string;
  name: string;
  laborCost: number;
  infrastructureScore: number;
  politicalStabilityScore: number;
  logisticsScore: number;
  timeToMarket: number;
  taxRate: number;
  tradeAgreements: string[];
  dataSources: {
    laborCost: string;
    infrastructure: string;
    politicalStability: string;
    logistics: string;
    timeToMarket: string;
    taxRate: string;
  };
  lastUpdated: {
    laborCost: string;
    infrastructure: string;
    politicalStability: string;
    logistics: string;
    timeToMarket: string;
    taxRate: string;
  };
}

export interface ComparisonMetric {
  name: string;
  key: keyof Country;
  description: string;
  format: (value: any) => string;
  isHigherBetter: boolean;
}