package ua.nure.tkp.trainingday.entity.dto;

import ua.nure.tkp.trainingday.entity.Status;

public class ProgramDto {
    private Integer id;
    private String name;
    private Integer duration;
    private String group;
    private String description;
    private Status status;
    private String definition;

    public ProgramDto(String name, Integer duration, String group, String description, String definition) {
        this.name = name;
        this.duration = duration;
        this.group = group;
        this.description = description;
        this.status = new Status("NEW");
        this.definition = definition;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public ProgramDto() { }

    public ProgramDto(String name, Integer duration, String description) {
        this.name = name;
        this.duration = duration;
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Status getStatus() {
        return status;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }
}

