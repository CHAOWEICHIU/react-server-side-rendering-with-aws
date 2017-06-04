echo
echo
echo
echo "\033[0;32m----------Start to Update CloudFormation Templates----------"

echo "\033[0;36m"
aws s3 rm s3://cf-for-niceday-v2-react-server-side --recursive
aws s3 sync ${PWD}/aws/CloudFormation/. s3://cf-for-niceday-v2-react-server-side
echo
echo "\033[0;32m----------Done Update CloudFormation Templates----------"
echo
echo
echo
