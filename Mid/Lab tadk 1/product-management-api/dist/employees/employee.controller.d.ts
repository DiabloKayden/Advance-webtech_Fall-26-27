import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(dto: CreateEmployeeDto): Promise<import("./employee.entity").Employee>;
    findAll(): Promise<import("./employee.entity").Employee[]>;
    findOne(id: number): Promise<import("./employee.entity").Employee>;
    update(id: number, dto: UpdateEmployeeDto): Promise<import("./employee.entity").Employee>;
    remove(id: number): Promise<{
        message: string;
        id: number;
    }>;
}
