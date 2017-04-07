API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games?over=true"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=BAhJIiViOTY0YTFhNzBmMGQ3MDNhZTc4MDczNTliN2VkZGUzOAY6BkVG--c09300e0a892b2388dc7d17b9ba3ad449d075ef9"
