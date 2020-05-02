set -f
string=$PROD_DEPLOY_SERVER
array=(${string//,/ })

for i in "${!array[@]}"; do
    echo "Deploy project on server ${array[i]}"
    ssh ec2-user@${array[i]} "cd locumplus_frontend && git pull && npm install && pm2 restart 0"
done