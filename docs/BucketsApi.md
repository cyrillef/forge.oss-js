# ForgeOss.BucketsApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBucket**](BucketsApi.md#createBucket) | **POST** /oss/v2/buckets | 
[**deleteBucket**](BucketsApi.md#deleteBucket) | **DELETE** /oss/v2/buckets/{bucketKey} | 
[**getBucketDetails**](BucketsApi.md#getBucketDetails) | **GET** /oss/v2/buckets/{bucketKey}/details | 
[**getBuckets**](BucketsApi.md#getBuckets) | **GET** /oss/v2/buckets | 


<a name="createBucket"></a>
# **createBucket**
> Bucket createBucket(postBuckets, opts)



Use this endpoint to create a bucket. Buckets are arbitrary spaces created and owned by applications. Bucket keys are globally unique across all regions, regardless of where they were created, and they cannot be changed. The application creating the bucket is the owner of the bucket. 

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.BucketsApi();

var postBuckets = new ForgeOss.PostBucketsPayload(); // PostBucketsPayload | Body Structure

var opts = { 
  'xAdsRegion': "US" // String | The region where the bucket resides Acceptable values: `US`, `EMEA` Default is `US` 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBucket(postBuckets, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postBuckets** | [**PostBucketsPayload**](PostBucketsPayload.md)| Body Structure | 
 **xAdsRegion** | **String**| The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;  | [optional] [default to US]

### Return type

[**Bucket**](Bucket.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBucket"></a>
# **deleteBucket**
> deleteBucket(bucketKey, )



This endpoint will delete a bucket. 

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.BucketsApi();

var bucketKey = "bucketKey_example"; // String | URL-encoded bucket key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBucket(bucketKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketKey** | **String**| URL-encoded bucket key | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBucketDetails"></a>
# **getBucketDetails**
> Bucket getBucketDetails(bucketKey, )



This endpoint will return the buckets owned by the application. This endpoint supports pagination.

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.BucketsApi();

var bucketKey = "bucketKey_example"; // String | URL-encoded bucket key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBucketDetails(bucketKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketKey** | **String**| URL-encoded bucket key | 

### Return type

[**Bucket**](Bucket.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBuckets"></a>
# **getBuckets**
> InlineResponse200 getBuckets(opts)



This endpoint will return the buckets owned by the application. This endpoint supports pagination. 

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.BucketsApi();

var opts = { 
  'region': "US" // String | The region where the bucket resides Acceptable values: `US`, `EMEA` Default is `US` 
  'limit': 10, // Integer | Limit to the response size, Acceptable values: 1-100 Default = 10 
  'startAt': "startAt_example" // String | Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBuckets(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **region** | **String**| The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;  | [optional] [default to US]
 **limit** | **Integer**| Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10  | [optional] [default to 10]
 **startAt** | **String**| Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

