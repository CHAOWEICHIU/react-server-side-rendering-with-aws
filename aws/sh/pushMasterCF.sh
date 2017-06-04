aws cloudformation deploy \
  --stack-name $2 \
  --template-file ${PWD}/aws/CloudFormation/master.yml \
  --capabilities=CAPABILITY_NAMED_IAM \
  --parameter-overrides GitHubToken=$1
