export interface car {
   id: number;
  brand: string;
  model: string;
  cllass: 'A' | 'B' | 'C';
}

export interface user {
  id: number;
  name: string;
  age: number;
}

export interface interest {
  id: number;
  userId: number;
  carId: number;
}