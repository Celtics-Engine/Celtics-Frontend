package apibackend.dynamodb;

import apibackend.dynamodb.models.CelticUser;
import apibackend.exception.CelticUsersNotFoundException;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ScanRequest;
import com.amazonaws.services.dynamodbv2.model.ScanResult;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class CelticUsersDao {
	private final AmazonDynamoDB client;
	private final DynamoDBMapper dynamoDbMapper;


	public CelticUsersDao(AmazonDynamoDB amazonDynamoDB) {
		this.client = amazonDynamoDB;
		this.dynamoDbMapper = new DynamoDBMapper(client);
	}

	public void load(CelticUser celticUser) {
		this.dynamoDbMapper.load(celticUser);
	}

	public CelticUser getUserById(String userId) {
		return dynamoDbMapper.load(CelticUser.class, userId);
	}

	public CelticUser getCelticUserFromUserName(String username) {

		Map<String, AttributeValue> names = new HashMap<>();

		names.put(":username", new AttributeValue().withS(username));

		ScanRequest scanRequest = new ScanRequest()
				.withTableName("celtic_users")
				.withExpressionAttributeValues(names)
				.withFilterExpression("username = :username");


		ScanResult result = client.scan(scanRequest);


		if (result.getItems().stream().findFirst().isEmpty()) {
			return null;
		} else {
			return dynamoDbMapper.load(CelticUser.class,
					result.getItems().stream().findFirst().get().get("user_id").getS());
		}
	}

	public CelticUser getCelticUserScan(String id) {
		ScanRequest scanRequest = new ScanRequest()
				.withTableName("celtic_users")
				.withFilterExpression("user_id = :id")
				.withExpressionAttributeValues(new HashMap<String, AttributeValue>() {{
					put(":id", new AttributeValue().withS(id));
				}});

		ScanResult scanResult = client.scan(scanRequest);

		if (scanResult.getCount() == 0) {
			throw new CelticUsersNotFoundException(id);
		}

		return dynamoDbMapper.marshallIntoObject(CelticUser.class, scanResult.getItems().get(0));
	}


	public CelticUser getCelticUsers(String userId) {
		CelticUser celticUser = this.dynamoDbMapper.load(CelticUser.class, userId);
		if (celticUser == null) {
			throw new CelticUsersNotFoundException("Could not find playlist with id " + userId);
		}
		return celticUser;
	}

	public List<String> getAllCelticUserIdsScan() {
		List<String> ids = new ArrayList<>();

		ScanRequest scanRequest = new ScanRequest()
				.withTableName("celtic_users")
				.withAttributesToGet("user_id");

		ScanResult result = client.scan(scanRequest); // ResourceNotFoundException

		for (Map<String, AttributeValue> id : result.getItems()) {
			ids.add(id.get("user_id").toString());
		}

		return ids;
	}


	public void saveCelticUsers(CelticUser celticUser) {
		this.dynamoDbMapper.save(celticUser);
	}

	public void deleteCelticUser(CelticUser celticUser) {
		this.dynamoDbMapper.delete(celticUser);
	}

}
