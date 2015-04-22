# S3 Metadata search

### Overview
This sample code is capable of putting S3 metadata into DynamoDB table. 

##### put.js
Retrieve S3 metadata and put it into DynamoDB table.

##### scan.js
Scan DynamoDB table with searching word. (contains condition)

### Get start

1. Launch EC2 instance and apply IAM role.
2. Create DynamoDB table.
3. Download this code.

### IAM role
Attach following policies to role and apply the IAM role to EC2 instance. Please specifiy the resources tailored your environment.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:Get*",
        "s3:List*"
      ],
      "Resource": "*"
    }
  ]
}
```

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "dynamodb:*",
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
```
### DynamoDB Table

##### Table Scheme

* bucket(Hash key)
* key(Range key)
* lastmodified
* size

Create Local Secondary Indexes with Hash Key(bucket) and Range Key(key)





