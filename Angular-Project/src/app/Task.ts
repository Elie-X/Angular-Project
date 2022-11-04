export interface Task {
    //Question mark means optional
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}