package ua.nure.training.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import ua.nure.training.entity.User;
import ua.nure.training.entity.dto.UserDto;
import ua.nure.training.security.jwt.JwtUser;
import ua.nure.training.service.UserService;

@Slf4j
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/api/")
public class ProfileController {
    private final UserService userService;

    public ProfileController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "profile")
    public ResponseEntity<UserDto> getProfile(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        JwtUser JwtUser = (JwtUser) auth.getPrincipal();
        User user = userService.findByLogin(JwtUser.getLogin());

        if(user == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        UserDto result = UserDto.fromUser(user);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PatchMapping(value = "profile")
    public ResponseEntity<UserDto> updateUser(@RequestBody UserDto userDto){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        JwtUser jwtUser = (JwtUser) auth.getPrincipal();
        User user = userService.findByLogin(jwtUser.getLogin());

        if(user == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        user.setLogin(userDto.getLogin().orElse(null));
        user.setBirthday(userDto.getBirthday().orElse(null));
        user.setNickname(userDto.getNickname().orElse(null));
        user.setPhoneNumber(userDto.getPhoneNumber().orElse(null));

        userService.update(user);

        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }
}
