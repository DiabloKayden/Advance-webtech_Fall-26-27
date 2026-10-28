import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  create(dto: CreateEmployeeDto): Promise<Employee> {
    return this.employeeRepository.save(this.employeeRepository.create(dto));
  }

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find({ order: { id: 'ASC' } });
  }

  async findOne(id: number): Promise<Employee> {
    const employee = await this.employeeRepository.findOneBy({ id });
    if (!employee) throw new NotFoundException(`Employee with ID ${id} not found`);
    return employee;
  }

  async update(id: number, dto: UpdateEmployeeDto): Promise<Employee> {
    const employee = await this.findOne(id);
    Object.assign(employee, dto);
    return this.employeeRepository.save(employee);
  }

  async remove(id: number): Promise<{ message: string; id: number }> {
    const employee = await this.findOne(id);
    await this.employeeRepository.remove(employee);
    return { message: 'Employee deleted successfully', id };
  }
}
