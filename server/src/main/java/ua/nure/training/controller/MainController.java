package ua.nure.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ua.nure.training.entity.Program;
import ua.nure.training.service.ProgramService;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/")
public class MainController {
    private final ProgramService programService;

    @Autowired
    public MainController(ProgramService programService) {
        this.programService = programService;
    }

    @GetMapping(value = {"/", "/home"})
    public String main() {
        return "Hello world!";
    }

    @GetMapping(value = "/api/catalog")
    public String catalog(
            Model model,
            @RequestParam(value = "size", required = false, defaultValue = "5") Integer size,
            @RequestParam(value = "page", required = false, defaultValue = "0") Integer page) {
        Page<Program> catalog = programService.getByStatus("ACCEPTED", PageRequest.of(page, size));
        model.addAttribute("programs", catalog);
        catalog.stream().toList();
        List<Integer> pageNumbers = IntStream.rangeClosed(1, catalog.getTotalPages())
                .boxed()
                .collect(Collectors.toList());
        model.addAttribute("nums", pageNumbers);
        return "programs";
    }


    @GetMapping(value = "/api/catalog/{id}")
    @PreAuthorize("hasAuthority('read')")
    public String programInfo(@PathVariable(value = "id") Integer id, Model model) {
        Program program = programService.getInfoAboutProgram(id);
        model.addAttribute("name", program.getName());
        model.addAttribute("program", program);
        return "details";
    }

}



