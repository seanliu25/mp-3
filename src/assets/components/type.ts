// type.tsx
export type State = {
    result: string | number;
  };
  
  export type Action = {
    type: "add" | "subtract" | "multiply" | "divide" | "clear";
    first?: string;
    second?: string;
  };
  