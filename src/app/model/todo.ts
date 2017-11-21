import { Priority } from '../enum/priority';

export class TODO {
  id: number;
  description: string;
  priority: Priority;

  // TODO:

  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.description = data.description;
      this.priority = data.priority;
    }
  }

}
