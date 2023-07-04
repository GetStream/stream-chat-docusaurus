#!/bin/bash

# if directory does not exist, clone a repository in it 
if [ ! -d "stream-chat-docusaurus-cli" ]; then
  echo "Cloning stream-chat-docusaurus-cli in your home directory"
  git clone https://github.com/getstream/stream-chat-docusaurus-cli -b staging --depth 1
  # Move into the project directory
  cd stream-chat-docusaurus-cli
  # Install dependencies
  yarn
  # Install the package globally 
  npm install -g
  cd ..
fi

npx stream-chat-docusaurus -s
