var AWS = require('aws-sdk');

var table_name = 's3metasearch'
region = 'ap-northeast-1';

var search_word = "png";

// DynamoDB Configuration
var dynamo = new AWS.DynamoDB({region: region});

// Scan data with searching word
dynamo.scan({"TableName": table_name,
    Select: "ALL_ATTRIBUTES",
    ScanFilter:{
        "key":{
            "AttributeValueList": [{"S": search_word}],
            "ComparisonOperator": "CONTAINS"
        }
    }
}, function(err, res){
    if (err) {
        console.log(err);
    }else{
        for(var i=0; i<res.Items.length; i++){
            bucket = res.Items[i].bucket['S'];
            key = res.Items[i].key['S'];
            console.log(bucket + '/' + key);
        }
    }
});
