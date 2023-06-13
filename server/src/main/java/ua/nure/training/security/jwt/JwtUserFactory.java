package ua.nure.training.security.jwt;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import ua.nure.training.entity.Role;
import ua.nure.training.entity.User;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public final class JwtUserFactory {
    public JwtUserFactory() {
    }

    public static JwtUser creat(User user) {
        return new JwtUser(user.getId(), user.getLogin(), user.getPassword(), user.getNickname(), user.getBirthday(),
                user.getPhoneNumber(), null, mapToGrantedAuthorities(new ArrayList<>(user.getRoles())));
    }

    private static Set<GrantedAuthority> mapToGrantedAuthorities(List<Role> userRoles) {
        return userRoles.stream()
                .map(role ->
                        new SimpleGrantedAuthority(role.getName())
                ).collect(Collectors.toSet());
    }
}

