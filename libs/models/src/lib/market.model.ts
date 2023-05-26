export interface Market {
  index: string;
  label: string;
  outcomes: Outcome[];
}

export interface Outcome {
  label: string;
  price: number;
}
