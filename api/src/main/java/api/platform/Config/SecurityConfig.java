package api.platform.Config;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.stereotype.Component;

/**
 * 启用 Spring Security
 */
@Component
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                // basic 认证
                .httpBasic()
                // 设置授权配置
                .and().authorizeRequests()
                // 开放司机注册接口
                .antMatchers("/user/driverRegister").permitAll()
                .antMatchers("/user/ownerRegister").permitAll()
                // 任何请求都需要认证
                .anyRequest().authenticated()
                // 禁用 csrf
                .and().csrf().disable();
    }
}
