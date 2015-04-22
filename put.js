var AWS = require('aws-sdk');

var bucket_name = 's3metasearch';
var table_name = 's3metasearch'
region = 'ap-northeast-1';

// S3 Configuration
var s3 = new AWS.S3({params: {Bucket: bucket_name}});

// DynamoDB Configuration
var dynamo = new AWS.DynamoDB({region: region});

// List S3 object and put metadata into DynamoDB
s3.listObjects(function(err,data) {
    if(err == null) {
        for(var i=0; i<data.Contents.length; i++){
            console.log("key=" + data.Contents[i].Key);
            console.log("Last Modified=" + data.Contents[i].LastModified);
            console.log("Size=" + data.Contents[i].Size);
            dynamo.putItem({"TableName": table_name,
                "Item": {
                    "bucket": {"S": bucket_name},
                    "key": {"S": data.Contents[i].Key},
                    "lastmodified": {"S": String(data.Contents[i].LastModified)},
                    "size":{"N": String(data.Contents[i].Size)}
                }
            }, function(err, res){
                if (err) {
                    console.log(err);
                }else{
                    console.log(res);
                }
            });
        }
    }
});
