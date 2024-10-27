# Vercel is currently setup to never automatically deploy. If you ever want to specify what to deploy in detail, you can use the following script to do so (after changing vercels ignored build step setting). 
# echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

# if [[ "$VERCEL_GIT_COMMIT_REF" == "develop"]] ; then
#   # Proceed with the build
#     echo "✅ - Build can proceed"
#   exit 1;

# else
#   # Don't build
#   echo "🛑 - Build cancelled"
#   exit 0;
# fi