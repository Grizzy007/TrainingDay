package ua.nure.training.entity.dto;

import lombok.Data;
import ua.nure.training.entity.User;

import java.time.LocalDate;
import java.util.Optional;

@Data
public class UserDto {
    private String email;
    private LocalDate birthday;
    private String nickname;
    private String phoneNumber;

    public static UserDto fromUser(User user){
        UserDto userDto = new UserDto();
        userDto.setEmail(user.getLogin());
        userDto.setBirthday(user.getBirthday());
        userDto.setNickname(user.getNickname());
        userDto.setPhoneNumber(user.getPhoneNumber());

        return userDto;
    }

    public Optional<String> getEmail() {
        return Optional.of(email);
    }

    public Optional<LocalDate> getBirthday() {
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
