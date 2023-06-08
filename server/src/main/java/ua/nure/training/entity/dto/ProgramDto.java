package ua.nure.training.entity.dto;

import lombok.Data;
import ua.nure.training.entity.Status;

import java.util.List;

@Data
public class ProgramDto {
    private Integer id;
    private String name;
    private Integer duration;
    private String group;
    private String description;
    private Status status;
    private String link;
    private String definition;

    public ProgramDto(String name, Integer duration, String group, String description, String definition, String link) {
        this.name = name;
        this.duration = duration;
        this.group = group;
        this.description = description;
        this.status = new Status("NEW");
        this.definition = definition;
        this.link = link;
    }
}

