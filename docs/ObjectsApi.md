# ForgeOss.ObjectsApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyTo**](ObjectsApi.md#copyTo) | **PUT** /oss/v2/buckets/{bucketKey}/objects/{objectName}/copyTo/{newObjName} | 
[**createSignedResource**](ObjectsApi.md#createSignedResource) | **POST** /oss/v2/buckets/{bucketKey}/objects/{objectName}/signed | 
[**deleteObject**](ObjectsApi.md#deleteObject) | **DELETE** /oss/v2/buckets/{bucketKey}/objects/{objectName} | 
[**deleteSignedResource**](ObjectsApi.md#deleteSignedResource) | **DELETE** /oss/v2/signedresources/{id} | 
[**getObject**](ObjectsApi.md#getObject) | **GET** /oss/v2/buckets/{bucketKey}/objects/{objectName} | 
[**getObjectDetails**](ObjectsApi.md#getObjectDetails) | **GET** /oss/v2/buckets/{bucketKey}/objects/{objectName}/details | 
[**getObjects**](ObjectsApi.md#getObjects) | **GET** /oss/v2/buckets/{bucketKey}/objects | 
[**getSessionid**](ObjectsApi.md#getSessionid) | **GET** /oss/v2/buckets/{bucketKey}/objects/{objectName}/status/{sessionId} | 
[**getSignedResource**](ObjectsApi.md#getSignedResource) | **GET** /oss/v2/signedresources/{id} | 
[**uploadChunk**](ObjectsApi.md#uploadChunk) | **PUT** /oss/v2/buckets/{bucketKey}/objects/{objectName}/resumable | 
[**uploadObject**](ObjectsApi.md#uploadObject) | **PUT** /oss/v2/buckets/{bucketKey}/objects/{objectName} | 
[**uploadSignedResource**](ObjectsApi.md#uploadSignedResource) | **PUT** /oss/v2/signedresources/{id} | 
[**uploadSignedResourcesChunk**](ObjectsApi.md#uploadSignedResourcesChunk) | **PUT** /oss/v2/signedresources/{id}/resumable | 


<a name="copyTo"></a>
# **copyTo**
> ObjectDetails copyTo(bucketKey, objectName, newObjName)



Copies an object to another object name in the same bucket.

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.ObjectsApi();

var bucketKey = "bucketKey_example"; // String | URL-encoded bucket key

var objectName = "objectName_example"; // String | URL-encoded object name

var newObjName = "newObjName_example"; // String | URL-encoded Object key to use as the destination


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.copyTo(bucketKey, objectName, newObjName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketKey** | **String**| URL-encoded bucket key | 
 **objectName** | **String**| URL-encoded object name | 
 **newObjName** | **String**| URL-encoded Object key to use as the destination | 

### Return type

[**ObjectDetails**](ObjectDetails.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSignedResource"></a>
# **createSignedResource**
> PostObjectSigned createSignedResource(bucketKey, objectName, postBucketsSigned, opts)



This endpoint creates a signed URL that can be used to download an object within the specified expiration time. Be aware that if the object the signed URL points to is deleted or expires before the signed URL expires, then the signed URL will no longer be valid. A successful call to this endpoint requires bucket owner access.

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.ObjectsApi();

var bucketKey = "bucketKey_example"; // String | URL-encoded bucket key

var objectName = "objectName_example"; // String | URL-encoded object name

var postBucketsSigned = new ForgeOss.PostBucketsSigned(); // PostBucketsSigned | Body Structure

var opts = { 
  'access': "read" // String | Access for signed resource Acceptable values: `read`, `write`, `readwrite`. Default value: `read` 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSignedResource(bucketKey, objectName, postBucketsSigned, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketKey** | **String**| URL-encoded bucket key | 
 **objectName** | **String**| URL-encoded object name | 
 **postBucketsSigned** | [**PostBucketsSigned**](PostBucketsSigned.md)| Body Structure | 
 **access** | **String**| Access for signed resource Acceptable values: &#x60;read&#x60;, &#x60;write&#x60;, &#x60;readwrite&#x60;. Default value: &#x60;read&#x60;  | [optional] [default to read]

### Return type

[**PostObjectSigned**](PostObjectSigned.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteObject"></a>
# **deleteObject**
> deleteObject(bucketKey, objectName, )



Deletes an object from the bucket.

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.ObjectsApi();

var bucketKey = "bucketKey_example"; // String | URL-encoded bucket key

var objectName = "objectName_example"; // String | URL-encoded object name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteObject(bucketKey, objectName, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketKey** | **String**| URL-encoded bucket key | 
 **objectName** | **String**| URL-encoded object name | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteSignedResource"></a>
# **deleteSignedResource**
> InputStream deleteSignedResource(id, , opts)



Delete a signed URL. A successful call to this endpoint requires bucket owner access.

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.ObjectsApi();

var id = "id_example"; // String | Id of signed resource

var opts = { 
  'region': "US" // String | The region where the bucket resides Acceptable values: `US`, `EMEA` Default is `US` 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteSignedResource(id, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of signed resource | 
 **region** | **String**| The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;  | [optional] [default to US]

### Return type

[**InputStream**](InputStream.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="getObject"></a>
# **getObject**
> InputStream getObject(bucketKey, objectName, , opts)



Download an object.

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.ObjectsApi();

var bucketKey = "bucketKey_example"; // String | URL-encoded bucket key

var objectName = "objectName_example"; // String | URL-encoded object name

var opts = { 
  'range': "range_example", // String | A range of bytes to download from the specified object.
  'ifNoneMatch': "ifNoneMatch_example", // String | The value of this header is compared to the ETAG of the object. If they match, the body will not be included in the response. Only the object information will be included.
  'ifModifiedSince': new Date("2013-10-20"), // Date | If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body. 
  'acceptEncoding': "acceptEncoding_example", // String | When gzip is specified, a gzip compressed stream of the object’s bytes will be returned in the response. Cannot use “Accept-Encoding:gzip” with Range header containing an end byte range. End byte range will not be honored if “Accept-Encoding: gzip” header is used. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getObject(bucketKey, objectName, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketKey** | **String**| URL-encoded bucket key | 
 **objectName** | **String**| URL-encoded object name | 
 **range** | **String**| A range of bytes to download from the specified object. | [optional] 
 **ifNoneMatch** | **String**| The value of this header is compared to the ETAG of the object. If they match, the body will not be included in the response. Only the object information will be included. | [optional] 
 **ifModifiedSince** | **Date**| If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.  | [optional] 
 **acceptEncoding** | **String**| When gzip is specified, a gzip compressed stream of the object’s bytes will be returned in the response. Cannot use “Accept-Encoding:gzip” with Range header containing an end byte range. End byte range will not be honored if “Accept-Encoding: gzip” header is used.  | [optional] 

### Return type

[**InputStream**](InputStream.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream

<a name="getObjectDetails"></a>
# **getObjectDetails**
> ObjectFullDetails getObjectDetails(bucketKey, objectName, , opts)



Returns object details in JSON format.

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.ObjectsApi();

var bucketKey = "bucketKey_example"; // String | URL-encoded bucket key

var objectName = "objectName_example"; // String | URL-encoded object name

var opts = { 
  'ifModifiedSince': new Date("2013-10-20"), // Date | If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body. 
  '_with': "_with_example" // String | Extra information in details; multiple uses are supported Acceptable values: `createdDate`, `lastAccessedDate`, `lastModifiedDate` 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getObjectDetails(bucketKey, objectName, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketKey** | **String**| URL-encoded bucket key | 
 **objectName** | **String**| URL-encoded object name | 
 **ifModifiedSince** | **Date**| If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.  | [optional] 
 **_with** | **String**| Extra information in details; multiple uses are supported Acceptable values: &#x60;createdDate&#x60;, &#x60;lastAccessedDate&#x60;, &#x60;lastModifiedDate&#x60;  | [optional] 

### Return type

[**ObjectFullDetails**](ObjectFullDetails.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getObjects"></a>
# **getObjects**
> InlineResponse2001 getObjects(bucketKey, , opts)



List objects in a bucket. It is only available to the bucket creator.

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.ObjectsApi();

var bucketKey = "bucketKey_example"; // String | URL-encoded bucket key

var opts = { 
  'limit': 10, // Integer | Limit to the response size, Acceptable values: 1-100 Default = 10 
  'beginsWith': "beginsWith_example", // String | Provides a way to filter the based on object key name
  'startAt': "startAt_example" // String | Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getObjects(bucketKey, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketKey** | **String**| URL-encoded bucket key | 
 **limit** | **Integer**| Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10  | [optional] [default to 10]
 **beginsWith** | **String**| Provides a way to filter the based on object key name | [optional] 
 **startAt** | **String**| Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSessionid"></a>
# **getSessionid**
> getSessionid(bucketKey, objectName, sessionId)



This endpoint returns status information about a resumable upload.

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.ObjectsApi();

var bucketKey = "bucketKey_example"; // String | URL-encoded bucket key

var objectName = "objectName_example"; // String | URL-encoded object name

var sessionId = "sessionId_example"; // String | Unique identifier of a session of a file being uploaded


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSessionid(bucketKey, objectName, sessionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketKey** | **String**| URL-encoded bucket key | 
 **objectName** | **String**| URL-encoded object name | 
 **sessionId** | **String**| Unique identifier of a session of a file being uploaded | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSignedResource"></a>
# **getSignedResource**
> InputStream getSignedResource(id, , opts)



Download an object using a signed URL.

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.ObjectsApi();

var id = "id_example"; // String | Id of signed resource

var opts = { 
  'range': "range_example", // String | A range of bytes to download from the specified object.
  'ifNoneMatch': "ifNoneMatch_example", // String | The value of this header is compared to the ETAG of the object. If they match, the body will not be included in the response. Only the object information will be included.
  'ifModifiedSince': new Date("2013-10-20"), // Date | If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body. 
  'acceptEncoding': "acceptEncoding_example", // String | When gzip is specified, a gzip compressed stream of the object’s bytes will be returned in the response. Cannot use “Accept-Encoding:gzip” with Range header containing an end byte range. End byte range will not be honored if “Accept-Encoding: gzip” header is used. 
  'region': "US" // String | The region where the bucket resides Acceptable values: `US`, `EMEA` Default is `US` 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSignedResource(id, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of signed resource | 
 **range** | **String**| A range of bytes to download from the specified object. | [optional] 
 **ifNoneMatch** | **String**| The value of this header is compared to the ETAG of the object. If they match, the body will not be included in the response. Only the object information will be included. | [optional] 
 **ifModifiedSince** | **Date**| If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.  | [optional] 
 **acceptEncoding** | **String**| When gzip is specified, a gzip compressed stream of the object’s bytes will be returned in the response. Cannot use “Accept-Encoding:gzip” with Range header containing an end byte range. End byte range will not be honored if “Accept-Encoding: gzip” header is used.  | [optional] 
 **region** | **String**| The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;  | [optional] [default to US]

### Return type

[**InputStream**](InputStream.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream

<a name="uploadChunk"></a>
# **uploadChunk**
> ObjectDetails uploadChunk(bucketKey, objectName, contentLength, contentRange, sessionId, body, opts)



This endpoint allows resumable uploads for large files in chunks.

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.ObjectsApi();

var bucketKey = "bucketKey_example"; // String | URL-encoded bucket key

var objectName = "objectName_example"; // String | URL-encoded object name

var contentLength = 56; // Integer | Indicates the size of the request body.

var contentRange = "contentRange_example"; // String | Byte range of a segment being uploaded

var sessionId = "sessionId_example"; // String | Unique identifier of a session of a file being uploaded

var body = new ForgeOss.InputStream(); // InputStream | 

var opts = { 
  'contentDisposition': "contentDisposition_example", // String | The suggested default filename when downloading this object to a file after it has been uploaded.
  'ifMatch': "ifMatch_example" // String | If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadChunk(bucketKey, objectName, contentLength, contentRange, sessionId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketKey** | **String**| URL-encoded bucket key | 
 **objectName** | **String**| URL-encoded object name | 
 **contentLength** | **Integer**| Indicates the size of the request body. | 
 **contentRange** | **String**| Byte range of a segment being uploaded | 
 **sessionId** | **String**| Unique identifier of a session of a file being uploaded | 
 **body** | [**InputStream**](InputStream.md)|  | 
 **contentDisposition** | **String**| The suggested default filename when downloading this object to a file after it has been uploaded. | [optional] 
 **ifMatch** | **String**| If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written.  | [optional] 

### Return type

[**ObjectDetails**](ObjectDetails.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="uploadObject"></a>
# **uploadObject**
> ObjectDetails uploadObject(bucketKey, objectName, contentLength, body, opts)



Upload an object. If the specified object name already exists in the bucket, the uploaded content will overwrite the existing content for the bucket name/object name combination. 

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.ObjectsApi();

var bucketKey = "bucketKey_example"; // String | URL-encoded bucket key

var objectName = "objectName_example"; // String | URL-encoded object name

var contentLength = 56; // Integer | Indicates the size of the request body.

var body = new ForgeOss.InputStream(); // InputStream | 

var opts = { 
  'contentDisposition': "contentDisposition_example", // String | The suggested default filename when downloading this object to a file after it has been uploaded.
  'ifMatch': "ifMatch_example" // String | If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadObject(bucketKey, objectName, contentLength, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketKey** | **String**| URL-encoded bucket key | 
 **objectName** | **String**| URL-encoded object name | 
 **contentLength** | **Integer**| Indicates the size of the request body. | 
 **body** | [**InputStream**](InputStream.md)|  | 
 **contentDisposition** | **String**| The suggested default filename when downloading this object to a file after it has been uploaded. | [optional] 
 **ifMatch** | **String**| If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written.  | [optional] 

### Return type

[**ObjectDetails**](ObjectDetails.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="uploadSignedResource"></a>
# **uploadSignedResource**
> PostObjectSigned uploadSignedResource(id, contentLength, body, opts)



Overwrite a existing object using a signed URL.  Conditions to call this operation:  Object is available Expiration period is valid Signed URL should be created with &#x60;write&#x60; or &#x60;readwrite&#x60; 

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.ObjectsApi();

var id = "id_example"; // String | Id of signed resource

var contentLength = 56; // Integer | Indicates the size of the request body.

var body = new ForgeOss.InputStream(); // InputStream | 

var opts = { 
  'contentDisposition': "contentDisposition_example", // String | The suggested default filename when downloading this object to a file after it has been uploaded.
  'xAdsRegion': "US" // String | The region where the bucket resides Acceptable values: `US`, `EMEA` Default is `US` 
  'ifMatch': "ifMatch_example" // String | If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadSignedResource(id, contentLength, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of signed resource | 
 **contentLength** | **Integer**| Indicates the size of the request body. | 
 **body** | [**InputStream**](InputStream.md)|  | 
 **contentDisposition** | **String**| The suggested default filename when downloading this object to a file after it has been uploaded. | [optional] 
 **xAdsRegion** | **String**| The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;  | [optional] [default to US]
 **ifMatch** | **String**| If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written.  | [optional] 

### Return type

[**PostObjectSigned**](PostObjectSigned.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="uploadSignedResourcesChunk"></a>
# **uploadSignedResourcesChunk**
> PostObjectSigned uploadSignedResourcesChunk(id, contentRange, sessionId, body, opts)



Resumable upload for signed URLs.

### Example
```javascript
var ForgeOss = require('forge-oss');
var defaultClient = ForgeOss.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeOss.ObjectsApi();

var id = "id_example"; // String | Id of signed resource

var contentRange = "contentRange_example"; // String | Byte range of a segment being uploaded

var sessionId = "sessionId_example"; // String | Unique identifier of a session of a file being uploaded

var body = new ForgeOss.InputStream(); // InputStream | 

var opts = { 
  'contentDisposition': "contentDisposition_example", // String | The suggested default filename when downloading this object to a file after it has been uploaded.
  'xAdsRegion': "US" // String | The region where the bucket resides Acceptable values: `US`, `EMEA` Default is `US` 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadSignedResourcesChunk(id, contentRange, sessionId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of signed resource | 
 **contentRange** | **String**| Byte range of a segment being uploaded | 
 **sessionId** | **String**| Unique identifier of a session of a file being uploaded | 
 **body** | [**InputStream**](InputStream.md)|  | 
 **contentDisposition** | **String**| The suggested default filename when downloading this object to a file after it has been uploaded. | [optional] 
 **xAdsRegion** | **String**| The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;  | [optional] [default to US]

### Return type

[**PostObjectSigned**](PostObjectSigned.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

