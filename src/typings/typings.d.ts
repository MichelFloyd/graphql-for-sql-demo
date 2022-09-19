interface tAirportCode {
  airportCode: string;
}

export interface tAirportName {
  airportName: {
    en: string;
    ru: string;
  };
}

interface tBooking {
  id: string;
}

export interface tCity {
  city: {
    en: string;
    ru: string;
  };
}

export interface tContext {
  req: tReq;
  res?: object;
}

export interface tCoordinates {
  coordinates: {
    x: number;
    y: number;
  };
}

export interface tReq {
  acceptsLanguages: (...args: string[]) => string;
  body: { query?: string; variables?: string };
  headers: object;
  language?: string;
  user?: { id: string };
}