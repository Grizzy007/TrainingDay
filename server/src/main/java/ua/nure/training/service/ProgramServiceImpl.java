package ua.nure.training.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import ua.nure.training.entity.Program;
import ua.nure.training.entity.dto.ProgramDto;
import ua.nure.training.repository.ProgramRepo;

import java.util.Optional;

@Service("programService")
public class ProgramServiceImpl implements ProgramService {
    private final ProgramRepo programRepo;
    private static final Logger LOGGER = LoggerFactory.getLogger(ProgramServiceImpl.class);

    @Autowired
    public ProgramServiceImpl(ProgramRepo programRepo) {
        this.programRepo = programRepo;
    }

    public Program getInfoAboutProgram(Integer id) {
        Optional<Program> prog = programRepo.findById(id);
        if (prog.isPresent()) {
            return prog.get();
        }
        return new Program();
    }

    public Program save(Program program) {
        Program toVerify = new Program(
                program.getName(), program.getDuration(), program.getGroup(), null, program.getDescription(),
                program.getDefinition(), program.getLink());
        programRepo.save(toVerify);
        LOGGER.info("Users program added {}", toVerify.getName());
        return toVerify;
    }

    public Program addNewProgram(Program program) {
        Program entity = new Program(program.getName(), program.getDuration(), program.getGroup(), program.getTrainer(), program.getDescription(),
                program.getDefinition(), program.getLink());
        entity.setStatus("ACCEPTED");
        programRepo.save(entity);
        LOGGER.info("Program from trainer added {}", entity.getName());
        return entity;
    }

    public Page<Program> getByStatus(String status, Pageable pageable) {
        return programRepo.findByStatusName(status, pageable);
    }

    public Page<Program> getAll(Pageable pageable) {
        return programRepo.findAll(pageable);
    }

    public void changeStatus(Program program, String status, Integer id) {
        Program prog = programRepo.findById(id).orElseThrow();
        prog.setTrainer(program.getTrainer());
        prog.setStatus(status);
        programRepo.save(prog);
    }

    public void updateProgram(Integer id, String name, Integer duration, String description) {
        Program program = programRepo.findById(id).orElseThrow();
        program.setName(name);
        program.setDuration(duration);
        program.setDescription(description);
        programRepo.save(program);
    }

    public void deleteProgram(Integer id) {
        Program program = programRepo.findById(id).orElseThrow();
        programRepo.delete(program);
        LOGGER.info("Program deleted {}", program.getName());
    }
}
