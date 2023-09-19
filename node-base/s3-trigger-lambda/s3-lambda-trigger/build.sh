#!/bin/sh
echo "Build process started"

cd s3-trigger-lambda/s3-lambda-trigger
npm install

npm run lambda:zip

echo "Build process end"