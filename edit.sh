#!/bin/bash

path="./"
src=""
compiled=""
explore=""
srcpath="$path/$src"
compilepath="$path/$compiled"
explorepath="$path/$explore"
session="site"

# Check if the session already exists
tmux has-session -t $session 2>/dev/null
if [ $? != 0 ]; then
    # -------------------------
    # Window 1: Editor
    # -------------------------
    tmux new-session -s $session -n edit -d
    tmux send-keys -t $session:1 "cd $srcpath && vim" C-m
    tmux send-keys -t $session:1 'C-l' C-m
    tmux send-keys -t $session:1 ":e index.html" C-m

    # -------------------------
    # Window 2: Compile
    # -------------------------
    tmux new-window -n compile -t $session
    tmux send-keys -t $session:2 "cd $compilepath && clear" C-m

    # -------------------------
    # Window 3: Ranger
    # -------------------------
    tmux new-window -n ranger -t $session
    tmux send-keys -t $session:3 "cd $explorepath && ranger" C-m

    # Focus on first window
    tmux select-window -t $session:1
fi

# Attach to the session
tmux attach -t $session
