package apibackend.dynamodb;

import apibackend.dynamodb.models.CelticAsset;
import apibackend.exception.CelticUsersNotFoundException;
import apibackend.exception.InvalidAttributeException;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CelticAssetsDao {

    private final AmazonDynamoDB client;
    private final DynamoDBMapper dynamoDbMapper;


    public CelticAssetsDao(AmazonDynamoDB amazonDynamoDB) {
        this.client = amazonDynamoDB;
        this.dynamoDbMapper = new DynamoDBMapper(client);
    }

    public void load(CelticAsset celticUsers) {
        this.dynamoDbMapper.load(celticUsers);
    }

    public List<CelticAsset> getCelticAssetsFromAssetsTable(String name) {

        if (name == null) {
            throw new InvalidAttributeException();
        }

        Map<String, AttributeValue> names = new HashMap<>();

        names.put(":asset_name", new AttributeValue().withS(name));

        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression()
                .withFilterExpression("contains(asset_name, :asset_name)")
                .withExpressionAttributeValues(names);

        return dynamoDbMapper.scan(CelticAsset.class, scanExpression);
    }

    public CelticAsset getCelticAssets(String userId, String assertId) {
        CelticAsset celticAssets = this.dynamoDbMapper.load(CelticAsset.class, userId, assertId);
        if (celticAssets == null) {
            throw new CelticUsersNotFoundException("Could not find playlist with id " + userId + assertId);
        }
        return celticAssets;
    }

    public void saveCelticAssets(CelticAsset celticAssets) {
        this.dynamoDbMapper.save(celticAssets);
    }

}
