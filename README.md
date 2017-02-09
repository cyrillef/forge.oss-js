
# This package is now deprecated, please use the official [SDK](https://www.npmjs.com/package/forge-apis)

[![build status](https://api.travis-ci.org/cyrillef/models.autodesk.io.png)](https://travis-ci.org/cyrillef/models.autodesk.io)
[![Node.js](https://img.shields.io/badge/Node.js-5.11.1-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-3.9.3-blue.svg)](https://www.npmjs.com/)
![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)

*Forge API*:
[![oAuth2](https://img.shields.io/badge/oAuth2-v1-green.svg)](http://developer-autodesk.github.io/)
[![Data-Management](https://img.shields.io/badge/Data%20Management-v2-green.svg)](http://developer-autodesk.github.io/)
[![OSS](https://img.shields.io/badge/OSS-v2-green.svg)](http://developer-autodesk.github.io/)
[![Model-Derivative](https://img.shields.io/badge/Model%20Derivative-v2-green.svg)](http://developer-autodesk.github.io/)
[![Viewer](https://img.shields.io/badge/Forge%20Viewer-v2.10-green.svg)](http://developer-autodesk.github.io/)


# forge-oss
Asynchronous Javascript/Node.js library for the Autodesk Forge OSS API.

This SDK was generated from YAML using a modified version of the [Swagger tools](https://github.com/swagger-api/).
Modified version located [here](https://github.com/cyrillef/swagger-codegen).

Samples using this SDKs available [here](https://github.com/Autodesk-Forge).


## Installation

#### npm
```shell
npm install forge-oss --save
```

#### For browser
The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.


## Getting Started
Please follow the [installation](#installation) instruction and execute the following JS code:

This libray can either use callbacks ot Promises. Do not provide a callback parameter to use Promises.

#### callback version
```javascript
var ForgeOss =require ('forge-oss') ;

var defaultClient =ForgeOss.ApiClient.instance ;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application =defaultClient.authentications ['oauth2_application'] ;
oauth2_application.accessToken ="YOUR ACCESS TOKEN" ;

var api =new ForgeOss.BucketsApi()
 ;
var postBuckets =new ForgeOss.PostBucketsPayload() ; // {PostBucketsPayload} Body Structure
 ;
var opts ={ 
  'xAdsRegion': "US" // {String} The region where the bucket resides Acceptable values: `US`, `EMEA` Default is `US` 
};

var callback =function (error, data, response) {
  if ( error ) {
    console.error (error) ;
  } else {
    console.log ('API called successfully. Returned data: ' + data) ;
  }
};
api.createBucket(postBuckets, opts, callback) ;

```

#### Promise version
```javascript
var ForgeOss =require ('forge-oss') ;

var defaultClient =ForgeOss.ApiClient.instance ;

// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application =defaultClient.authentications ['oauth2_application'] ;
oauth2_application.accessToken ="YOUR ACCESS TOKEN" ;

var api =new ForgeOss.BucketsApi()
 ;
var postBuckets =new ForgeOss.PostBucketsPayload() ; // {PostBucketsPayload} Body Structure
 ;
var opts ={ 
  'xAdsRegion': "US" // {String} The region where the bucket resides Acceptable values: `US`, `EMEA` Default is `US` 
};

api.createBucket(postBuckets, opts).then (function (data) {
  console.log ('API called successfully. Returned data: ' + data) ;
}, function (error) {
  console.error (error) ;
}) ;

```


## Documentation for API Endpoints

All URIs are relative to *https://developer.api.autodesk.com/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ForgeOss.BucketsApi* | [**createBucket**](docs/BucketsApi.md#createBucket) | **POST** /oss/v2/buckets | 
*ForgeOss.BucketsApi* | [**deleteBucket**](docs/BucketsApi.md#deleteBucket) | **DELETE** /oss/v2/buckets/{bucketKey} | 
*ForgeOss.BucketsApi* | [**getBucketDetails**](docs/BucketsApi.md#getBucketDetails) | **GET** /oss/v2/buckets/{bucketKey}/details | 
*ForgeOss.BucketsApi* | [**getBuckets**](docs/BucketsApi.md#getBuckets) | **GET** /oss/v2/buckets | 
*ForgeOss.ObjectsApi* | [**copyTo**](docs/ObjectsApi.md#copyTo) | **PUT** /oss/v2/buckets/{bucketKey}/objects/{objectName}/copyTo/{newObjName} | 
*ForgeOss.ObjectsApi* | [**createSignedResource**](docs/ObjectsApi.md#createSignedResource) | **POST** /oss/v2/buckets/{bucketKey}/objects/{objectName}/signed | 
*ForgeOss.ObjectsApi* | [**deleteObject**](docs/ObjectsApi.md#deleteObject) | **DELETE** /oss/v2/buckets/{bucketKey}/objects/{objectName} | 
*ForgeOss.ObjectsApi* | [**deleteSignedResource**](docs/ObjectsApi.md#deleteSignedResource) | **DELETE** /oss/v2/signedresources/{id} | 
*ForgeOss.ObjectsApi* | [**getObject**](docs/ObjectsApi.md#getObject) | **GET** /oss/v2/buckets/{bucketKey}/objects/{objectName} | 
*ForgeOss.ObjectsApi* | [**getObjectDetails**](docs/ObjectsApi.md#getObjectDetails) | **GET** /oss/v2/buckets/{bucketKey}/objects/{objectName}/details | 
*ForgeOss.ObjectsApi* | [**getObjects**](docs/ObjectsApi.md#getObjects) | **GET** /oss/v2/buckets/{bucketKey}/objects | 
*ForgeOss.ObjectsApi* | [**getSessionid**](docs/ObjectsApi.md#getSessionid) | **GET** /oss/v2/buckets/{bucketKey}/objects/{objectName}/status/{sessionId} | 
*ForgeOss.ObjectsApi* | [**getSignedResource**](docs/ObjectsApi.md#getSignedResource) | **GET** /oss/v2/signedresources/{id} | 
*ForgeOss.ObjectsApi* | [**uploadChunk**](docs/ObjectsApi.md#uploadChunk) | **PUT** /oss/v2/buckets/{bucketKey}/objects/{objectName}/resumable | 
*ForgeOss.ObjectsApi* | [**uploadObject**](docs/ObjectsApi.md#uploadObject) | **PUT** /oss/v2/buckets/{bucketKey}/objects/{objectName} | 
*ForgeOss.ObjectsApi* | [**uploadSignedResource**](docs/ObjectsApi.md#uploadSignedResource) | **PUT** /oss/v2/signedresources/{id} | 
*ForgeOss.ObjectsApi* | [**uploadSignedResourcesChunk**](docs/ObjectsApi.md#uploadSignedResourcesChunk) | **PUT** /oss/v2/signedresources/{id}/resumable | 



## Documentation for Models

 - [ForgeOss.Bucket](docs/Bucket.md)
 - [ForgeOss.BucketPermissions](docs/BucketPermissions.md)
 - [ForgeOss.InlineResponse200](docs/InlineResponse200.md)
 - [ForgeOss.InlineResponse2001](docs/InlineResponse2001.md)
 - [ForgeOss.InlineResponse200Items](docs/InlineResponse200Items.md)
 - [ForgeOss.InputStream](docs/InputStream.md)
 - [ForgeOss.ObjectDetails](docs/ObjectDetails.md)
 - [ForgeOss.ObjectFullDetails](docs/ObjectFullDetails.md)
 - [ForgeOss.ObjectFullDetailsDeltas](docs/ObjectFullDetailsDeltas.md)
 - [ForgeOss.PostBucketsPayload](docs/PostBucketsPayload.md)
 - [ForgeOss.PostBucketsPayloadAllow](docs/PostBucketsPayloadAllow.md)
 - [ForgeOss.PostBucketsSigned](docs/PostBucketsSigned.md)
 - [ForgeOss.PostObjectSigned](docs/PostObjectSigned.md)
 - [ForgeOss.Reason](docs/Reason.md)



## Documentation for Authorization


### oauth2_access_code

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://developer.api.autodesk.com/authentication/v1/authorize
- **Scopes**: 
  - data:read: The application will be able to read the end user’s data within the Autodesk ecosystem.
  - data:write: The application will be able to create, update, and delete data on behalf of the end user within the Autodesk ecosystem.
  - data:create: The application will be able to create data on behalf of the end user within the Autodesk ecosystem.
  - data:search: The application will be able to search the end user’s data within the Autodesk ecosystem.
  - bucket:create: The application will be able to create an OSS bucket it will own.
  - bucket:read: The application will be able to read the metadata and list contents for OSS buckets that it has access to.
  - bucket:update: The application will be able to set permissions and entitlements for OSS buckets that it has permission to modify.
  - bucket:delete: The application will be able to delete a bucket that it has permission to delete.
  - code:all: The application will be able to author and execute code on behalf of the end user (e.g., scripts processed by the Design Automation API).
  - account:read: For Product APIs, the application will be able to read the account data the end user has entitlements to.
  - account:write: For Product APIs, the application will be able to update the account data the end user has entitlements to.
  - user-profile:read: The application will be able to read the end user’s profile data.

### oauth2_application

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - data:read: The application will be able to read the end user’s data within the Autodesk ecosystem.
  - data:write: The application will be able to create, update, and delete data on behalf of the end user within the Autodesk ecosystem.
  - data:create: The application will be able to create data on behalf of the end user within the Autodesk ecosystem.
  - data:search: The application will be able to search the end user’s data within the Autodesk ecosystem.
  - bucket:create: The application will be able to create an OSS bucket it will own.
  - bucket:read: The application will be able to read the metadata and list contents for OSS buckets that it has access to.
  - bucket:update: The application will be able to set permissions and entitlements for OSS buckets that it has permission to modify.
  - bucket:delete: The application will be able to delete a bucket that it has permission to delete.
  - code:all: The application will be able to author and execute code on behalf of the end user (e.g., scripts processed by the Design Automation API).
  - account:read: For Product APIs, the application will be able to read the account data the end user has entitlements to.
  - account:write: For Product APIs, the application will be able to update the account data the end user has entitlements to.
  - user-profile:read: The application will be able to read the end user’s profile data.



## Documentation & Support
For more information, please visit [https://developer.autodesk.com/en/docs/data/v2/](https://developer.autodesk.com/en/docs/data/v2/)

For support, please use [http://stackoverflow.com/questions/tagged/autodesk-data-management](http://stackoverflow.com/questions/tagged/autodesk-data-management)

--------

## License

This SDK is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT). Please see the [LICENSE](LICENSE) file for full details.


