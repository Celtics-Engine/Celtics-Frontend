package apibackend.dependency;

import dagger.Component;

import javax.inject.Singleton;

@Singleton
@Component(modules = {MapperModule.class})
public interface ServiceComponent {
	//CreateUserActivity provideCreateUserActivity();

}
