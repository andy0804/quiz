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
        'Your team needs to allow a third-party vendor to upload files only to s3://your-bucket/uploads/. They should have no other permissions. What is the best approach?',
      choices: [
        'Attach an IAM policy to the vendor’s user with s3:PutObject allowed only on arn:aws:s3:::your-bucket/uploads/*',
        'Add the vendor user to a group with full s3:* permissions on the bucket',
        'Use a bucket ACL to grant the vendor Write access on the uploads prefix',
        'Assign AmazonS3FullAccess to the vendor’s IAM role',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Attach an IAM policy to the vendor’s user with s3:PutObject allowed only on arn:aws:s3:::your-bucket/uploads/*',
      ],
      score: 10,
      explanation:
        'This follows least-privilege best practice—granting only the specific S3 action on the required prefix and no wider permissions.',
      reading:
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#least-privilege',
    },
    {
      question:
        'You have daily logs uploaded to S3 and need a long-term, cost‑effective storage strategy. Access is infrequent after 30 days. Which lifecycle policy is most appropriate?',
      choices: [
        'Transition objects to S3 Standard‑IA after 30 days, then Glacier Deep Archive after 90 days',
        'Keep all objects in S3 Standard indefinitely',
        'Transition objects to Glacier immediately after upload',
        'Delete objects after 30 days to minimize costs',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Transition objects to S3 Standard‑IA after 30 days, then Glacier Deep Archive after 90 days',
      ],
      score: 10,
      explanation:
        'Standard‑IA is cost-effective for infrequent older logs, and Glacier Deep Archive is ideal for long-term archival at minimal cost.',
      reading:
        'https://aws.amazon.com/s3/storage-classes/',
    },
    {
      question:
        'You need to automate creation of an IAM role named AppDeploymentRole for EC2 to assume and deploy apps. Which AWS CLI commands are needed? (Select two)',
      choices: [
        'aws iam create-role --role-name AppDeploymentRole ...',
        'aws iam put-role-policy --role-name AppDeploymentRole ...',
        'aws sts create-session --role-arn ...',
        'aws ec2 assign-role --role-name AppDeploymentRole ...',
      ],
      type: 'MAQs',
      correctAnswers: [
        'aws iam create-role --role-name AppDeploymentRole ...',
        'aws iam put-role-policy --role-name AppDeploymentRole ...',
      ],
      score: 10,
      explanation:
        'First create the IAM role, then attach policies. put-role-policy adds inline policies; sts is for assuming; and “assign-role” is invalid.',
      reading:
        'https://docs.aws.amazon.com/cli/latest/reference/iam/create-role.html',
    },
    {
      question:
        'In AWS CLI, after creating a role via create-role, which command attaches an AWS managed policy to it?',
      choices: [
        'aws iam attach-role-policy --role-name NAME --policy-arn ARN',
        'aws iam put-role-policy --role-name NAME --policy-arn ARN',
        'aws iam attach-policy --role NAME --arn ARN',
        'aws iam enable-role-policy --role NAME --policy ARN',
      ],
      type: 'MCQs',
      correctAnswers: [
        'aws iam attach-role-policy --role-name NAME --policy-arn ARN',
      ],
      score: 10,
      explanation:
        'attach-role-policy is the correct command for linking AWS managed policies to a role.',
      reading:
        'https://docs.aws.amazon.com/cli/latest/reference/iam/attach-role-policy.html',
    },
    {
      question:
        'You’re designing a fault-tolerant web application on EC2 with RDS. You want resiliency to AZ failure within your primary region. Which architecture should you implement?',
      choices: [
        'Distribute web servers across at least two Availability Zones in the region. Use RDS in a Multi‑AZ deployment.',
        'Launch all EC2 instances in one AZ and rely on snapshots for RDS.',
        'Deploy EC2 servers in one AZ and launch a duplicated RDS in a different region.',
        'Use a single AZ deployment with frequent snapshots.',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Distribute web servers across at least two Availability Zones in the region. Use RDS in a Multi‑AZ deployment.',
      ],
      score: 10,
      explanation:
        'This setup provides automated failover at both compute and database levels within the region.',
      reading:
        'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html',
    },
    {
      question:
        'You plan a global application: which AWS strategy reduces latency and improves resilience worldwide?',
      choices: [
        'Deploy the app in multiple Regions and separate AZs within each Region',
        'Deploy in one Region but multiple AZs',
        'Deploy in one AZ and replicate snapshots to other Regions',
        'Use local Zones only',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Deploy the app in multiple Regions and separate AZs within each Region',
      ],
      score: 10,
      explanation:
        'Multi-region with AZ separation allows regional failover and latency reduction closer to users.',
      reading:
        'https://aws.amazon.com/architecture/global-infrastructure/',
    },
    {
      question:
        'Your organization wants stricter security: all IAM access must require MFA. What IAM policy condition would you use to enforce this?',
      choices: [
        '"Condition": {"Bool": {"aws:MultiFactorAuthPresent": "true"}}',
        '"Condition": {"StringEquals": {"aws:PrincipalType": "MFA"}}',
        '"Condition": {"IpAddress": {"aws:SourceIp": "MFA_IP_RANGE"}}',
        '"Condition": {"Bool": {"aws:ViaMFA": "true"}}',
      ],
      type: 'MCQs',
      correctAnswers: [
        '"Condition": {"Bool": {"aws:MultiFactorAuthPresent": "true"}}',
      ],
      score: 10,
      explanation:
        'This condition ensures the request includes MFA-authenticated temporary credentials. BoolIfExists is similar but broader :contentReference[oaicite:1]{index=1}.',
      reading:
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html',
    },
    {
      question:
        'You need to clean up IAM permissions: which best practice helps minimize drift and maintain least privilege?',
      choices: [
        'Use IAM Access Analyzer to generate least‑privilege policies',
        'Aggregate users under a single all‑powerful group',
        'Assign AWS‑managed policies to everyone',
        'Avoid using permissions boundaries',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Use IAM Access Analyzer to generate least‑privilege policies',
      ],
      score: 10,
      explanation:
        'IAM Access Analyzer helps craft least-privilege policies by analyzing actual usage.',
      reading:
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer.html',
    },
    {
      question:
        'S3 bucket will receive high‑throughput uploads from many clients. Which configuration ensures scalable performance?',
      choices: [
        'Use random or hashed prefixes in object keys to avoid hot partitions',
        'Use sequential timestamps in keys for easy retrieval',
        'Store all objects in a single folder path',
        'Enable bucket versioning only',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Use random or hashed prefixes in object keys to avoid hot partitions',
      ],
      score: 10,
      explanation:
        'Distributing keys across prefixes spreads load across partitions, improving throughput :contentReference[oaicite:2]{index=2}.',
      reading:
        'https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html',
    },
    {
      question:
        'You have two AWS accounts: A hosts S3 bucket data‑bucket, and B runs analytics that need read access. Which steps are required? (Select all that apply)',
      choices: [
        'In Account A, add a bucket policy granting GetObject permission to Account B’s role ARN',
        'In Account B, attach AmazonS3ReadOnlyAccess to the analytics role',
        'Enable cross‑region replication to the analytics account',
        'Set the bucket ACL to ‘public‑read’ to allow access across accounts',
      ],
      type: 'MAQs',
      correctAnswers: [
        'In Account A, add a bucket policy granting GetObject permission to Account B’s role ARN',
        'In Account B, attach AmazonS3ReadOnlyAccess to the analytics role',
      ],
      score: 10,
      explanation:
        'Bucket policy allows cross-account access; attaching ReadOnlyAccess grants necessary permissions. Replication isn’t required and ACL public-read is insecure.',
      reading:
        'https://docs.aws.amazon.com/AmazonS3/latest/dev/example-walkthroughs.html',
    },
  ],
}

