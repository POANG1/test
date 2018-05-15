let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {


	s3.getObject({
		'Bucket': "com.slappforge.sigma.test.263248768798.jchamath.us-east-1",
		'Key': "test"
	}).promise()
		.then(data => {
			console.log(data);           // successful response
			/*
			data = {
				AcceptRanges: "bytes", 
				ContentLength: 3191, 
				ContentType: "image/jpeg", 
				ETag: "\\"6805f2cfc46c0f04559748bb039d69ae\\"", 
				LastModified: <Date Representation>, 
				Metadata: {...}, 
				TagCount: 2, 
				VersionId: "null"
			}
			*/
			callback(null, data);
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
			callback(err.errorMessage);
		});
	
}