package ua.nure.training.entity.dto;

import lombok.Data;
import ua.nure.training.entity.User;

import java.util.Calendar;
import java.util.Optional;

@Data
public class UserDto {
    private String login;
    private Calendar birthday;
    private String nickname;
    private String phoneNumber;

    public static UserDto fromUser(User user){
        UserDto userDto = new UserDto();
        userDto.setLogin(user.getLogin());
        userDto.setBirthday(user.getBirthday());
        userDto.setNickname(user.getNickname());
        userDto.setPhoneNumber(user.getPhoneNumber());

        return userDto;
    }

    public Optional<String> getLogin() {
        return Optional.of(login);
    }

    public Optional<Calendar> getBirthday() {
        if(birthday == null){
            return Optional.empty();
        }
        return Optional.of(birthday);
    }

    public Optional<String> getNickname() {
        if(nickname == null){
            return Optional.empty();
        }
        return Optional.of(nickname);
    }

    public Optional<String> getPhoneNumber() {
        if(phoneNumber == null){
            return Optional.empty();
        }
        return Optional.of(phoneNumber);
    }
}
