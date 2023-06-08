package ua.nure.training.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import ua.nure.training.security.jwt.JwtConfigurer;
import ua.nure.training.security.jwt.JwtTokenProvider;

import java.util.Arrays;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private JwtTokenProvider jwtTokenProvider;

    private static final String PROFILE_ENDPOINT = "/api/profile";
    private static final String PROGRAM_ENDPOINT = "/api/catalog/**";
    private static final String GUEST_ENDPOINT = "/**";

    public SecurityConfig(@Lazy JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("https://localhost:3000", "https://localhost:3001", "https://localhost:8080"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "PUT", "DELETE"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.
                httpBasic().disable()
                .csrf().disable()
                .cors().and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers(GUEST_ENDPOINT).permitAll()
                .antMatchers(PROFILE_ENDPOINT).hasRole("USER")
                .antMatchers(PROGRAM_ENDPOINT).hasRole("USER")
                .anyRequest().authenticated()
                .and()
//                .formLogin()
//                .loginPage(LOGIN_ENDPOINT)
//                .permitAll()
//                .and()
//                .logout()
//                .and()
                .apply(new JwtConfigurer(jwtTokenProvider));

    }
}
