import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:12345@cluster0.gv9pm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), //colocar tu string de conexión de mongoDB
    StudentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
