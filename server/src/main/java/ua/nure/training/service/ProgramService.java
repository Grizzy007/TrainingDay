package ua.nure.training.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import ua.nure.training.entity.Program;

public interface ProgramService {

    Program getInfoAboutProgram(Integer id);

    Program save(Program program);

    Program addNewProgram(Program program);

    Page<Program> getByStatus(String status, Pageable pageable);

    Page<Program> getAll(Pageable pageable);

    void changeStatus(Program program, String status, Integer id);

    void updateProgram(Integer id, String name, Integer duration, String description);

    void deleteProgram(Integer id);
}
