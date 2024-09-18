export type AddTodoRes = {
    title: string;
  };
  
  export type DeleteTodoRes = {
    id: string;
  };
  
  export type Todo = {
    title: string;
    id: string;
    completed: boolean;
  };
  
  export type GetTodoRes = Todo[];