API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/sign-out/6"
  curl "${API}${URL_PATH}" \
    --include \
    --request DELETE \
    --header "Authorization: Token token=BAhJIiUwMjYxM2Q3MGUxZTI0NDc1Y2QxNzlkZjg1ZGZkN2FiNwY6BkVG--2bfe4531f28fd77c6eae1fbf33d87f8dab0498a8"
