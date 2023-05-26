export interface Event {
  description: string;
  startDate: string;
  type: string;
  abpId: number;
  competition: {
    label: string;
    flagLabel: string;
    sportLabel: string;
  };
}
