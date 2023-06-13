package ua.nure.training.security.jwt;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Date;

public class JwtUser implements UserDetails {

    private Integer id;
    private String login;
    private String password;
    private String nickname;
    private LocalDate birthday;
    private String phoneNumber;
    private final Date lastPasswordReset;
    private final Collection<? extends GrantedAuthority> authorities;


    public JwtUser(Integer id, String login, String password, String nickname, LocalDate birthday, String phoneNumber,
                   Date lastPasswordReset, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.nickname = nickname;
        this.birthday = birthday;
        this.phoneNumber = phoneNumber;
        this.lastPasswordReset = lastPasswordReset;
        this.authorities = authorities;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return login;
    }

    public Integer getId() {
        return id;
    }

    public String getLogin() {
        return login;
    }

    public String getNickname() {
        return nickname;
    }

    public LocalDate getBirthday() {
        return birthday;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    @JsonIgnore
    public Date getLastPasswordReset() {
        return lastPasswordReset;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
