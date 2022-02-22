package apibackend.dependency;

import apibackend.activity.*;
import apibackend.dynamodb.CelticAssetsDao;
import apibackend.dynamodb.CelticUsersDao;
import apibackend.dynamodb.providers.DynamoDbClientProvider;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;


/**
 * This class manages service dependencies.
 */
public class App {
	private DynamoDBMapper dynamoDBMapper;
	private AmazonDynamoDB amazonDynamoDB;

	public CreateAssetActivity provideCreateAssetActivity() {
		return new CreateAssetActivity(provideCelticAssetsDao(), provideCelticUsersDao());
	}

	public CreateUserActivity provideCreateUserActivity() {
        return new CreateUserActivity(provideCelticUsersDao());
    }

	public UserLoginActivity provideUserLoginActivityProvider() {
		return new UserLoginActivity(provideCelticUsersDao());
	}

	public AssetSearchActivity provideAssetSearchActivity() {return new AssetSearchActivity(provideCelticAssetsDao());}
	public UpdatePasswordActivity provideUpdatePasswordActivityProvider() {
		return new UpdatePasswordActivity(provideCelticUsersDao());
	}

	public GetAssetActivity providerGetAssetActivity() { return new GetAssetActivity(provideCelticAssetsDao());}

	public DeleteUserActivity provideDeleteUserActivity() {
		return new DeleteUserActivity(provideCelticUsersDao());
	}


	private CelticUsersDao provideCelticUsersDao() {
		return new CelticUsersDao(provideAmazonDynamoDB());
	}

    private CelticAssetsDao provideCelticAssetsDao() {
        return new CelticAssetsDao(provideAmazonDynamoDB());
    }



	private AmazonDynamoDB provideAmazonDynamoDB() {
		if (amazonDynamoDB == null) {
			amazonDynamoDB = AmazonDynamoDBClientBuilder.standard().withRegion(Regions.US_WEST_2).build();
		}
		return amazonDynamoDB;
	}

	private DynamoDBMapper provideDynamoDBMapper() {
		if (null == dynamoDBMapper) {
			dynamoDBMapper = new DynamoDBMapper(DynamoDbClientProvider.getDynamoDBClient(Regions.US_WEST_2));
		}
		return dynamoDBMapper;
	}
}

