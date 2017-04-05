API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/change-password/6"
curl --include --request PATCH "${API}${URL_PATH}" \
  --header "Authorization: Token token=BAhJIiVlOTdkMDg2OTllZmFmMjc3MGJjYzE3ODI0NWFkNmM5YgY6BkVG--8d5e42f6b6f4095ffa205dc31ff9ac169317fe2e" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"aaa"'",
      "new": "'"aaaa"'"
    }
  }'
