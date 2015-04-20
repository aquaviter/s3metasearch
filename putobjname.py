#!/usr/bin/python
# _*_ coding: utf-8 _*_

import urllib2
import ast
from boto.s3.connection import S3Connection

bucket_name = 's3metasearch'

resp=urllib2.urlopen('http://169.254.169.254/latest/meta-data/iam/security-credentials/'+ bucket_name).read()
resp=ast.literal_eval(resp)
conn = S3Connection(resp['AccessKeyId'],resp['SecretAccessKey'])
bucket = conn.get_bucket(bucket_name)

for obj in bucket.list():
    print obj.name.encode('utf-8')




