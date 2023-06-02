package ua.nure.training.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import ua.nure.training.entity.Program;

public interface ProgramRepo extends CrudRepository<Program, Integer> {
    Iterable<Program> findProgramsByStatusName(String s);
    Page<Program> findAll(Pageable pageable);
    Page<Program> findByStatusName(String name, Pageable pageable);
}
