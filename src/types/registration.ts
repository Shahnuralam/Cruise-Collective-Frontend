export interface RegistrationInput {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  dob: string;
  country: string;
  address: string;
  cruises: string;
  destinations: number[];
  interests: number[];
  departures: number[];
  terms: boolean;
  marketing: boolean;
  privacy: boolean;
  password: string;
}
