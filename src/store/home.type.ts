export type HomeState= {
    url: {
      backdrop?: string;
      poster?: string;
      profile?: string;
    };
    genres: Record<number, Genre>; 
  }
  
export type Genre= {
    id: number;
    name: string;
}