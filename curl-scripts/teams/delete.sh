curl "http://thebadlands.herokuapp.com/teams/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
