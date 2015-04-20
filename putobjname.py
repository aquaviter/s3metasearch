#!/usr/bin/python
# _*_ coding: utf-8 _*_

import boto
from boto.sts import STSConnection
from boto.s3.connection import S3Connection

bucket_name = 's3metasearch'
role_name = 's3metasearchRole'

sts_connection = STSConnection()
assumedRoleObject = sts_connection.assume_role(
    role_arn="arn:aws:iam::640175474045:role/s3metasearchRole",
    role_session_name="AssumeRoleSession1"
)

s3_connection = S3Connection(
    aws_access_key_id=assumedRoleObject.credentials.access_key,
    aws_secret_access_key=assumedRoleObject.credentials.secret_key,
    security_token=assumedRoleObject.credentials.session_token
)
bucketList = s3_connection.get_all_buckets()
for bucket in bucketList:
	print bucket.name

