package ua.nure.training.service;

import ua.nure.training.entity.User;

public interface UserService {
    User register(User user);

    User findByLogin(String login);

    User findById(Integer id);

    void delete(Integer id);
}
