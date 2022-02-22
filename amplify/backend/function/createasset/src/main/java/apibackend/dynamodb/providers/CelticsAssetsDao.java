package apibackend.dynamodb.providers;

import apibackend.dynamodb.models.CelticAsset;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;

import java.util.HashMap;
import java.util.Map;


public class CelticsAssetsDao {
    AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().build();
    DynamoDBMapper mapper;

    public CelticsAssetsDao() {
        mapper = new DynamoDBMapper(client);
    }

    public void save(CelticAsset asset) {
        mapper.save(asset);
    }

    public void delete(String user_id, CelticAsset asset) {
        mapper.delete(mapper.load(CelticAsset.class, user_id, asset.getAssetId()));
    }

    public CelticAsset getAsset(String user_id, String asset_id) {
        return mapper.load(CelticAsset.class, user_id, asset_id);
    }

    public CelticAsset getUserId(String user_id) {
        return mapper.load(CelticAsset.class, user_id);
    }

    public void update(CelticAsset asset) {
        mapper.save(asset);
    }

    // scanExpression could be used to get all assets for a user
    public void deleteAll() {
        mapper.batchDelete(mapper.scan(CelticAsset.class, null));
    }

    public void deleteAllAssetsFromUser(String user_id) {
        Map<String, AttributeValue> eav = new HashMap<String, AttributeValue>();
        eav.put(":user_id", new AttributeValue().withS(user_id));
        mapper.batchDelete(mapper.scan(CelticAsset.class,
                new DynamoDBScanExpression()
                        .withFilterExpression("user_id = :user_id")
                        .withExpressionAttributeValues(eav)));

    }

}
