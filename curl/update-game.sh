API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/" + "29"
curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=BAhJIiVlYjcxYzYyNTJiMjVmZGM1NTY4ZjZlMzM3ZjMxY2RkYgY6BkVG--9621f11fe596d00aa49c3861330917b0c02c841b"
  data
