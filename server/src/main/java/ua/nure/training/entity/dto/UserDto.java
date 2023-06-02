package ua.nure.training.entity.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import ua.nure.training.entity.User;

@JsonIgnoreProperties
@Data
public class UserDto {
    private Integer id;
    private String login;
    private String phone;

    public User toUser(){
        User user = new User();
        user.setId(id);
        user.setLogin(login);
        user.setPhoneNumber(phone);

        return user;
    }

    public static UserDto fromUser(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        user.setLogin(user.getLogin());
        user.setPhoneNumber(user.getPhoneNumber());

        return userDto;
    }
}
