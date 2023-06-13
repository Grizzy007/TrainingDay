package ua.nure.training.entity.dto;

import lombok.Data;
import ua.nure.training.entity.Program;
import ua.nure.training.entity.Status;
import ua.nure.training.repository.StatusRepository;

@Data
public class ProgramDto {
    private String name;
    private Integer duration;
    private String muscleGroup;
    private String description;
    private Status status;
    private String link;
    private String definition;

    private StatusRepository statusRepository;

    public ProgramDto(String name, Integer duration, String group, String description, String definition, String link) {
        this.name = name;
        this.duration = duration;
        this.muscleGroup = group;
        this.description = description;
        if(!statusRepository.findByName("NEW").isPresent()) {
            this.status = new Status("NEW");
        } else {
            this.status = statusRepository.findByName("NEW").get();
        }
        this.definition = definition;
        this.link = link;
    }

    public static Program toProgram(ProgramDto dto){
        Program program = new Program();
        program.setStatus(dto.getStatus());
        program.setDescription(dto.getDescription());
        program.setDuration(dto.getDuration());
        program.setName(dto.getName());
        program.setGroup(dto.getMuscleGroup());
        program.setLink(dto.getLink());
        program.setDefinition(dto.getDefinition());
        program.setTrainer(null);

        return program;
    }
}

