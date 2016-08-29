# ForgeOss.Bucket

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucketKey** | **String** | The key for the created bucket | 
**bucketOwner** | **String** | Owner of the bucket | 
**createdDate** | **Integer** | Timestamp in epoch time | 
**permissions** | [**[BucketPermissions]**](BucketPermissions.md) | Array of objects representing the applications with access granted at bucket creation | 
**policyKey** | **String** | [Data retention policy](https://developer.autodesk.com/en/docs/data/v2/overview/retention-policy/)  Acceptable values: &#x60;transient&#x60;, &#x60;temporary&#x60; or &#x60;persistent&#x60;  | 


<a name="PolicyKeyEnum"></a>
## Enum: PolicyKeyEnum


* `transient` (value: `"transient"`)

* `temporary` (value: `"temporary"`)

* `persistent` (value: `"persistent"`)




