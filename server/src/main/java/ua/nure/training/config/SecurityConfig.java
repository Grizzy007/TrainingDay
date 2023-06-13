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


@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {


    private JwtTokenProvider jwtTokenProvider;

    private static final String PROFILE_ENDPOINT = "/api/profile";
    private static final String PROGRAM_ENDPOINT = "/api/catalog/**";
    private static final String SUGGEST_ENDPOINT = "/api/suggest";
    private static final String GUEST_ENDPOINT = "/**";

    public SecurityConfig(@Lazy JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable();
        http.
                httpBasic().disable()
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

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("*");
        configuration.addAllowedMethod("*");
        configuration.addAllowedHeader("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

}
