package ua.nure.training.entity.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import ua.nure.training.entity.User;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class AdminDto {
    private Integer id;
    private String login;
    private String phone;

    public User toUser() {
        User user = new User();
        user.setId(id);
        user.setLogin(login);
        user.setPhoneNumber(phone);

        return user;
    }

    public static AdminDto fromUser(User user) {
        AdminDto adminUserDto = new AdminDto();
        adminUserDto.setId(user.getId());
        adminUserDto.setLogin(user.getLogin());
        adminUserDto.setPhone(user.getPhoneNumber());
        return adminUserDto;
    }
}
