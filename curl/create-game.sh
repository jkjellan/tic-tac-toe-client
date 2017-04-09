API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=BAhJIiUwNGM2N2RmMjhjNjU0MTdhNzRjMWI3MWMyZmVlMGViMgY6BkVG--8eee7b2591b10ed788530f66251de2175b3d4805"
