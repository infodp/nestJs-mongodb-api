import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  constructor(@InjectConnection() private connection: Connection) {}

  async onModuleInit() {
    const isConnected = this.connection.readyState === 1;
    console.log(`MongoDB connection status: ${isConnected ? 'Connected' : 'Not Connected'}`);
    
  }
}
