package ua.nure.training.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.nure.training.entity.User;
import ua.nure.training.entity.dto.AuthDto;
import ua.nure.training.service.UserService;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/api/auth/")
public class RegistrationController {
    private final UserService userService;

    @Autowired
    public RegistrationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("registration")
    public ResponseEntity login(@RequestBody AuthDto requestDto) {
        String username = requestDto.getLogin();
        String password = requestDto.getPassword();

        if (userService.findByLogin(username) != null) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "User with this login already exist!");
            return new ResponseEntity<>(error, HttpStatus.NOT_ACCEPTABLE);
        }

        User newUser = new User();
        newUser.setLogin(username);
        newUser.setPassword(password);
        userService.register(newUser);

        log.info("User logged in");

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
