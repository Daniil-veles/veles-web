// import { IFormField } from "./form.interface";

// Тип для описания состояния модального окна
// export interface ModalState {
//   isOpen: boolean;
//   type: 'update' | 'verify'; // Добавлено для различения типа модального окна
//   title: string;
//   buttonText: string;
//   field?: IFormField | undefined; // Поле может быть необязательным в зависимости от типа модального окна
//   verificationType?: 'email' | 'phone'; // Обязательно только для модальных окон верификации
// }

interface IProfileObjectEmployee {
  picture: string;
  name: string
}

export interface IProfileObject {
  title: string;
  data: string;
  priority: string;
  tasks: number;
  activeTasks: number;
  employee: IProfileObjectEmployee[];
}

export interface IProfileTask {
  title: string;
  startDate: string;
  finishDate: string;
  status: string;
}

export interface IProfileEmployee {
  avatar: string;
  name: string;
  position: string;
  level: string;
}