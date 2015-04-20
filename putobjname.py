#!/usr/local/bin/python
# _*_ coding: utf-8 _*_

from boto.s3.connection import S3Connection

bucket_name = 's3metasearch'

conn = S3Connection()
bucket = conn.get_bucket(bucket_name)

for obj in bucket.list():
    print obj.name.encode('utf-8')




