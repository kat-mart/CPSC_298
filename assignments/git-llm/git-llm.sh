#!/bin/bash

# Navigate to your git repository
cd /path/to/your/repo || exit

# Add changes to staging
git add .

# Make a commit with a dynamic message (current date, time, and a custom message)
git commit -m "Automated commit on $(date)"

# Push the changes to the remote repository (uncomment if needed)
# git push origin main  # Change 'main' to your branch name