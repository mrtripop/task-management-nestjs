import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskStatus } from './tasks-status.enum';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {}
