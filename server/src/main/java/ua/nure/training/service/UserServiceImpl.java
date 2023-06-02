package ua.nure.training.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import ua.nure.training.entity.Role;
import ua.nure.training.entity.User;
import ua.nure.training.entity.login.ERole;
import ua.nure.training.repository.RoleRepository;
import ua.nure.training.repository.UserRepository;

import java.util.HashSet;
import java.util.Set;

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

    public void setRoleRepository(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public void setPasswordEncoder(BCryptPasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public User register(User user) {
        Role roleUser = roleRepository.findByName(ERole.USER).get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(roleUser);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles(userRoles);

        User registered = userRepository.save(user);
        log.info("New User registered {" + user.getLogin() + "}");
        return registered;
    }

    @Override
    public User findByLogin(String login) {
        User result = userRepository.findByLogin(login).get();
        log.info("User found {" + result.getLogin() + "}");
        if (result == null) {
            log.info("User already exist");
            return null;
        }
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
}
