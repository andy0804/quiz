// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'



export const aws: Topic = {
  topic: 'AWS Solutions Architect',
  level: 'Intermediate',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 1200,
  questions: [
    {
      question:
        'A developer accidentally deletes an important object in an S3 bucket. You want to prevent this in the future while still allowing deletions under strict conditions. What is the best approach?',
      choices: [
        'Enable versioning on the bucket and implement MFA Delete',
        'Use S3 Glacier Deep Archive for all objects',
        'Enable S3 event notifications for deletions',
        'Restrict all delete permissions for the IAM user',
      ],
      type: 'MCQs',
      correctAnswers: ['Enable versioning on the bucket and implement MFA Delete'],
      score: 10,
      explanation:
        'Versioning allows recovery of deleted objects. MFA Delete adds a security layer to delete operations, helping prevent accidental deletions.',
      reading:
        'https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMFADelete.html',
    },
    {
      question:
        'Which AWS CLI command lets you check which IAM user is currently authenticated via CLI?',
      choices: [
        'aws iam get-user',
        'aws sts get-caller-identity',
        'aws iam describe-user',
        'aws iam whoami',
      ],
      type: 'MCQs',
      correctAnswers: ['aws sts get-caller-identity'],
      score: 10,
      explanation:
        'The `aws sts get-caller-identity` command returns the IAM user, account, and ARN of the calling identity.',
      reading:
        'https://docs.aws.amazon.com/cli/latest/reference/sts/get-caller-identity.html',
    },
    {
      question:
        'A cross-region S3 replication setup is not working. All bucket permissions are correctly set. What could be the cause?',
      choices: [
        'Versioning is not enabled on both source and destination buckets',
        'The destination bucket has a lifecycle policy enabled',
        'Objects are encrypted with SSE-KMS',
        'Replication is disabled globally in the account',
      ],
      type: 'MCQs',
      correctAnswers: ['Versioning is not enabled on both source and destination buckets'],
      score: 10,
      explanation:
        'Cross-region replication requires versioning to be enabled on both the source and destination buckets.',
      reading:
        'https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html',
    },
    {
      question:
        'Which AWS Region should you choose for compliance with data residency laws in the European Union?',
      choices: [
        'eu-central-1 (Frankfurt)',
        'us-east-1 (N. Virginia)',
        'ap-southeast-2 (Sydney)',
        'sa-east-1 (São Paulo)',
      ],
      type: 'MCQs',
      correctAnswers: ['eu-central-1 (Frankfurt)'],
      score: 10,
      explanation:
        'eu-central-1 (Frankfurt) is a common choice for EU data residency compliance because it resides within the EU jurisdiction.',
      reading:
        'https://aws.amazon.com/about-aws/global-infrastructure/regions_az/',
    },
    {
      question:
        'A junior admin wants to grant temporary S3 read-only access to a developer for 12 hours using AWS CLI. What’s the correct approach?',
      choices: [
        'Create a temporary session using AWS STS assume-role',
        'Attach the AmazonS3ReadOnlyAccess policy directly to the user',
        'Use S3 pre-signed URLs for 12 hours',
        'Create an access key and delete it after 12 hours',
      ],
      type: 'MCQs',
      correctAnswers: ['Create a temporary session using AWS STS assume-role'],
      score: 10,
      explanation:
        'STS provides temporary credentials that expire after a set time, ideal for temporary access scenarios without needing long-term keys.',
      reading:
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html',
    },

    
        {
          question:
            'You need to move a 5GB object from your on-premise server to an S3 bucket using the AWS CLI. What command ensures a reliable and resumable transfer?',
          choices: [
            'aws s3 sync ./data s3://my-bucket/',
            'aws s3 mv ./file.zip s3://my-bucket/',
            'aws s3 cp ./file.zip s3://my-bucket/ --storage-class STANDARD',
            'aws s3 cp ./file.zip s3://my-bucket/ --expected-size 5GB',
          ],
          type: 'MCQs',
          correctAnswers: ['aws s3 cp ./file.zip s3://my-bucket/ --storage-class STANDARD'],
          score: 10,
          explanation:
            'The `aws s3 cp` command performs a multipart upload automatically for large files. `--storage-class` can optionally specify tier, but it’s not required. `sync` is for directories.',
          reading: 'https://docs.aws.amazon.com/cli/latest/reference/s3/cp.html',
        },
        {
          question:
            'Your S3 bucket hosts a static website. Users report 403 errors when visiting the URL. What is the most likely fix?',
          choices: [
            'Enable static website hosting and configure an index document',
            'Change the bucket storage class to One Zone-IA',
            'Enable versioning on the bucket',
            'Increase object size limits',
          ],
          type: 'MCQs',
          correctAnswers: ['Enable static website hosting and configure an index document'],
          score: 10,
          explanation:
            'S3 static hosting requires an index document. 403 errors occur if the index.html is not defined or public access is denied.',
          reading: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html',
        },
        {
          question:
            'An application is hosted in a single AZ and you need high availability during AZ failure. What’s the recommended architecture change?',
          choices: [
            'Deploy instances across multiple Availability Zones in the same Region',
            'Migrate the app to AWS Local Zones',
            'Deploy the app in a single Region but with auto-scaling',
            'Add a backup EC2 in the same AZ',
          ],
          type: 'MCQs',
          correctAnswers: ['Deploy instances across multiple Availability Zones in the same Region'],
          score: 10,
          explanation:
            'Multiple AZs in a single Region offer high availability without inter-region latency.',
          reading: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html',
        },
        {
          question:
            'You want to list all buckets in your AWS account using the CLI. What is the correct command?',
          choices: [
            'aws s3 list',
            'aws s3 ls',
            'aws s3api list-buckets',
            'aws s3 show buckets',
          ],
          type: 'MAQs',
          correctAnswers: ['aws s3 ls', 'aws s3api list-buckets'],
          score: 10,
          explanation:
            '`aws s3 ls` is a simple list; `s3api list-buckets` provides structured output. Both are valid.',
          reading: 'https://docs.aws.amazon.com/cli/latest/reference/s3api/list-buckets.html',
        },
        {
          question:
            'You are planning to deploy a latency-sensitive application for users in Asia and North America. Which strategy improves performance and resilience?',
          choices: [
            'Deploy to multiple AWS Regions like us-east-1 and ap-south-1',
            'Deploy to a single Region but enable CloudWatch alarms',
            'Use AWS Lambda with single Region fallback',
            'Host in one Region and rely on auto-scaling',
          ],
          type: 'MCQs',
          correctAnswers: ['Deploy to multiple AWS Regions like us-east-1 and ap-south-1'],
          score: 10,
          explanation:
            'Multi-Region deployments provide global reach, lower latency, and higher fault tolerance.',
          reading: 'https://aws.amazon.com/architecture/global-infrastructure/',
        },
      
        
  ],
}

