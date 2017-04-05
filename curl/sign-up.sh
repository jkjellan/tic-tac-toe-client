curl --include --request POST http://localhost:4741/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "boo",
      "password": "boo",
      "password_confirmation": "boo"
    }
  }'
