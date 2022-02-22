package apibackend.dependency;


import apibackend.dynamodb.providers.DynamoDbClientProvider;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import dagger.Module;
import dagger.Provides;

import javax.inject.Singleton;

@Module
public class MapperModule {

	@Singleton
	@Provides
	public DynamoDBMapper provideDynamoDBMapper() {
		return new DynamoDBMapper(DynamoDbClientProvider.getDynamoDBClient(Regions.US_WEST_2));
	}
}

