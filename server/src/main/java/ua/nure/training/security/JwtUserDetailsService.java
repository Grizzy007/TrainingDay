package ua.nure.training.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ua.nure.training.entity.User;
import ua.nure.training.security.jwt.JwtUser;
import ua.nure.training.security.jwt.JwtUserFactory;
import ua.nure.training.service.UserService;

@Service
@Slf4j
public class JwtUserDetailsService implements UserDetailsService {

    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        User user = userService.findByLogin(login);

        if (user == null) {
            throw new UsernameNotFoundException("User with login: " + login + " not found");
        }
        JwtUser jwtUser = JwtUserFactory.creat(user);
        log.info("User successfully loaded {}", login);

        return jwtUser;
    }
}
