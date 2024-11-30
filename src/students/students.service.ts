import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './schema/student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studenModel: Model<Student>
  ){}

  async create(createStudentDto: CreateStudentDto) {
    const createdStudent = new this.studenModel(createStudentDto);
    return createdStudent.save();
  }

  async findAll() {
    return this.studenModel.find().exec();
  }

  async findOne(id: string) {
    return this.studenModel.findById(id).exec();
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.studenModel.findByIdAndUpdate(id, updateStudentDto, {new:true}).exec()
  }

  async remove(id: string) {
    return this.studenModel.findByIdAndDelete(id).exec();
  }
}
