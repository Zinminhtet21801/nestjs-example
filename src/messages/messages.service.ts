import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

interface Message {
  findOne(id: string): Promise<Message>;
  findAll(): Promise<Message[]>;
  create(content: string): Promise<Message>;
}

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  async findOne(id: string) {
    return await this.messagesRepo.findOne(id);
  }

  async findAll() {
    return await this.messagesRepo.findAll();
  }

  async create(content: string) {
    return await this.messagesRepo.create(content);
  }
}

// 6
