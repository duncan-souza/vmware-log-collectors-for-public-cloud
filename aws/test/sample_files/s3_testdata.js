/*
Copyright 2018 VMware, Inc.
SPDX-License-Identifier: MIT
*/

const s3SampleData = () => ({
  Records: [
    {
      eventVersion: '2.0',
      eventSource: 'aws:s3',
      awsRegion: 'us-west-2',
      eventTime: '1970-01-01T00:00:00.000Z',
      eventName: 'ObjectCreated:Put',
      userIdentity: {
        principalId: 'AIDAJDPLRKLG7UEXAMPLE'
      },
      requestParameters: {
        sourceIPAddress: '127.0.0.1'
      },
      responseElements: {
        xamzrequestid: 'C3D13FE58DE4C810',
        xamzid2: 'FMyUVURIY8/IgAtTv8xRjskZQpcIZ9KG4V5Wp6S7S/JRWeUWerMUE5JgHvANOjpD'
      },
      s3: {
        s3SchemaVersion: '1.0',
        configurationId: 'testConfigRule',
        bucket: {
          name: 'sourcebucket',
          ownerIdentity: {
            principalId: 'A3NL1KOZZKExample'
          },
          arn: 'arn:aws:s3:::sourcebucket'
        },
        object: {
          key: 'HappyFace.jpg',
          size: 1024,
          eTag: 'd41d8cd98f00b204e9800998ecf8427e',
          versionId: '096fKKXTRTtl3on89fVO.nfljtsv6qko'
        },
      },
    },
  ],
});

module.exports = {
  s3SampleData,
};