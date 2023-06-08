package ua.nure.training.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import ua.nure.training.entity.Role;
import ua.nure.training.entity.User;
import ua.nure.training.repository.RoleRepository;
import ua.nure.training.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Autowired
    public void setRoleRepository(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Autowired
    public void setPasswordEncoder(BCryptPasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public User register(User user) {
        Role roleUser = roleRepository.findByName("USER").orElse(null);
        List<Role> userRoles = new ArrayList<>();
        userRoles.add(roleUser);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles(userRoles);

        User registered = userRepository.save(user);
        log.info("New User registered {" + user.getLogin() + "}");
        return registered;
    }

    @Override
    public User findByLogin(String login) {
        User result = userRepository.findByLogin(login).orElse(null);
        if (result == null) {
            log.info("User already exist");
            return null;
        }
        log.info("User found {" + result.getLogin() + "}");
        return result;
    }

    @Override
    public User findById(Integer id) {
        User result = userRepository.findById(id).orElse(null);
        if (result == null) {
            log.info("User NOT found");
            return null;
        }
        log.info("User found {" + result + "}");
        return result;
    }

    @Override
    public void delete(Integer id) {
        userRepository.deleteById(id);
        log.info("User {} deleted", id);
    }

    @Override
    public void update(User user) throws UsernameNotFoundException {
        User result = userRepository.findById(user.getId()).orElse(null);
        if (result == null) {
            log.info("User NOT found");
           throw new UsernameNotFoundException("User NOT found");
        }
        userRepository.save(user);
    }
}
