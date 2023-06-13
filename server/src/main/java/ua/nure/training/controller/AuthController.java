package ua.nure.training.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import ua.nure.training.entity.User;
import ua.nure.training.entity.dto.AuthDto;
import ua.nure.training.entity.dto.UserDto;
import ua.nure.training.security.jwt.JwtTokenProvider;
import ua.nure.training.security.jwt.JwtUser;
import ua.nure.training.security.jwt.JwtUserFactory;
import ua.nure.training.service.UserService;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/api/")
public class AuthController {

    private final JwtTokenProvider jwtTokenProvider;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AuthController(JwtTokenProvider jwtTokenProvider, UserService userService, PasswordEncoder passwordEncoder) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("auth/login")
    public ResponseEntity login(@RequestBody AuthDto requestDto) {
        String username = requestDto.getLogin();
        String password = requestDto.getPassword();

        User user = userService.findByLogin(username);
        if (user == null || !passwordEncoder.matches(password, user.getPassword())) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "Incorrect login or password!");
            return new ResponseEntity<>(error, HttpStatus.NOT_ACCEPTABLE);
        }
        log.info("User logged in");

        JwtUser jwtUser = JwtUserFactory.creat(user);
        Authentication authentication = new UsernamePasswordAuthenticationToken(jwtUser, null, jwtUser.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDto dto = UserDto.fromUser(user);
        String token = jwtTokenProvider.createToken(jwtUser, user.getRoles());
        Map<Object, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("email", dto.getEmail().orElse(null));
        response.put("nickname", dto.getNickname().orElse(null));
        response.put("birthday", dto.getBirthday().orElse(null));
        response.put("phoneNumber", dto.getPhoneNumber().orElse(null));

        return ResponseEntity.ok(response);
    }

    @GetMapping("check")
    public ResponseEntity check(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        JwtUser jwtUser = (JwtUser) auth.getPrincipal();
        User user = userService.findByLogin(jwtUser.getLogin());

        if(user == null && user.getPassword().equals(jwtUser.getPassword())){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        UserDto dto = UserDto.fromUser(user);

        String token = jwtTokenProvider.createToken(jwtUser, user.getRoles());
        Map<Object, Object> response = new HashMap<>();
        response.put("email", dto.getEmail().orElse(null));
        response.put("nickname", dto.getNickname().orElse(null));
        if(dto.getBirthday().isPresent()){
            response.put("birthday", dto.getBirthday().get());
        }
        response.put("birthday", dto.getBirthday().orElse(null));
        response.put("phoneNumber", dto.getPhoneNumber().orElse(null));
        response.put("token", token);

        return ResponseEntity.ok(response);
    }
}


