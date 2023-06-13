package ua.nure.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.web.bind.annotation.*;
import ua.nure.training.entity.Program;
import ua.nure.training.entity.dto.ProgramDto;
import ua.nure.training.service.ProgramService;

import javax.management.BadAttributeValueExpException;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api/")
public class SuggestProgramController {
    private final ProgramService programService;

    @Autowired
    public SuggestProgramController(ProgramService programService) {
        this.programService = programService;
    }

    @PostMapping(value = "suggest-new-program")
    public ResponseEntity suggestProgram(@RequestBody ProgramDto dto) throws BadAttributeValueExpException {
        if(dto.equals(null)){
            throw new BadAttributeValueExpException("Program is empty!");
        }
        Program program = ProgramDto.toProgram(dto);
        programService.save(program);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
