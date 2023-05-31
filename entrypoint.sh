#!/bin/bash

export NODE_ENV=prod
export WEATHER_PRIVATE_KEY=SWT5ZlQQBSMZyX0bN
export EXPRESS_CUSTOMER=545C80DE684C9ACDC28BF9E2983A06B4
export EXPRESS_PRIVATE_KEY=0024637ef0e9492d817d4272d34c648f

echo "-------------master server ------------------"
node dist/main.js
