declare global {
  interface Event {
    id: string;
    hostId?: string;
    slug: string;
    token: string;
    kronoValue: number;
    hostCut: number;
    name?: string;
    description?: string;
    status: string;
    updatedAt: string;
    createdAt: string;
  }
}

export {};
