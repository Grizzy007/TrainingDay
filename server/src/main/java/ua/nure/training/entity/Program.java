package ua.nure.training.entity;


import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "programs")
public class Program {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    @Column(name = "program_name")
    private String name;
    @Column(name = "duration")
    private Integer duration;
    @Column(name = "muscle_group")
    private String group;
    @Column(name = "description")
    private String description;
    @Column(name = "definition")
    private String definition;
    @Column(name = "link")
    private String link;
    @ManyToOne(cascade = {CascadeType.ALL})
    private Status status;
    @ManyToOne
    private Trainer trainer;

    @ManyToMany(mappedBy = "programs")
    private Set<User> users;

    public Program(String name, Integer duration, String group, Trainer trainer, String description,
                   String definition, String link) {
        this.name = name;
        this.duration = duration;
        this.group = group;
        this.trainer = trainer;
        this.description = description;
        this.status = new Status("NEW");
        this.definition = definition;
        this.link = link;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public Program() {
    }

    public Program(String name, Integer duration, String description) {
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

    public void setStatus(String status) {
        this.status.setName(status);
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Trainer getTrainer() {
        return trainer;
    }

    public void setTrainer(Trainer trainer) {
        this.trainer = trainer;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}

