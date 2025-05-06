#!/bin/bash

# Path to your backgrounds directory
BG_DIR=~/Pictures/hyprlock_backgrounds

# Select a random image from the directory
BG=$(find "$BG_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | shuf -n 1)

# Run hyprlock with the selected background
hyprlock -b "$BG"
