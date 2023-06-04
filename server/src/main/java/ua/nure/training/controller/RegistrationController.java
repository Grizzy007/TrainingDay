package ua.nure.training.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ua.nure.training.entity.User;
import ua.nure.training.entity.dto.AuthDto;
import ua.nure.training.service.UserService;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping(value = "/api/v1/auth/")
public class RegistrationController {
    private final UserService userService;

    @Autowired
    public RegistrationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/registration")
    public ResponseEntity login(@RequestBody AuthDto requestDto) {
        String username = requestDto.getLogin();
        String password = requestDto.getPassword();

        if (userService.findByLogin(username) != null) {
            throw new BadCredentialsException("Login already used!");
        }

        User newUser = new User();
        newUser.setLogin(username);
        newUser.setPassword(password);
        userService.register(newUser);

        log.info("User logged in");

        Map<Object, Object> response = new HashMap<>();
        response.put("username", username);
        response.put("password", newUser.getPassword());

        return ResponseEntity.ok(response);
    }
}
